import article1Content from "../components/blog/articles/article1";

const bloglist = [];

const blog = {
  id: 0,
  title: "Elevate Your React Code with the Compound Component Pattern + Context API",
  image: "/blog/article1/article_1.png",
  description:
    "Discover how to use the Compound Component pattern with the Context API to create more flexible, maintainable and intuitive React components, illustrated by an example of a Modal component.",
  getBlog: function () {
    return article1Content;
  },
};

bloglist.push(blog);

export default bloglist;
