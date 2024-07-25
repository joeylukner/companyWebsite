// app/page.tsx

import Image from 'next/image';
import './globals.css';

export default function HomePage() {
  return (
    <div>
      <div className="top-section">
        <div className="menu-bar">
          <Image src="/images/vireon-logo.png" className="vireon-logo" alt="Vireon Logo" width={365/1.2} height={70/1.2} />
          <div className="menu-buttons">
            <button>About Us</button>
            <button>Our Team</button>
            <button>Portfolio</button>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Private</h1>
            <h1>Investment</h1>
            <h1>Fund</h1>
            <h2>Expertise. Confidence. Value.</h2>
          </div>
          <Image src="/images/office-buildings.png" className="hero-logo" alt="Office Buildings" width={4885 / 12} height={4475 / 10} />
        </div>
      </div>

      <section className="middle-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>About Us</h1>
            <p>Welcome to Vireon Capital, a distinguished family office with a 38-year legacy based in King of Prussia, Pennsylvania. With $250 million in assets, we specialize in trading across stocks, distressed/sovereign debt and derivatives, leveraging deep expertise to optimize investment outcomes. In addition to our financial market accumen, we excel in acquiring and managing commercial real estate to maximize returns. Committed to growth, we are expanding into investments in dynamic, growing companies, guided by our investment philosophy to cultivate sustainable value and long-term prosperity.</p>
          </div>
          <Image src="/images/chart-man.png" className="hero-logo" alt="Chart Man" width={302} height={368} />
        </div>
      </section>

      <section className="middle-bottom-section">
        <div className="stat">
          <Image src="/images/dollar.png" alt="Dollar Icon" width={70} height={70} />
          <h2>$250 MILLION</h2>
          <h2>A.U.M.</h2>
        </div>
        <div className="stat">
          <Image src="/images/office-buildings.png" alt="Towers Icon" width={70} height={70} />
          <h2>330,000 SQFT</h2>
          <h2>CLASS A OFFICE</h2>
        </div>
        <div className="stat">
          <Image src="/images/three-people.png" alt="Three People Icon" width={70} height={70} />
          <h2>50+ DIVERSIFIED</h2>
          <h2>TENANTS</h2>
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
        <Image src="/images/house-art.png" alt="House Art" width={640} height={500} />

        </div>
      </section>
    </div>
  );
}
