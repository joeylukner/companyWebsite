import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <section id="about-us" className="about-us">
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
        <div className="about-us-img">
          <Image src="/images/chart-man.png" id="chart-man" alt="Chart Man" width={302} height={368} />
        </div>
      </div>
    </section>
  );
}
