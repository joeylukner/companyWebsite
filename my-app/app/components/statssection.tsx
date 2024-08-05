import Image from 'next/image';

export default function StatsSection() {
  return (
    <section className="stats-section">
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
  );
}
