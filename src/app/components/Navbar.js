'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container-fluid px-3 px-md-4">
        {/* Logo Section */}
        <div className="d-flex align-items-center navbar-logo-section">
          <div className="navbar-logo">
            <img 
              src="/main-logo.png" 
              alt="Logo" 
              className="navbar-logo-img"
            />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Navigation Buttons */}
          <div className="d-flex flex-wrap align-items-center gap-3 me-auto navbar-buttons-section">
            <div className="dropdown">
              <Link href="/jobs" className="btn btn-light border rounded fw-semibold" style={{ fontSize: '15px', padding: '10px 18px', transition: 'all 0.3s ease', textDecoration: 'none', display: 'inline-block' }}>
                Jobs
              </Link>
            </div>
            <div className="dropdown">
              <button className="btn btn-light border dropdown-toggle rounded fw-semibold" type="button" data-bs-toggle="dropdown" style={{ fontSize: '15px', padding: '10px 18px', transition: 'all 0.3s ease' }}>
                Exams
              </button>
            </div>
            <div className="dropdown">
              <button className="btn btn-light border dropdown-toggle rounded fw-semibold" type="button" data-bs-toggle="dropdown" style={{ fontSize: '15px', padding: '10px 18px', transition: 'all 0.3s ease' }}>
                Schemes
              </button>
            </div>
            <div className="dropdown">
              <button className="btn btn-light border dropdown-toggle rounded fw-semibold" type="button" data-bs-toggle="dropdown" style={{ fontSize: '15px', padding: '10px 18px', transition: 'all 0.3s ease' }}>
                States
              </button>
            </div>
            <div className="dropdown">
              <button className="btn btn-light border dropdown-toggle rounded fw-semibold" type="button" data-bs-toggle="dropdown" style={{ fontSize: '15px', padding: '10px 18px', transition: 'all 0.3s ease' }}>
                हिन्दी
              </button>
            </div>
          </div>

          {/* Search Section */}
          <div className="d-flex align-items-center gap-2 flex-grow-1 flex-lg-grow-0 navbar-search-container">
            <div className="position-relative flex-grow-1">
              <input
                type="text"
                className="form-control rounded navbar-search-input"
                placeholder="Search for Gov."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                style={{ backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0' }}
              />
              {searchFocused && (
                <div className="position-absolute w-100 bg-white border rounded shadow-sm mt-1" style={{ zIndex: 1000 }}>
                  <div className="p-2 border-bottom" style={{ cursor: 'pointer' }}>Job&apos;s</div>
                  <div className="p-2 border-bottom fw-bold bg-light" style={{ cursor: 'pointer' }}>Exam&apos;s</div>
                  <div className="p-2" style={{ cursor: 'pointer' }}>Scheme&apos;s</div>
                </div>
              )}
            </div>
            <button className="btn navbar-search-btn" style={{ backgroundColor: '#ff6600', border: 'none', borderRadius: '0 8px 8px 0' }}>
              <svg className="navbar-search-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="6" stroke="white" strokeWidth="2"/>
                <path d="M13 13L17 17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
