"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";

export const Statistics = () => {
  const aumRef = useRef<HTMLHeadingElement>(null);
  const sqftRef = useRef<HTMLHeadingElement>(null);
  const tenantsRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const incrementValue = (start: number, end: number, element: HTMLElement) => {
      let current = start;
      const duration = 2000; // 2 seconds for the full animation
      const stepTime = Math.abs(Math.floor(duration / (end - start)));
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        const progressRatio = progress / duration;
        const easedProgress = 1 - Math.pow(1 - progressRatio, 3); // Ease out cubic
        const value = Math.floor(start + easedProgress * (end - start));
        element.textContent = value.toLocaleString();

        if (progress < duration) {
          requestAnimationFrame(step);
        } else {
          element.textContent = end.toLocaleString();
        }
      };

      requestAnimationFrame(step);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (aumRef.current) incrementValue(0, 250000000, aumRef.current);
          if (sqftRef.current) incrementValue(0, 330000, sqftRef.current);
          if (tenantsRef.current) incrementValue(0, 50, tenantsRef.current);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (aumRef.current) observer.observe(aumRef.current);
    if (sqftRef.current) observer.observe(sqftRef.current);
    if (tenantsRef.current) observer.observe(tenantsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="statistics" className="bg-black text-white border-t-4 border-b-4 border-white py-2 lg:py-16">
      <Container className="flex justify-around items-center text-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="flex justify-center mb-4  m-0">
            <Image
              src="/images/dollar.png"
              alt="$250,000,000 A.U.M."
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <h4 ref={aumRef} className="font-bold">0</h4>
          <h4 className="mt-1 font-bold">A.U.M.</h4>
        </div>

        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/office-buildings.png"
              alt="330,000 SQFT CLASS A OFFICE"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <h4 ref={sqftRef} className="font-bold">0</h4>
          <h4 className="mt-1 font-bold">SQFT CLASS A OFFICE</h4>
        </div>

        <div className="w-full md:w-1/3">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/three-people.png"
              alt="50+ DIVERSIFIED TENANTS"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <h4 ref={tenantsRef} className="font-bold">0</h4>
          <h4 className="mt-1 font-bold">DIVERSIFIED TENANTS</h4>
        </div>
      </Container>
    </div>
  );
};
