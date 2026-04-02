import React from 'react';

const BlogNavbar = ({
  title = "The Code Behind the Canvas: How I Engineered My Personal Portfolio with React, Tailwind & Analytics"
}) => {
  return (
    <nav className="sticky top-0 z-50 bg-black text-white w-full border-b border-white/10">
      <div className="flex items-center px-4 py-4 lg:pr-[18rem] w-full">
        {/* Logo */}
        <div className="shrink-0 flex items-center" style={{ minWidth: '40px', maxWidth: '48px' }}>
          <img
            src="/images/Navlogo.png"
            alt="Logo"
            className="w-10 h-auto object-contain"
            style={{ maxWidth: '48px' }}
          />
        </div>
        {/* Title */}
        <div className="flex-1 ml-4">
          <h1 className="text-base sm:text-lg md:text-xl font-semibold leading-snug tracking-wide break-words whitespace-normal">
            {title}
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default BlogNavbar;