import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { fetchBlogDetails } from "../../redux/slices/blogSlice";

const BlogSection = () => {
  const [viewAll, setViewAll] = useState(false);
  const dispatch = useAppDispatch();
  const { data }: any = useAppSelector((state: RootState) => state.blog);
  useEffect(() => {
    dispatch(fetchBlogDetails());
  }, [dispatch]);
  const visibleBlogs = viewAll ? data?.data : data?.data?.slice(0, 3);

  return (
    <section className="blogs">
      <div className="blogs__header">
        <h2>Blogs</h2>
        <button className="view-all" onClick={() => setViewAll(!viewAll)}>
          {viewAll ? "Show Less" : "View All"} →
        </button>
      </div>

      <div className="blogs__grid">
        {visibleBlogs?.map((blog: any) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog?.image_url} alt={data?.data?.name} />
            <h3>{blog?.name}</h3>
            <small>
              {blog?.updatedAt} by{" "}
              <span className="author">{blog?.writer_name}</span>
            </small>
            <p>{blog?.short_description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
