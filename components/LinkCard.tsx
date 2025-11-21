import React, { useRef, useState, MouseEvent } from 'react';
import * as Icons from 'lucide-react';
import { LinkItem } from '../types';

interface LinkCardProps {
  item: LinkItem;
  index: number;
}

const LinkCard: React.FC<LinkCardProps> = ({ item, index }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Dynamic Icon Rendering
  const IconComponent = (Icons as any)[item.icon] || Icons.Link;

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation based on mouse position
    // Max rotation: 15 degrees
    const rotateX = ((y - centerY) / centerY) * -10; 
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      className="relative block group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      {/* Card Container with 3D Transform */}
      <div
        className={`
          relative h-full p-6 rounded-2xl border border-white/10 overflow-hidden
          bg-white/5 backdrop-blur-md shadow-xl transition-all duration-200 ease-out
          group-hover:shadow-2xl group-hover:shadow-${item.color.split('-')[1]}-500/20
          animate-fade-in-up opacity-0
        `}
        style={{
          transform: isHovering 
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.02)` 
            : 'rotateX(0deg) rotateY(0deg) scale(1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent z-20 pointer-events-none" />

        {/* Background Gradient Glow */}
        <div 
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} 
        />

        <div className="relative z-10 flex flex-col h-full" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/50">
              <Icons.ExternalLink className="w-5 h-5" />
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-1 tracking-tight group-hover:text-cyan-200 transition-colors">
            {item.title}
          </h3>
          
          <p className="text-sm text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors">
            {item.description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default LinkCard;