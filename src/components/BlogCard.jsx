import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => (
  <div className="bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
    <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-2xl" />
    <div className="p-5 flex-1 flex flex-col">
      {post.category && (
        <span className="inline-block bg-pink-100 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
          {post.category}
        </span>
      )}
      <h3 className="text-lg font-bold mb-1 text-gray-900">{post.title}</h3>
      <span className="text-xs text-gray-500 mb-2">{post.date}</span>
      <p className="text-gray-700 flex-1">{post.excerpt}</p>
      <Link to={`/blog/${post.slug}`} className="mt-4 text-pink-600 font-semibold hover:underline">
        Read more &rarr;
      </Link>
    </div>
  </div>
);

export default BlogCard; 