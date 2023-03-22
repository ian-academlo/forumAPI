const db = require("../utils/database");
const Users = require("../models/user.models");
const initModels = require("../models/initModels");
const Categories = require("../models/category.models");
const Posts = require("../models/post.model");

initModels();

const users = [
  {
    username: "Iannacus",
    email: "ian.rosas@academlo.com",
    emailVerified: true,
    password: "1234567",
  },
  {
    username: "Harvey",
    email: "harvey@academlo.com",
    emailVerified: true,
    password: "1234567",
  },
  {
    username: "Noe4271",
    email: "noe@academlo.com",
    emailVerified: true,
    password: "1234567",
  },
  {
    username: "Robert",
    email: "jose.roberto@academlo.com",
    emailVerified: true,
    password: "1234567",
  },
  {
    username: "Diana",
    email: "diana@academlo.com",
    emailVerified: true,
    password: "1234567",
  },
  {
    username: "Cesarin",
    email: "cesar@academlo.com",
    emailVerified: true,
    password: "1234567",
  },
];

const categories = [
  { name: "Java Script" },
  { name: "React" },
  { name: "Node" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "Python" },
  { name: "Bases de Datos" },
];

const posts = [
  {
    title: "¿Qué es jsx?",
    description:
      "Me he topado con react y el termino jsx pero no me queda muy claro. Alguien me puede dar una mano. Gracias!",
    author: 1,
    categoryId: 2,
  },
  {
    title: "Aiudaaaa, no entiendo los hooks",
    description:
      "Esto de los hook me tiene loca, no le encuentro ni pies ni cabeza, la sintaxis toda rara. Una Auidita por favor",
    author: 5,
    categoryId: 2,
  },
  {
    title: "Me han dicho que GRID es mejor que FLEX",
    description:
      "Mi primo es forntend sr y me dijo que flex es cosa del pasado, que lo de ahora es grid. ¿Que tan cierto es esto?",
    author: 2,
    categoryId: 5,
  },
  {
    title: "Me da miedo node, he escuchado cosas feas de el",
    description:
      "Estoy iniciando en el mundo backend y como ya se js quiero aprender node, pero todos me dicen que mejor aprenda un lenguaje de verdad. Que me recomiendan?",
    author: 4,
    categoryId: 3,
  },
];

for (let i = 0; i < 1000; i++) {
  posts.push({
    title: `Pregunta sobre basse de datos ${i + 1}`,
    description: "shalala shalala shala shalalala",
    author: (i % 6) + 1, // 2, 3 4 5 6 1
    categoryId: 7,
  });
}

db.sync({ force: true }).then(async () => {
  users.forEach((user) => {
    Users.create(user);
  });
  setTimeout(async () => {
    const catResult = await Categories.bulkCreate(categories);
    if (catResult) console.log("Categorias creadas correctamente");
    const postResult = await Posts.bulkCreate(posts);
    if (postResult) console.log("Posts creados satisfactoriamente");
  }, 400);
});
