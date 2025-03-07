import article1Content from "../components/blog/articles/article1";

const bloglist = [];

const blog = {
  id: 0,
  title: "Élever votre code React avec le pattern Compound Component + Context API",
  image: "/blog/article1/article_1.jpg",
  description:
    "Découvrez comment utiliser le pattern Compound Component avec Context API pour créer des composants React plus flexibles, maintenables et intuitifs, illustré par un exemple de composant Modal.",
  getBlog: function () {
    return article1Content;
  },
};

bloglist.push(blog);

export default bloglist;
