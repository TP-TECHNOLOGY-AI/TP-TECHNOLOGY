'use client';

import React from 'react';
import {
  IoCallOutline,
  IoCheckmarkDoneOutline,
  IoOptionsOutline,
  IoMailOutline,
} from 'react-icons/io5';

const menuItems = [
  { title: 'Funktionen', href: '#funktionen', icon: <IoCallOutline />, gradientFrom: '#7eb8d0', gradientTo: '#4a90a4' },
  { title: "So funktioniert's", href: '#ablauf', icon: <IoCheckmarkDoneOutline />, gradientFrom: '#4a90a4', gradientTo: '#5ba3c9' },
  { title: 'Individualisierung', href: '#individualisierung', icon: <IoOptionsOutline />, gradientFrom: '#5ba3c9', gradientTo: '#7eb8d0' },
  { title: 'Kontakt', href: '#kontakt', icon: <IoMailOutline />, gradientFrom: '#9dd0e8', gradientTo: '#5ba3c9' },
];

export default function GradientMenu() {
  return (
    <ul className="flex gap-3">
      {menuItems.map(({ title, href, icon, gradientFrom, gradientTo }, idx) => (
        <li
          key={idx}
          style={{ '--gradient-from': gradientFrom, '--gradient-to': gradientTo } as React.CSSProperties}
          className="relative w-[40px] h-[40px] bg-white/[0.06] border border-white/[0.1] rounded-full flex items-center justify-center transition-all duration-500 hover:w-[152px] hover:border-transparent group cursor-pointer"
        >
          <a href={href} className="absolute inset-0 rounded-full z-20" aria-label={title} />

          <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100" />
          <span className="absolute top-[8px] inset-x-0 h-full rounded-full bg-[linear-gradient(135deg,var(--gradient-from),var(--gradient-to))] blur-[20px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-40" />

          <span className="relative z-10 transition-all duration-300 group-hover:scale-0 group-hover:opacity-0 text-white/70">
            <span className="text-lg">{icon}</span>
          </span>

          <span className="absolute text-white text-xs font-medium tracking-wide transition-all duration-300 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 whitespace-nowrap delay-75 z-10">
            {title}
          </span>
        </li>
      ))}
    </ul>
  );
}
