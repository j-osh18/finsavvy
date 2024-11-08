import React from 'react';
import { ButtonLinkProps } from './ButtonLink';

// StoreLink component without TypeScript type annotation (JavaScript version)
function StoreLink({ href, className, target, logo, upperText, lowerText } : ButtonLinkProps) {
  return (
    <a href={href} target={target} className={className} >
      <img src={logo} alt={`${lowerText} logo`} className="w-5" />
      <div>
        <p className="text-xs">{upperText}</p>
        <p>{lowerText}</p>
      </div>
    </a>
  );
}

export default StoreLink;
