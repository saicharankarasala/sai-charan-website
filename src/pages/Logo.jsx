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
      
      <div className="min-h-screen flex items-center justify-center py-20" style={{ background: 'var(--bg, #030712)' }}>
        <div className="rounded-2xl p-8 max-w-md w-full mx-4" style={{ background: 'var(--bg-surface, #0d1117)', border: '1px solid var(--border, rgba(255,255,255,0.08))' }}>
          <div className="text-center">
            <img
              src="/images/kvslogo.png"
              alt="Venkata Sai Charan - DevOps Engineer Logo"
              className="w-64 h-auto mx-auto mb-6"
              style={{ mixBlendMode: 'screen' }}
            />
            <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text, #fff)' }}>Venkata Sai Charan</h1>
            <p className="text-xl mb-6" style={{ color: 'var(--blue, #00bcd4)' }}>DevOps Engineer</p>
            <p className="mb-8" style={{ color: 'var(--text-muted, #888)' }}>
              Official logo and brand identity for my professional portfolio.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 font-medium rounded-xl transition-colors duration-300"
              style={{ background: 'var(--blue, #00bcd4)', color: '#030712' }}
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