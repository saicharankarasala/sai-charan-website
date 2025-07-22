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
        <meta property="og:image" content="https://www.venkatasaicharan.com/images/vsclogo.jpeg" />
        <meta property="og:url" content="https://www.venkatasaicharan.com/logo" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "ImageObject",
          "name": "Venkata Sai Charan Logo",
          "description": "Official logo of Venkata Sai Charan - Software Engineer",
          "url": "https://www.venkatasaicharan.com/images/vsclogo.jpeg",
          "contentUrl": "https://www.venkatasaicharan.com/images/vsclogo.jpeg",
          "thumbnailUrl": "https://www.venkatasaicharan.com/images/vsclogo.jpeg",
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
              src="/images/vsclogo.jpeg" 
              alt="Venkata Sai Charan - Software Engineer Logo" 
              className="w-64 h-auto mx-auto mb-6 rounded-lg shadow-md"
            />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Venkata Sai Charan</h1>
            <p className="text-xl text-gray-600 mb-6">Software Engineer</p>
            <p className="text-gray-500 mb-8">
              Official logo and brand identity for my professional portfolio.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-[#e13a7a] text-white font-medium rounded-lg hover:bg-[#6d217f] transition-colors duration-300"
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