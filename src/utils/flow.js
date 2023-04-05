// * Crear una order
// ? Qué pasa --> Cuando un usuario decide comprar los productos que tiene en el carrito

// TODO --> Se hace una petición POST a '/api/v1/order'

const sellCar = async (req, res, next) => {
  try {
    // * creamos la orden de compra
    const { userId, total } = req.body; // * sacamos el userId del usuario que realiza la compra
    const order = await Order.create({ userId, total });
    // { id: 1, total: 200, userId: 21 }

    // * agregar los productos del carrito a los productos de la orden
    // TODO encontrar los productos del carrito
    // TODO encontrar el id del carrito del usuario 21 --> Done
    const userCar = await Car.findOne({ where: { userId } });
    // { id: 4, total: 200, userId: 21}
    // TODO obtener todos los productos del carrito con el id userCar.id
    const products = ProductsInCar.findAll({
      where: { carId: userCar.id },
    });
    /* [
      {id: 4,	productId: 1001,	CarId: 4, quty: 4,	price: 25,	status: 'np'},
      {id: 6,	productId: 502,	CarId: 4, quty: 1,	price: 50,	status: 'np'},
      {id: 4,	productId: 2, CarId: 4, quty: 4,	price: 30,	status: 'np'},
      {id: 4,	productId: 34,	CarId: 4, quty: 4,	price: 20,	status: 'np'}
    ]
    */
    // TODO construir el arreglo de productos para productsInOrder
    const producsToInsert = products.map((product) => ({
      productId: product.productId,
      orderId: order.id,
      qty: product.qty,
      price: product.price,
    }));
    /* [
      {	productId: 1001,	OrderId: 4, quty: 4,	price: 25 },
      {	productId: 502,	OrderId: 4, quty: 1,	price: 50 },
      {	productId: 2, OrderId: 4, quty: 4,	price: 30 },
      {	productId: 34,	OrderId: 4, quty: 4,	price: 20 }
    ]
    */
    // TODO crear los productsInOrder
    await ProductsInOrder.bulkCreate(producsToInsert);
    // TODO resetar el price en car
    await car.update({ total: 0 }, { where: { userId } });

    // * OPCION 1 --> La menos recomendada
    // TODO cambiar el status de prductos en carrito a purchased
    await ProductsInCar.update(
      { status: "purchased" },
      { where: { carId: userCar.id } }
    );

    // * OPCION 2 ->> Recomendada
    // TODO eliminar los productos vinculados el carrito
    await ProductsInCar.destroy({ where: { carId: userCar.id } });
  } catch (error) {
    next(error);
  }
};
