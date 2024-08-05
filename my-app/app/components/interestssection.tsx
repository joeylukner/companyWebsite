import Image from 'next/image';

export default function InterestsSection() {
  return (
    <section className="interests-section">
      <div className="interests-content">
        <div className="interests-text">
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
        <div className="house-img">
          <Image src="/images/house-icon.svg" className="hero-logo" id="house" alt="House Art" width={469} height={359} />
        </div>
      </div>
    </section>
  );
}
