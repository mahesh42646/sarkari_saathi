'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JobsFilterSidebar from '../components/JobsFilterSidebar';
import Breadcrumb from '../components/Breadcrumb';

export default function JobsPage() {
  const [sortBy, setSortBy] = useState('relevance');

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Jobs', href: 'jobs' }
  ];

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />
      <div className="jobs-page-container">
        <div className="container px-4 py-4">
          <div className="jobs-layout">
            {/* Left Sidebar - Filters */}
            <aside className="jobs-sidebar">
              <JobsFilterSidebar />
            </aside>

            {/* Main Content Area */}
            <main className="jobs-main-content">
              <div className="jobs-header">
                <div className="jobs-header-top">
                  <div>
                    <h1 className="jobs-page-title">Available Jobs</h1>
                    <p className="jobs-page-subtitle">Find your dream government job</p>
                  </div>
                  <div className="jobs-sort-container">
                    <label htmlFor="sort-select" className="jobs-sort-label">Sort by:</label>
                    <select
                      id="sort-select"
                      className="jobs-sort-select"
                      value={sortBy}
                      onChange={handleSortChange}
                    >
                      <option value="relevance">Relevance</option>
                      <option value="date-newest">Newest First</option>
                      <option value="date-oldest">Oldest First</option>
                      <option value="salary-high">Salary: High to Low</option>
                      <option value="salary-low">Salary: Low to High</option>
                      <option value="deadline-soon">Deadline: Soonest</option>
                      <option value="title-asc">Title: A to Z</option>
                      <option value="title-desc">Title: Z to A</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="jobs-list">
                <p className="jobs-empty-message">Select filters to see available jobs</p>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
