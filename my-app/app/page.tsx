"use client";
import Image from 'next/image';
import './globals.css';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const counters = document.querySelectorAll('.stat h3 span');
    const options = {
      root: null,
      threshold: 0.1,
    };

    const callback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endValue = parseInt(target.getAttribute('data-end'), 10);
          const duration = 2000;
          var increment = endValue / (duration / 16);
          let currentValue = 0;
          const countUp = () => {
            currentValue += increment;
            increment += increment * 0.01;
            if (currentValue >= endValue) {
              target.textContent = endValue.toLocaleString();
              target.classList.add('fade-in');
              return;
            }
            target.textContent = Math.ceil(currentValue).toLocaleString();
            requestAnimationFrame(countUp);
          };
          countUp();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    counters.forEach((counter) => observer.observe(counter));
  }, []);

  const handleScroll = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const middleSection = document.getElementById('middle-section');
    if (middleSection) {
      middleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="menu-bar">
        <Image src="/images/vireon-logo.png" className="vireon-logo" alt="Vireon Logo" width={365 / 1.2} height={70 / 1.2} />
        <div className="menu-buttons">
          <button onClick={handleScroll}>About Us</button>
          <button>Our Team</button>
          <button>Portfolio</button>
        </div>
      </div>
      <div className="top-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Private</h1>
            <h1>Investment</h1>
            <h1>Fund</h1>
            <h2>Expertise. Confidence. Value.</h2>
          </div>
          <Image src="/images/office-buildings.png" className="hero-logo" id="office-buildings" alt="Office Buildings" width={4885} height={4475} />
        </div>
      </div>

      <section id="middle-section" className="middle-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>About Us</h1>
            <p>Welcome to Vireon Capital, a distinguished family office with a 38-year legacy based in King of Prussia, Pennsylvania. With $250 million in assets, we specialize in trading across stocks, distressed/sovereign debt and derivatives, leveraging deep expertise to optimize investment outcomes. In addition to our financial market accumen, we excel in acquiring and managing commercial real estate to maximize returns. Committed to growth, we are expanding into investments in dynamic, growing companies, guided by our investment philosophy to cultivate sustainable value and long-term prosperity.</p>
          </div>
          <Image src="/images/chart-man.png" className="hero-logo" id="chart-man" alt="Chart Man" width={302} height={368} />
        </div>
      </section>

      <section className="middle-bottom-section">
        <div className="stat">
          <Image src="/images/dollar.png" id="dollar-icon" alt="Dollar Icon" width={70} height={70} />
          <h3>$<span data-end="250000000"></span></h3>
          <h3>A.U.M.</h3>
        </div>
        <div className="stat">
          <Image src="/images/office-buildings.png" id="towers-icon" alt="Towers Icon" width={70} height={70} />
          <h3><span data-end="330000"></span> SQFT</h3>
          <h3>CLASS A OFFICE</h3>
        </div>
        <div className="stat">
          <Image src="/images/three-people.png" id="people-icon" alt="Three People Icon" width={70} height={70} />
          <h3><span data-end="50"></span>+ DIVERSIFIED</h3>
          <h3>TENANTS</h3>
        </div>
      </section>

      <section className="bottom-section">
        <div className="bottom-left-content">
          <div className="bottom-left-title">
            <h1>Our Interests</h1>
          </div>
          <div className="interest">
            <h2>01 Office Buildings</h2>
            <p>Specializing in distressed deals with a fast cash close, preferentially Class A office in the Mid-Atlantic region with over 50% occupancy.</p>
          </div>
          <div className="interest">
            <h2>02 Industrial / Flex</h2>
            <p>Interested in large, multi-tenant warehouse and distribution centers located near major transportation thoroughfares.</p>
          </div>
          <div className="interest">
            <h2>03 Software Companies</h2>
            <p>Acquisition or majority ownership in well-established software companies with recurring revenue of between $2-$20million, preferably specializing in a niche industry.</p>
          </div>
        </div>
        <div className="bottom-right">
          <Image src="/images/house-art.png" className="house-logo" alt="House Art" width={640} height={500} />
        </div>
      </section>
    </div>
  );
}
