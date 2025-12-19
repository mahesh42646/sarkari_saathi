'use client';

import Link from 'next/link';

export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb-nav" aria-label="breadcrumb">
      <div className="container px-4">
        <ol className="breadcrumb-list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={index} className="breadcrumb-item">
                {isLast ? (
                  <span className="breadcrumb-current">{item.label}</span>
                ) : (
                  <>
                    <Link href={item.href} className="breadcrumb-link">
                      {item.label}
                    </Link>
                    <span className="breadcrumb-separator">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

