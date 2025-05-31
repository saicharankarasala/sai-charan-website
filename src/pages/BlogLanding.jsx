import React, { useState } from "react";
import { blogPosts } from "../data/blogData";
import BlogCard from "../components/BlogCard";

const BlogLanding = () => {
  const [search, setSearch] = useState("");

  const filteredPosts = blogPosts.filter(
    post =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      {/* Hero Section */}
      <div className="w-full min-h-[380px] flex flex-col items-center justify-center bg-gradient-to-tr from-[#2d014d] via-[#6d217f] to-[#e13a7a] text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to the <span className="text-white">SAI CHARAN'S Blog</span></h1>
        <p className="text-xl md:text-2xl font-normal text-white/80 mb-8">Join us on my Journey of Web Development</p>
        <div className="max-w-xl w-full mx-auto flex items-center mt-2">
          <span className="pl-4 pr-2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" /></svg>
          </span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search"
            className="w-full px-4 py-3 rounded-md bg-transparent text-white placeholder-gray-300 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
        </div>
      </div>
      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map(post => (
          <div className="shadow-xl rounded-2xl bg-white" key={post.slug}>
            <BlogCard post={post} />
          </div>
        ))}
        {filteredPosts.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-12">No posts found.</div>
        )}
      </div>
    </div>
  );
};

export default BlogLanding; 