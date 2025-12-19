'use client';

import { useState } from 'react';

export default function JobsFilterSidebar({ onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedExams, setSelectedExams] = useState([]);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedQualifications, setSelectedQualifications] = useState([]);
  const [salaryRange, setSalaryRange] = useState({ min: 0, max: 100000 });

  const categories = [
    { name: 'UPSC', count: 45 },
    { name: 'Bank', count: 32 },
    { name: 'PSC', count: 28 },
    { name: 'Railway', count: 67 },
    { name: 'MPSC', count: 23 },
    { name: 'SSC', count: 89 },
    { name: 'Teaching', count: 34 },
    { name: 'Defence', count: 56 }
  ];

  const states = [
    { name: 'Maharashtra', count: 123 },
    { name: 'Delhi', count: 98 },
    { name: 'Karnataka', count: 87 },
    { name: 'Tamil Nadu', count: 76 },
    { name: 'Gujarat', count: 65 },
    { name: 'Rajasthan', count: 54 },
    { name: 'Uttar Pradesh', count: 143 },
    { name: 'West Bengal', count: 43 }
  ];

  const exams = [
    { name: 'UPSC Civil Services', count: 12 },
    { name: 'SSC CGL', count: 45 },
    { name: 'Bank PO', count: 34 },
    { name: 'Railway NTPC', count: 56 },
    { name: 'IBPS Clerk', count: 23 },
    { name: 'SBI PO', count: 18 }
  ];

  const ageRanges = [
    { name: '18-25 years', count: 234 },
    { name: '26-30 years', count: 189 },
    { name: '31-35 years', count: 156 },
    { name: '36-40 years', count: 98 },
    { name: '41-45 years', count: 67 },
    { name: '45+ years', count: 34 }
  ];

  const qualifications = [
    { name: '10th Pass', count: 45 },
    { name: '12th Pass', count: 78 },
    { name: 'Graduate', count: 234 },
    { name: 'Post Graduate', count: 156 },
    { name: 'Diploma', count: 67 },
    { name: 'PhD', count: 12 }
  ];

  const handleToggle = (setter, value) => {
    setter(prev => 
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const handleSalaryChange = (type, value) => {
    setSalaryRange(prev => ({
      ...prev,
      [type]: parseInt(value) || 0
    }));
  };

  return (
    <div className="jobs-filter-sidebar">
      <div className="filter-section">
        <div className="filter-section-header">
          <h3 className="filter-section-title">Top Category</h3>
          <button 
            type="button" 
            className="filter-clear-all"
            onClick={() => setSelectedCategories([])}
          >
            Clear All
          </button>
        </div>
        <div className="filter-options">
          {categories.map((category, index) => (
            <div key={index} className="filter-option">
              <input
                type="checkbox"
                id={`category-${index}`}
                checked={selectedCategories.includes(category.name)}
                onChange={() => handleToggle(setSelectedCategories, category.name)}
                className="filter-checkbox"
              />
              <label htmlFor={`category-${index}`} className="filter-label">
                <span className="filter-name">{category.name}</span>
                <span className="filter-count">({category.count})</span>
              </label>
            </div>
          ))}
          <a href="#" className="filter-view-more">View More</a>
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Salary Range</h3>
        <div className="salary-range-filter">
          <div className="salary-input-group">
            <label className="salary-label">Min (₹)</label>
            <input
              type="number"
              className="salary-input"
              placeholder="0"
              value={salaryRange.min}
              onChange={(e) => handleSalaryChange('min', e.target.value)}
            />
          </div>
          <div className="salary-input-group">
            <label className="salary-label">Max (₹)</label>
            <input
              type="number"
              className="salary-input"
              placeholder="100000+"
              value={salaryRange.max}
              onChange={(e) => handleSalaryChange('max', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Exam</h3>
        <div className="filter-options">
          {exams.map((exam, index) => (
            <div key={index} className="filter-option">
              <input
                type="checkbox"
                id={`exam-${index}`}
                checked={selectedExams.includes(exam.name)}
                onChange={() => handleToggle(setSelectedExams, exam.name)}
                className="filter-checkbox"
              />
              <label htmlFor={`exam-${index}`} className="filter-label">
                <span className="filter-name">{exam.name}</span>
                <span className="filter-count">({exam.count})</span>
              </label>
            </div>
          ))}
          <a href="#" className="filter-view-more">View More</a>
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">State</h3>
        <div className="filter-options">
          {states.map((state, index) => (
            <div key={index} className="filter-option">
              <input
                type="checkbox"
                id={`state-${index}`}
                checked={selectedStates.includes(state.name)}
                onChange={() => handleToggle(setSelectedStates, state.name)}
                className="filter-checkbox"
              />
              <label htmlFor={`state-${index}`} className="filter-label">
                <span className="filter-name">{state.name}</span>
                <span className="filter-count">({state.count})</span>
              </label>
            </div>
          ))}
          <a href="#" className="filter-view-more">View More</a>
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Age</h3>
        <div className="filter-options">
          {ageRanges.map((age, index) => (
            <div key={index} className="filter-option">
              <input
                type="checkbox"
                id={`age-${index}`}
                checked={selectedAges.includes(age.name)}
                onChange={() => handleToggle(setSelectedAges, age.name)}
                className="filter-checkbox"
              />
              <label htmlFor={`age-${index}`} className="filter-label">
                <span className="filter-name">{age.name}</span>
                <span className="filter-count">({age.count})</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Qualification</h3>
        <div className="filter-options">
          {qualifications.map((qual, index) => (
            <div key={index} className="filter-option">
              <input
                type="checkbox"
                id={`qual-${index}`}
                checked={selectedQualifications.includes(qual.name)}
                onChange={() => handleToggle(setSelectedQualifications, qual.name)}
                className="filter-checkbox"
              />
              <label htmlFor={`qual-${index}`} className="filter-label">
                <span className="filter-name">{qual.name}</span>
                <span className="filter-count">({qual.count})</span>
              </label>
            </div>
          ))}
          <a href="#" className="filter-view-more">View More</a>
        </div>
      </div>
    </div>
  );
}

