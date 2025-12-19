'use client';

export default function StoriesSection() {
  const stories = [
    {
      id: 1,
      title: 'Best Phones Under Rs 20,000 in August 2024',
      author: 'Abhijith',
      date: '17 Aug, 2024',
      verified: true,
      badgeText: 'BEST PHONES UNDER RS 20,000'
    },
    {
      id: 2,
      title: 'Google Pixel 9 vs Pixel 8: Price, Specifications, and Features Compared',
      author: 'Shimul Sood',
      date: '16 Aug, 2024',
      verified: true,
      badgeText: 'PHONE COMPARISON'
    },
    {
      id: 3,
      title: 'Google Pixel 9 vs Samsung Galaxy S24: Price, Specifications, Features Compared',
      author: 'Abhiman Biswas',
      date: '14 Aug, 2024',
      verified: true,
      badgeText: 'PHONE COMPARISON'
    },
    {
      id: 4,
      title: "Google Pixel 9 Series' New AI-Camera Features: Add Me to Reimagine, Here Are The Details",
      author: 'Abhijith',
      date: '14 Aug, 2024',
      verified: true,
      badgeText: 'AI FEATURES'
    },
    {
      id: 5,
      title: 'Google Pixel 9 Pro vs Apple iPhone 15 Pro: Price, Specifications, Features Compared',
      author: 'Abhiman Biswas',
      date: '17 Aug, 2024',
      verified: true,
      badgeText: 'FLAGSHIP COMPARISON'
    },
    {
      id: 6,
      title: 'Google Pixel 9 Pro vs Samsung Galaxy S24+: Price, Specifications, and Features Compared',
      author: 'Basith Rahman P P',
      date: '16 Aug, 2024',
      verified: true,
      badgeText: 'PRO COMPARISON'
    },
    {
      id: 7,
      title: 'Google Pixel 9 Pro XL vs Samsung Galaxy S24 Ultra: Price, Specifications, and Features Compared',
      author: 'Basith Rahman P P',
      date: '14 Aug, 2024',
      verified: true,
      badgeText: 'ULTRA COMPARISON'
    },
    {
      id: 8,
      title: 'Vivo V40 Pro vs Motorola Edge 50 Ultra: Price, Specifications, and Features Compared',
      author: 'Basith Rahman P P',
      date: '14 Aug, 2024',
      verified: true,
      badgeText: 'PRO COMPARISON'
    }
  ];

  const getGradientColors = (id) => {
    const gradients = [
      { top: '#ff6b35', bottom: '#4ecdc4' }, // Orange to teal
      { top: '#f093fb', bottom: '#4facfe' }, // Pink to blue
      { top: '#4facfe', bottom: '#00f2fe' }, // Blue to cyan
      { top: '#43e97b', bottom: '#38f9d7' }, // Green to teal
      { top: '#fa709a', bottom: '#fee140' }, // Pink to yellow
      { top: '#30cfd0', bottom: '#330867' }, // Cyan to purple
      { top: '#a8edea', bottom: '#fed6e3' }, // Light blue to pink
      { top: '#ff9a9e', bottom: '#fecfef' }  // Pink to light pink
    ];
    return gradients[(id - 1) % gradients.length];
  };

  return (
    <div className="stories-section-container">
      <div className="container px-4 py-5">
        <h2 className="stories-section-title">Stories that Matter</h2>
        <div className="stories-grid">
          {stories.map((story) => {
            const gradient = getGradientColors(story.id);
            return (
              <article key={story.id} className="story-card">
                {/* Left Section - Graphic Thumbnail */}
                <div className="story-thumbnail-section">
                  <div 
                    className="story-thumbnail-wrapper"
                    style={{
                      background: `linear-gradient(to bottom, ${gradient.top} 0%, ${gradient.bottom} 100%)`
                    }}
                  >
                    {story.verified && (
                      <div className="verified-badge">
                        <div className="verified-text">
                          <span className="verified-label">VERIFIED</span>
                          <span className="verified-by">BY</span>
                          <span className="verified-checkmark">✓</span>
                          <span className="verified-msp">MSP</span>
                        </div>
                        <div className="badge-text">
                          <span className="badge-line-1">BEST PHONES</span>
                          <span className="badge-line-2">{story.badgeText}</span>
                        </div>
                      </div>
                    )}
                    <div className="phone-graphic">
                      <div className="phone-device">
                        <div className="phone-screen">
                          <div className="phone-icon">📱</div>
                        </div>
                      </div>
                    </div>
                    <div className="brand-logo">mysmartprice</div>
                  </div>
                </div>

                {/* Right Section - Article Details */}
                <div className="story-content-section">
                  <h3 className="story-title">{story.title}</h3>
                  <div className="story-meta">
                    <span className="story-author">By {story.author}</span>
                    <span className="story-separator">|</span>
                    <span className="story-date">{story.date}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
