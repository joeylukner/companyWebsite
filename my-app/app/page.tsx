"use client";
import Image from 'next/image';
import './globals.css';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const counters = document.querySelectorAll('.stat h4 span');
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
      <section id="top-section" className="top-section">
        <div className="top-content">
          <div className="top-details">
            <div className="top-title">
              <h1>Private</h1>
              <h1>Investment</h1>
              <h1>Fund</h1>
              <h3>Expertise. Confidence. Value.</h3>
            </div>
          </div>
          <div className="top-img">
            <Image src="/images/office-buildings.png" className="hero-logo" id="office-buildings" alt="Office Buildings" width={4885} height={4475} />
          </div>
        </div>
      </section>

      <section id="middle-section" className="about-us">
        <div className="about-us-content">
          <div className="about-us-details">
            <h2 className="about-us-title">About Us</h2>
            <div className="about-us-text">
              <p>Welcome to Vireon Capital, a distinguished family office with a 38-year legacy based in King of Prussia, Pennsylvania.</p>
              <p>With $250 million in assets, we specialize in trading across stocks, distressed/sovereign debt and derivatives, leveraging deep expertise to optimize investment outcomes.</p>
              <p>In addition to our financial market acumen, we excel in acquiring and managing commercial real estate to maximize returns.</p>
              <p>Committed to growth, we are expanding into investments in dynamic, growing companies, guided by our investment philosophy to cultivate sustainable value and long-term prosperity.</p>
            </div>
          </div>
          <div className="about-us-img"><Image src="/images/chart-man.png" id="chart-man" alt="Chart Man" width={302} height={368} /></div>
        </div>
      </section>


      <section className="middle-bottom-section">
        <div className="stat">
          <Image src="/images/dollar.png" id="dollar-icon" alt="Dollar Icon" width={70} height={70} />
          <h4>$<span data-end="250000000"></span></h4>
          <h4>A.U.M.</h4>
        </div>
        <div className="stat">
          <Image src="/images/office-buildings.png" id="towers-icon" alt="Towers Icon" width={70} height={70} />
          <h4><span data-end="330000"></span> SQFT</h4>
          <h4>CLASS A OFFICE</h4>
        </div>
        <div className="stat">
          <Image src="/images/three-people.png" id="people-icon" alt="Three People Icon" width={70} height={70} />
          <h4><span data-end="50"></span>+ DIVERSIFIED</h4>
          <h4>TENANTS</h4>
        </div>
      </section>

      <section className="bottom-section">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Our Interests</h2>
            <div className="interests">
              <h3>01 Office Buildings</h3>
              <p id="description">Specializing in distressed deals with a fast cash close, preferentially Class A office in the Mid-Atlantic region with over 50% occupancy.</p>
            </div>
            <div className="interests">
              <h3>02 Industrial / Flex</h3>
              <p id="description">Interested in large, multi-tenant warehouse and distribution centers located near major transportation thoroughfares.</p>
            </div>
            <div className="interests">
              <h3>03 Software Companies</h3>
              <p id="description">Acquisition or majority ownership in well-established software companies with recurring revenue of between $2-$20 million, preferably specializing in a niche industry.</p>
            </div> 
          </div>
          <div className="house-img"><Image src="/images/house-icon.svg" className="hero-logo" id="house" alt="House Art" width={469} height={359} /></div>
        </div>
      </section>
      <section id="meet-the-team" className="meet-the-team">
        <div className="team-title">
          <h2>Meet The Team</h2>
        </div>
        <div className="profile-container">
          <div id="ben" className="profile">
            <Image src="/images/ben.jpg" className="Headshot" alt="Headshot" width={3337} height={3337} />
            <div className="profile-card">
            <h4>Benjamin Goldfield <br /> Owner, CEO</h4>
              <div className="profile-details">
                <p>Benjamin Goldfield is the President /CEO of TS Partners, a 38 year old banking software company with $25 million in yearly recurring revenue.</p>
                <p>Outside of TS Partners, Ben actively invests in and manages large commercial real estate properties in addition to running a captive insurance company and family office hedge fund.</p>
                <p>Ben graduated from Drexel University in 1980 with a degree in MIS and a Master’s degree in 1982 in Investment Management. Prior to founding TS Partners, he held positions at SEI Investments, Premier Systems, and PNC Financial.</p>
              </div>
            </div>
          </div>
          <div id="john" className="profile">
            <Image src="/images/john.jpg" className="Headshot" alt="Headshot" width={200} height={200} />
            <div className="profile-card">
            <h4>John Angelella <br />Chief Investment Officer</h4>
              <div className="profile-details">
                <p>John Angelella is the Chief Investment Officer of Vireon Capital, the umbrella entity that encompasses Ben’s personal real estate holdings, captive insurance company, and hedge fund.</p>
                <p>John is responsible for property selection, oversight, accounting/payroll, accounts receivable/payable, legal drafts, and collections. Outside of overseeing the fund’s real estate holdings, John is an equities and options trader for the family office’s $250 million hedge fund.</p>
                <p>John graduated from Villanova in 2023 with a dual degree in Economics and Biology. </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="portfolio" className="portfolio">
        <div className="portfolio-Title">
          <h2>Portfolio</h2>
        </div>
        <div className="portfolio-grid">
          <div className="grid-item">
            <Image src="/images/fairfax.jpg" className="property" alt="property" width={700} height={550} />
            <div className="property-card">
              <h4>11350 Random Hills Road<br />Fairfax, VA</h4>
              <div className="property-details">
                <p>Purchase Price: </p>
                <p>Square Footage: </p>
                <p>Date Acquired: </p>
                <p>Date Sold: </p>
                <p>Number of Tenants: </p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <Image src="/images/white-marsh.jpg" className="property" alt="property" width={700} height={550} />
            <div className="property-card">
              <h4>8110 Corporate Drive<br />Whitemarsh, MD</h4>
              <div className="property-details">
                <p>Purchase Price:</p>
                <p>Square Footage: </p>
                <p>Date Acquired: </p>
                <p>Date Sold: </p>
                <p>Number of Tenants: </p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <Image src="/images/white-marsh-2.jpg" className="property" alt="property" width={700} height={550} />
            <div className="property-card">
              <h4>8140 Corporate Drive<br />Whitemarsh, MD</h4>
              <div className="property-details">
                <p>Purchase Price: </p>
                <p>Square Footage: </p>
                <p>Date Acquired: </p>
                <p>Date Sold: </p>
                <p>Number of Tenants: </p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <Image src="/images/bedford.jpg" className="property" alt="property" width={700} height={550} />
            <div className="property-card">
              <h4>550 Sunnyside Road<br />Bedford, PA</h4>
              <div className="property-details">
                <p>Purchase Price:</p>
                <p>Square Footage: </p>
                <p>Date Acquired: </p>
                <p>Date Sold: </p>
                <p>Number of Tenants: </p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <Image src="/images/golden-corral.png" className="property" alt="property" width={700} height={550} />
            <div className="property-card">
              <h4>Golden Corral<br />Celebration, FL</h4>
              <div className="property-details">
                <p>Purchase Price: </p>
                <p>Square Footage: </p>
                <p>Date Acquired: </p>
                <p>Date Sold: </p>
                <p>Number of Tenants: </p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <Image src="/images/walgreens.png" className="property" alt="property" width={700} height={550} />
            <div className="property-card">
              <h4>Walgreens<br />Tuscon, AZ</h4>
              <div className="property-details">
                <p>Purchase Price:</p>
                <p>Square Footage: </p>
                <p>Date Acquired:</p>
                <p>Date Sold: </p>
                <p>Number of Tenants:</p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <Image src="/images/gloucester.png" className="property" alt="property" width={700} height={550} />
            <div className="property-card">
              <h4>602 Little Gloucester Road<br />Blackwood, NJ</h4>
              <div className="property-details">
                <p>Purchase Price: </p>
                <p>Square Footage: </p>
                <p>Date Acquired: </p>
                <p>Date Sold:</p>
                <p>Number of Tenants: </p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <Image src="/images/gloucester-2.png" className="property" alt="property" width={700} height={550} />
            <div className="property-card">
              <h4>606 Little Gloucester Road<br />Blackwood, NJ</h4>
              <div className="property-details">
                <p>Purchase Price: </p>
                <p>Square Footage: </p>
                <p>Date Acquired: </p>
                <p>Date Sold: </p>
                <p>Number of Tenants:</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="contact-us">
        <div className="bg-logo">
          <Image src="/images/bg-captive-logo.png" alt="property" width={300} height={300} />
        </div>
        <div className="contact-info">
          <h4>Contact Us!<br />jangelella@tspartnersinc.com 610-768-1105</h4>
        </div>
        <div className="ts-logo">
          <Image src="/images/ts-logo.png" alt="property" width={300} height={300} />
        </div>
      </section>
    </div>

  );
}
