import React from "react";
import bloglist from "../../editable-stuff/blog";
import { useParams } from "react-router-dom";
const BlogPost = () => {
  const { id } = useParams();
  const post = bloglist[id];

  return (
    <div className="container-lg" style={{ margin: "100px auto" }}>
      {post && (
        <div>
          <h1 className="display-5 text-center mb-5">{post.title}</h1>
          <div className="text-center m-3">
            <img className="img-fluid w-100" src={post.image} alt={post.title} />
          </div>
          {post.getBlog()}
        </div>
      )}
      {!post && <h1 className="display-1 text-center">404 - Page not found</h1>}
    </div>
  );
};

export default BlogPost;
