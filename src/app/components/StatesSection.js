'use client';

export default function StatesSection() {
  const states = [
    { name: 'Maharashtra' },
    { name: 'Bihar' },
    { name: 'UP' },
    { name: 'MP' },
    { name: 'Rajasthan' },
    { name: 'Gujrat' },
    { name: 'Goa' },
    { name: 'Assam' }
  ];

  return (
    <div className="states-section-container">
      <div className="container px-4 py-4">
        <div className="states-header">
          <h2 className="states-title">States</h2>
          <p className="states-subtitle">Join our social hub to stay up to date</p>
        </div>
        <div className="states-row">
          {states.map((state, index) => (
            <div
              key={index}
              className="state-card"
            >
              <div className="state-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Gateway of India style icon */}
                  <rect x="10" y="20" width="40" height="30" rx="2" stroke="#666" strokeWidth="2" fill="none"/>
                  <path d="M 15 20 Q 30 10 45 20" stroke="#666" strokeWidth="2" fill="none"/>
                  <rect x="20" y="20" width="20" height="30" stroke="#666" strokeWidth="2" fill="none"/>
                  <path d="M 20 20 Q 30 5 40 20" stroke="#666" strokeWidth="2" fill="none"/>
                  <circle cx="30" cy="15" r="3" fill="#666"/>
                  <rect x="25" y="25" width="10" height="15" stroke="#666" strokeWidth="1.5" fill="none"/>
                  <rect x="12" y="25" width="6" height="15" stroke="#666" strokeWidth="1.5" fill="none"/>
                  <rect x="42" y="25" width="6" height="15" stroke="#666" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <span className="state-name">{state.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

