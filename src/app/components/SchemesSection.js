'use client';

import { useState } from 'react';

export default function SchemesSection() {
  const [activeTab, setActiveTab] = useState('Schemes');

  const schemes = [
    { title: 'Chhattisgarh: Horticulture - Inclusion of New variety seed license', status: 'Open' },
    { title: 'Chhattisgarh: Insurance Fisheries', status: 'Open' },
    { title: 'Chhattisgarh: Application for loan for fisheries', status: 'Closed' },
    { title: 'Chhattisgarh: Agriculture-Seed Processing', status: null },
    { title: 'Chhattisgarh: Agriculture-Seed Trading', status: null },
    { title: 'Chhattisgarh: Agriculture-Equipment', status: null },
    { title: 'Chhattisgarh: Horticulture - Inclusion of New variety seed license', status: null },
    { title: 'Chhattisgarh: Insurance Fisheries', status: null },
    { title: 'Chhattisgarh: Application for loan for fisheries', status: null },
    { title: 'Chhattisgarh: Agriculture-Seed Processing', status: null },
    { title: 'Chhattisgarh: Agriculture-Seed Trading', status: null },
    { title: 'Chhattisgarh: Agriculture-Equipment', status: null },
    { title: 'Chhattisgarh: Horticulture - Inclusion of New variety seed license', status: null },
    { title: 'Chhattisgarh: Insurance Fisheries', status: null },
    { title: 'Chhattisgarh: Application for loan for fisheries', status: null },
  ];

  const tabs = [
    { id: 'Jobs', label: 'Jobs' },
    { id: 'Exams', label: 'Exams' },
    { id: 'Schemes', label: 'Schemes' }
  ];

  return (
    <div className="schemes-section-container">
      <div className="container px-4 py-4">
        {/* Tabs */}
        <div className="schemes-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`scheme-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="schemes-content">
          {activeTab === 'Schemes' && (
            <div className="schemes-list">
              {schemes.map((scheme, index) => (
                <div key={index} className="scheme-item">
                  <div className="scheme-content-wrapper">
                    <span className="scheme-arrow">&gt;&gt;</span>
                    <span className="scheme-title">{scheme.title}</span>
                  </div>
                  {scheme.status && (
                    <span className={`scheme-status ${scheme.status.toLowerCase()}`}>
                      {scheme.status}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Jobs' && (
            <div className="schemes-list">
              <div className="scheme-item">
                <div className="scheme-content-wrapper">
                  <span className="scheme-arrow">&gt;&gt;</span>
                  <span className="scheme-title">Jobs content will appear here</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Exams' && (
            <div className="schemes-list">
              <div className="scheme-item">
                <div className="scheme-content-wrapper">
                  <span className="scheme-arrow">&gt;&gt;</span>
                  <span className="scheme-title">Exams content will appear here</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

