import Image from 'next/image';

export default function TeamSection() {
  return (
    <section id="meet-the-team" className="meet-the-team">
      <div className="team-title">
        <h2>Meet The Team</h2>
      </div>
      <div className="profile-container">
        <ProfileCard
          id="ben"
          imgSrc="/images/ben.jpg"
          name="Benjamin Goldfield"
          title="Owner, CEO"
          details="Benjamin Goldfield is the President /CEO of TS Partners, a 38 year old banking software company with $25 million in yearly recurring revenue. Outside of TS Partners, Ben actively invests in and manages large commercial real estate properties in addition to running a captive insurance company and family office hedge fund. Ben graduated from Drexel University in 1980 with a degree in MIS and a Master’s degree in 1982 in Investment Management. Prior to founding TS Partners, he held positions at SEI Investments, Premier Systems, and PNC Financial."
        />
        <ProfileCard
          id="john"
          imgSrc="/images/john.jpg"
          name="John Angelella"
          title="Chief Investment Officer"
          details="John Angelella is the Chief Investment Officer of Vireon Capital, the umbrella entity that encompasses Ben’s personal real estate holdings, captive insurance company, and hedge fund. John is responsible for property selection, oversight, accounting/payroll, accounts receivable/payable, legal drafts, and collections. Outside of overseeing the fund’s real estate holdings, John is an equities and options trader for the family office’s $250 million hedge fund. John graduated from Villanova in 2023 with a dual degree in Economics and Biology."
        />
      </div>
    </section>
  );
}

function ProfileCard({ id, imgSrc, name, title, details }: { id: string, imgSrc: string, name: string, title: string, details: string }) {
  return (
    <div id={id} className="profile">
      <Image src={imgSrc} className="Headshot" alt="Headshot" width={3337} height={3337} />
      <div className="profile-card">
        <h4>{name}<br />{title}</h4>
        <div className="profile-details">
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
}
