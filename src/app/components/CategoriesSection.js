'use client';

export default function CategoriesSection() {
  const categories = [
    { name: 'UPSC', color: '#B3E5FC' }, // Light Blue
    { name: 'Bank', color: '#E1BEE7' }, // Light Pink/Purple
    { name: 'PSC', color: '#CFD8DC' }, // Light Gray
    { name: 'Railway', color: '#FFF9C4' }, // Light Yellow/Cream
    { name: 'MPSC', color: '#C8E6C9' }, // Light Green
    { name: 'SSC', color: '#C5CAE9' }, // Light Lavender/Periwinkle
    { name: 'Teaching', color: '#F8BBD0' }, // Light Pink
    { name: 'Defence', color: '#DCEDC8' }, // Light Lime Green
    { name: 'Police', color: '#D1C4E9' }, // Light Purple
    { name: 'Navy', color: '#B2DFDB' } // Light Teal/Mint Green
  ];

  return (
    <div className="categories-section-container">
      <div className="container px-4 py-4">
        <div className="categories-header">
          <h2 className="categories-title">Categories</h2>
          <p className="categories-subtitle">Join our social hub to stay up to date</p>
        </div>
        <div className="categories-row">
          {categories.map((category, index) => (
            <button
              key={index}
              className="category-button"
              style={{ backgroundColor: category.color }}
            >
              <div className="category-icon">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="6" width="18" height="16" rx="2" stroke="#000" strokeWidth="1.5" fill="none"/>
                  <path d="M4 10H22" stroke="#000" strokeWidth="1.5"/>
                  <path d="M8 14H18" stroke="#000" strokeWidth="1.5"/>
                  <path d="M8 17H16" stroke="#000" strokeWidth="1.5"/>
                  <path d="M7 4V8" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M13 4V8" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M19 4V8" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

