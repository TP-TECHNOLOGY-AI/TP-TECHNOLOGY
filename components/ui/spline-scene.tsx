'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#4a90a4] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
