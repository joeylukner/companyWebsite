import Image from 'next/image';

export default function TopSection() {
  return (
    <section id="top-section" className="top-section">
      <div className="top-content">
        <div className="top-details">
          <div className="top-title">
            <h1>Private<br />Investment <br />Fund</h1>
            
            <h3>Expertise. Confidence. Value.</h3>
          </div>
        </div>
        <div className="top-img">
          <Image src="/images/office-buildings.png" className="hero-logo" id="office-buildings" alt="Office Buildings" width={4885} height={4475} />
        </div>
      </div>
    </section>
  );
}
