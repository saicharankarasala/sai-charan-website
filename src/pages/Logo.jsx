import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <>
      <Helmet>
        <title>Venkata Sai Charan - Logo</title>
        <meta name="description" content="Official logo of Venkata Sai Charan - Software Engineer" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Venkata Sai Charan - Logo" />
        <meta property="og:description" content="Official logo of Venkata Sai Charan - Software Engineer" />
        <meta property="og:image" content="https://www.venkatasaicharan.com/images/kvslogo.png" />
        <meta property="og:url" content="https://www.venkatasaicharan.com/logo" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "ImageObject",
          "name": "Venkata Sai Charan Logo",
          "description": "Official logo of Venkata Sai Charan - Software Engineer",
          "url": "https://www.venkatasaicharan.com/images/kvslogo.png",
          "contentUrl": "https://www.venkatasaicharan.com/images/kvslogo.png",
          "thumbnailUrl": "https://www.venkatasaicharan.com/images/kvslogo.png",
          "creator": {
            "@type": "Person",
            "name": "Venkata Sai Charan"
          }
        }
        `}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
          <div className="text-center">
            <img 
              src="/images/kvslogo.png" 
              alt="Venkata Sai Charan - DevOps Engineer Logo"
              className="w-64 h-auto mx-auto mb-6 rounded-lg shadow-md"
            />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Venkata Sai Charan</h1>
            <p className="text-xl text-gray-600 mb-6">DevOps Engineer</p>
            <p className="text-gray-500 mb-8">
              Official logo and brand identity for my professional portfolio.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo; 