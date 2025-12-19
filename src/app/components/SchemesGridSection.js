'use client';

export default function SchemesGridSection() {
  const schemes = [
    { name: 'Agriculture & Cooperation', iconType: 'agriculture' },
    { name: 'Animal Husbandry & Fishing', iconType: 'animal' },
    { name: 'Art & Culture', iconType: 'art' },
    { name: 'Chemicals & Fertilizers', iconType: 'chemicals' },
    { name: 'Coal & Mine', iconType: 'coal' },
    { name: 'Commerce & Industry', iconType: 'commerce' },
    { name: 'Communications & Information Technology', iconType: 'communications' },
    { name: 'Defence', iconType: 'defence' },
    { name: 'Education & Training', iconType: 'education' },
    { name: 'Employment & Labour', iconType: 'employment' },
    { name: 'Energy & Power', iconType: 'energy' },
    { name: 'Environment & Natural Resources', iconType: 'environment' }
  ];

  const renderIcon = (iconType, index) => {
    const iconSize = 40;
    const gradientId = `gradient-${iconType}-${index}`;
    const gradientDef = (
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E91E63"/>
          <stop offset="100%" stopColor="#9C27B0"/>
        </linearGradient>
      </defs>
    );
    
    switch(iconType) {
      case 'agriculture':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none">
            <path d="M20 5L22 15L20 20L18 15Z" fill={`url(#${gradientId})`}/>
            <path d="M15 18L20 20L25 18L20 25Z" fill={`url(#${gradientId})`}/>
            <rect x="19" y="25" width="2" height="10" fill={`url(#${gradientId})`}/>
            {gradientDef}
          </svg>
        );
      case 'animal':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="15" r="8" fill={`url(#${gradientId})`}/>
            <path d="M12 25L15 30L20 28L25 30L28 25L20 35Z" fill={`url(#${gradientId})`}/>
            <circle cx="17" cy="13" r="1.5" fill="white"/>
            <circle cx="23" cy="13" r="1.5" fill="white"/>
            {gradientDef}
          </svg>
        );
      case 'art':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="12" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
            <circle cx="20" cy="20" r="6" fill={`url(#${gradientId})`}/>
            <circle cx="15" cy="15" r="2" fill={`url(#${gradientId})`}/>
            <circle cx="25" cy="15" r="2" fill={`url(#${gradientId})`}/>
            {gradientDef}
          </svg>
        );
      case 'chemicals':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none">
            <rect x="12" y="8" width="16" height="20" rx="2" fill={`url(#${gradientId})`}/>
            <path d="M12 8L20 5L28 8" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
            <circle cx="20" cy="18" r="3" fill="white"/>
            {gradientDef}
          </svg>
        );
      case 'coal':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none">
            <rect x="10" y="20" width="20" height="12" rx="2" fill={`url(#${gradientId})`}/>
            <path d="M15 20L20 12L25 20" fill={`url(#${gradientId})`}/>
            <circle cx="20" cy="26" r="2" fill="white"/>
            {gradientDef}
          </svg>
        );
      case 'commerce':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none">
            <rect x="8" y="18" width="24" height="14" rx="1" fill={`url(#${gradientId})`}/>
            <rect x="10" y="12" width="6" height="8" fill={`url(#${gradientId})`}/>
            <rect x="18" y="12" width="6" height="8" fill={`url(#${gradientId})`}/>
            <rect x="26" y="12" width="6" height="8" fill={`url(#${gradientId})`}/>
            <circle cx="14" cy="28" r="1.5" fill="white"/>
            <circle cx="20" cy="28" r="1.5" fill="white"/>
            <circle cx="26" cy="28" r="1.5" fill="white"/>
            {gradientDef}
          </svg>
        );
      case 'communications':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="10" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
            <path d="M15 20L18 23L25 16" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" fill="none"/>
            <rect x="18" y="18" width="4" height="4" fill={`url(#${gradientId})`}/>
            {gradientDef}
          </svg>
        );
      case 'defence':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none">
            <path d="M20 8L25 12L28 18L25 24L20 28L15 24L12 18L15 12Z" fill={`url(#${gradientId})`}/>
            <circle cx="20" cy="18" r="4" fill="white"/>
            {gradientDef}
          </svg>
        );
      case 'education':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none">
            <path d="M20 10L8 16L20 22L32 16L20 10Z" fill={`url(#${gradientId})`}/>
            <rect x="12" y="22" width="16" height="8" rx="1" fill={`url(#${gradientId})`}/>
            {gradientDef}
          </svg>
        );
      case 'employment':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="15" r="6" fill={`url(#${gradientId})`}/>
            <path d="M12 25L20 30L28 25L20 35Z" fill={`url(#${gradientId})`}/>
            <rect x="18" y="20" width="4" height="6" fill={`url(#${gradientId})`}/>
            {gradientDef}
          </svg>
        );
      case 'energy':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="10" fill={`url(#${gradientId})`}/>
            <path d="M20 12L20 20L26 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            {gradientDef}
          </svg>
        );
      case 'environment':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="12" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
            <path d="M15 20L18 23L25 16" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" fill="none"/>
            <circle cx="15" cy="15" r="2" fill={`url(#${gradientId})`}/>
            <circle cx="25" cy="15" r="2" fill={`url(#${gradientId})`}/>
            <path d="M12 25Q20 28 28 25" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none"/>
            {gradientDef}
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="schemes-grid-section-container">
      <div className="container px-4 py-4">
        <div className="schemes-grid-header">
          <div className="schemes-grid-title-section">
            <h2 className="schemes-grid-title">Schemes</h2>
            <p className="schemes-grid-subtitle">Join our social hub to stay up to date</p>
          </div>
        </div>
        <div className="schemes-grid-divider"></div>
        <div className="schemes-grid">
          {schemes.map((scheme, index) => (
            <div key={index} className="scheme-grid-card">
              <div className="scheme-grid-card-inner">
                <div className="scheme-grid-icon">
                  {renderIcon(scheme.iconType, index)}
                </div>
                <span className="scheme-grid-name">{scheme.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

