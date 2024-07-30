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

  const handleScrollAboutUs = () => {
    const middleSection = document.getElementById('middle-section');
    if (middleSection)
      middleSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollOurTeam = () => {
    const teamSection = document.getElementById('meet-the-team');
    if (teamSection)
      teamSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection)
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="container">
      <div className="menu-bar">
        <Image src="/images/vireon-logo.png" className="vireon-logo" alt="Vireon Logo" width={365 / 1.2} height={70 / 1.2} />
        <div className="menu-buttons">
          <button onClick={handleScrollAboutUs}>About Us</button>
          <button onClick={handleScrollOurTeam}>Our Team</button>
          <button onClick={handleScrollPortfolio}>Portfolio</button>
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
        <div className="hero-content">
          <div className="hero-text">
            <h1>Our Interests</h1>
            <div className="interests">
              <h2>01 Office Buildings</h2>
              <p id="description">Specializing in distressed deals with a fast cash close, preferentially Class A office in the Mid-Atlantic region with over 50% occupancy.</p>
            </div>
            <div className="interests">
              <h2>02 Industrial / Flex</h2>
              <p id="description">Interested in large, multi-tenant warehouse and distribution centers located near major transportation thoroughfares.</p>
            </div>
            <div className="interests">
              <h2>03 Software Companies</h2>
              <p id="description">Acquisition or majority ownership in well-established software companies with recurring revenue of between $2-$20 million, preferably specializing in a niche industry.</p>
            </div> 
          </div>
          <Image src="/images/house-icon.svg" className="hero-logo" id="house" alt="House Art" width={469} height={359} />
        </div>
      </section>

      <section id="meet-the-team" className="meet-the-team">
        <div className="team-Title">
          <h5>Meet The Team</h5>
        </div>
        <div className="profile-container">
          <div id="ben" className="profile">
            <Image src="/images/ben.jpg" className="Headshot" alt="Headshot" width={500} height={500} />
            <h4>Benjamin Goldfield <br /> Owner, CEO</h4>
          </div>
          <div id="john" className="profile">
            <Image src="/images/john.jpg" className="Headshot" alt="Headshot" width={500} height={500} />
            <h4>John Angelella <br />Chief Investment Officer</h4>
          </div>
        </div>
      </section>



      <section id="portfolio" className="portfolio">
        <div className="portfolio-Title">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio-grid">
          <div className="grid-item">
            <Image src="/images/fairfax.jpg" className="property" alt="property" width={700} height={550} />
            <h4>11350 Random Hills Road<br />Fairfax, VA</h4>
          </div>
          <div className="grid-item">
            <Image src="/images/white-marsh.jpg" className="property" alt="property" width={700} height={550} />
            <h4>8110 Corporate Drive<br />Whitemarsh, MD</h4>
          </div>
          <div className="grid-item">
            <Image src="/images/white-marsh-2.jpg" className="property" alt="property" width={700} height={550} />
            <h4>8140 Corporate Drive<br />Whitemarsh, MD</h4>
          </div>
          <div className="grid-item">
            <Image src="/images/bedford.jpg" className="property" alt="property" width={700} height={550} />
            <h4>550 Sunnyside Road<br />Bedford, PA</h4>
          </div>
          <div className="grid-item">
            <Image src="/images/golden-corral.png" className="property" alt="property" width={700} height={550} />
            <h4>Golden Corral<br />Celebration, FL</h4>
          </div>
          <div className="grid-item">
            <Image src="/images/walgreens.png" className="property" alt="property" width={700} height={550} />
            <h4>Walgreens<br />Tuscon, AZ</h4>
          </div>
          <div className="grid-item">
            <Image src="/images/gloucester.png" className="property" alt="property" width={700} height={550} />
            <h4>602 Little Gloucester Road<br />Blackwood, NJ</h4>
          </div>
          <div className="grid-item">
            <Image src="/images/gloucester-2.png" className="property" alt="property" width={700} height={550} />
            <h4>604 Little Gloucester Road<br />Blackwood, NJ</h4>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <div className="bg-logo">
          <Image src="/images/bg-captive-logo.png" alt="property" width={300} height={300} />
        </div>
        <div className="contact-info">
          <h4>Contact Us!<br />jangelella@tspartnersinc.com           610-768-1105</h4>
        </div>
        <div className="ts-logo">
          <Image src="/images/ts-logo.png" alt="property" width={300} height={300} />
        </div>
      </section>
    </div>

  );
}
