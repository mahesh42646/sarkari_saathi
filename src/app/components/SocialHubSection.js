'use client';

export default function SocialHubSection() {
  const socialPlatforms = [
    { name: 'WhatsApp', count: '7.61 + Lakh', label: 'Followers', color: '#25D366', icon: 'whatsapp' },
    { name: 'Messenger', count: '1.60 + Lakh', label: 'Followers', color: '#0084FF', icon: 'messenger' },
    { name: 'Facebook', count: '15.92 + Lakh', label: 'Followers', color: '#1877F2', icon: 'facebook' },
    { name: 'Telegram', count: '5.25 + Lakh', label: 'Followers', color: '#0088CC', icon: 'telegram' },
    { name: 'Instagram', count: '36.45 + Lakh', label: 'Followers', color: '#E4405F', icon: 'instagram' },
    { name: 'Twitter', count: '35.52 + Lakh', label: 'Followers', color: '#1DA1F2', icon: 'twitter' },
    { name: 'LinkedIn', count: '2.05 + Lakh', label: 'Followers', color: '#0077B5', icon: 'linkedin' },
    { name: 'YouTube', count: '9.38 + Lakh', label: 'Subscribers', color: '#FF0000', icon: 'youtube' },
    { name: 'Pinterest', count: '21.23K', label: 'Followers', color: '#BD081C', icon: 'pinterest' },
    { name: 'Roposo', count: '14.47 + Lakh', label: 'Followers', color: '#FF6B35', icon: 'roposo' },
    { name: 'ShareChat', count: '84.56K', label: 'Followers', color: '#666666', icon: 'sharechat' },
    { name: 'Chingari', count: '4.90 + Lakh', label: 'Followers', color: '#FF6B35', icon: 'chingari' }
  ];

  const renderIcon = (iconType, color, index) => {
    const iconSize = 48;
    const instagramGradientId = `instagramGradient-${index}`;
    const roposoGradientId = `roposoGradient-${index}`;
    const sharechatGradientId = `sharechatGradient-${index}`;
    
    switch(iconType) {
      case 'whatsapp':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill={color}/>
          </svg>
        );
      case 'messenger':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.15 2 11.25c0 2.61 1.42 4.94 3.66 6.54L5 22l4.5-2.4c.9.24 1.85.37 2.85.37.28 0 .55-.02.82-.04V22h6v-2.04c3.58-1.08 6-4.11 6-7.71 0-5.1-4.48-9.25-10-9.25zm-1.5 12.5l-3-3 4.5-4.5 2.5 2.5 3-3L18 12l-7.5 2.5z" fill={color}/>
          </svg>
        );
      case 'facebook':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill={color}/>
          </svg>
        );
      case 'telegram':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161l-1.87 8.81c-.138.625-.497.778-.999.484l-2.755-2.03-1.33 1.278c-.147.147-.27.27-.554.27l.198-2.797 5.098-4.602c.222-.197-.049-.307-.343-.11l-6.29 3.96-2.71-.844c-.592-.185-.606-.592.12-.88l10.567-4.07c.49-.18.92.13.76.66z" fill={color}/>
          </svg>
        );
      case 'instagram':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill={`url(#${instagramGradientId})`}/>
            <defs>
              <linearGradient id={instagramGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E4405F"/>
                <stop offset="50%" stopColor="#F56040"/>
                <stop offset="100%" stopColor="#FCAF45"/>
              </linearGradient>
            </defs>
          </svg>
        );
      case 'twitter':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill={color}/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill={color}/>
          </svg>
        );
      case 'youtube':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill={color}/>
          </svg>
        );
      case 'pinterest':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
            <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c5.302 0 9.917-3.176 11.827-7.73-.163-.576-.925-3.73 1.173-8.512 0 0-1.003-.325-3.076-.325 0 0-2.004 2.562-2.45 3.126 0 0-1.317-.211-2.24-.211-4.058 0-7.062 2.544-7.062 7.3 0 2.756 1.38 4.1 3.138 4.1.74 0 1.112-.171 1.112-.394 0-.19-.607-1.891-.881-2.787-.259-.98-.536-1.96-.536-2.83 0-2.98 1.984-4.782 4.326-4.782 2.36 0 3.673 1.433 3.673 3.646 0 2.527-1.175 4.659-2.907 4.659-.96 0-1.673-.788-1.448-1.756.276-1.142.809-2.376.809-3.2 0-.737-.39-1.35-1.199-1.35-.95 0-1.712.98-1.712 2.292 0 .84.285 1.411.285 1.411l-1.096 4.629c-.133.558-.039 1.242.279 1.633.13.18.18.202.402.133 1.499-.526 1.96-2.078 1.96-3.742 0-1.525-.795-2.984-2.365-2.984-1.607 0-2.598 1.185-2.598 2.412 0 .892.331 1.516.331 1.516s-1.138 4.804-1.345 5.714c-.401 1.519-.05 3.777-.025 3.987.015.123.195.163.275.06.13-.163 1.821-2.25 2.4-4.328.16-.58.93-3.63.93-3.63.459.88 1.8 1.65 3.228 1.65 4.248 0 7.128-3.861 7.128-9.05C20.4 4.95 15.951.99 12 .99z" fill={color}/>
          </svg>
        );
      case 'roposo':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill={`url(#${roposoGradientId})`}/>
            <defs>
              <linearGradient id={roposoGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B35"/>
                <stop offset="33%" stopColor="#FF8C42"/>
                <stop offset="66%" stopColor="#FFA07A"/>
                <stop offset="100%" stopColor="#FFB347"/>
              </linearGradient>
            </defs>
          </svg>
        );
      case 'sharechat':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill={`url(#${sharechatGradientId})`}/>
            <defs>
              <linearGradient id={sharechatGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700"/>
                <stop offset="33%" stopColor="#4169E1"/>
                <stop offset="66%" stopColor="#FF69B4"/>
                <stop offset="100%" stopColor="#32CD32"/>
              </linearGradient>
            </defs>
          </svg>
        );
      case 'chingari':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke={color} strokeWidth="2" fill="none"/>
            <path d="M12 2v20" stroke={color} strokeWidth="2"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="social-hub-section-container">
      <div className="container px-4 py-4">
        <div className="social-hub-header">
          <h2 className="social-hub-title">Our Social HUB</h2>
          <p className="social-hub-subtitle">Join Our Social Hub to stay up to date</p>
        </div>
        <div className="social-hub-grid">
          {socialPlatforms.map((platform, index) => (
            <div key={index} className="social-hub-card">
              <div className="social-hub-icon">
                {renderIcon(platform.icon, platform.color, index)}
              </div>
              <div className="social-hub-count">{platform.count}</div>
              <div className="social-hub-label">{platform.label}</div>
              <div className="social-hub-name" style={{ color: platform.color }}>
                {platform.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

