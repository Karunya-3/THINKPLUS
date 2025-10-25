"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false); // Add this state

  const rafId = useRef<number>();
  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  
  useEffect(() => {
    setIsClient(true); // Set to true when component mounts on client
  }, []);

  useEffect(() => {
    if (!isClient) return; // Don't run on server

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, [data-hover]'));
    };

    window.addEventListener('mousemove', handleMouseMove);

    const follow = () => {
      rafId.current = requestAnimationFrame(follow);

      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.1;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.1;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0)`;
      }
    };
    
    rafId.current = requestAnimationFrame(follow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if(rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isClient]); // Add isClient as dependency

  // Don't render on server
  if (!isClient) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className={cn(
          "fixed w-3 h-3 rounded-full bg-accent pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height]",
          "hidden md:block",
          isHovering ? "w-0 h-0" : "w-3 h-3"
        )}
      />
      <div
        ref={followerRef}
        className={cn(
          "fixed w-10 h-10 rounded-full border border-accent/50 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-300",
          "hidden md:block",
          isHovering ? "w-16 h-16 border-accent/80" : "w-10 h-10"
        )}
      />
    </>
  );
}