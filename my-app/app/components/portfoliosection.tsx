import Image from 'next/image';

export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: 'fairfax',
      imgSrc: '/images/fairfax.jpg',
      address: '11350 Random Hills Road',
      location: 'Fairfax, VA',
      details: {
        purchasePrice: '',
        squareFootage: '',
        dateAcquired: '',
        dateSold: '',
        numberOfTenants: ''
      }
    },
    {
      id: 'whitemarsh',
      imgSrc: '/images/white-marsh.jpg',
      address: '8110 Corporate Drive',
      location: 'Whitemarsh, MD',
      details: {
        purchasePrice: '',
        squareFootage: '',
        dateAcquired: '',
        dateSold: '',
        numberOfTenants: ''
      }
    },
    {
      id: 'whitemarsh2',
      imgSrc: '/images/white-marsh-2.jpg',
      address: '8140 Corporate Drive',
      location: 'Whitemarsh, MD',
      details: {
        purchasePrice: '',
        squareFootage: '',
        dateAcquired: '',
        dateSold: '',
        numberOfTenants: ''
      }
    },
    {
      id: 'bedford',
      imgSrc: '/images/bedford.jpg',
      address: '550 Sunnyside Road',
      location: 'Bedford, PA',
      details: {
        purchasePrice: '',
        squareFootage: '',
        dateAcquired: '',
        dateSold: '',
        numberOfTenants: ''
      }
    },
    {
      id: 'goldencorral',
      imgSrc: '/images/golden-corral.png',
      address: 'Golden Corral',
      location: 'Celebration, FL',
      details: {
        purchasePrice: '',
        squareFootage: '',
        dateAcquired: '',
        dateSold: '',
        numberOfTenants: ''
      }
    },
    {
      id: 'walgreens',
      imgSrc: '/images/walgreens.png',
      address: 'Walgreens',
      location: 'Tuscon, AZ',
      details: {
        purchasePrice: '',
        squareFootage: '',
        dateAcquired: '',
        dateSold: '',
        numberOfTenants: ''
      }
    },
    {
      id: 'gloucester',
      imgSrc: '/images/gloucester.png',
      address: '602 Little Gloucester Road',
      location: 'Blackwood, NJ',
      details: {
        purchasePrice: '',
        squareFootage: '',
        dateAcquired: '',
        dateSold: '',
        numberOfTenants: ''
      }
    },
    {
      id: 'gloucester2',
      imgSrc: '/images/gloucester-2.png',
      address: '606 Little Gloucester Road',
      location: 'Blackwood, NJ',
      details: {
        purchasePrice: '',
        squareFootage: '',
        dateAcquired: '',
        dateSold: '',
        numberOfTenants: ''
      }
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-Title">
        <h2>Portfolio</h2>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <PortfolioItem
            key={item.id}
            imgSrc={item.imgSrc}
            address={item.address}
            location={item.location}
            details={item.details}
          />
        ))}
      </div>
    </section>
  );
}

function PortfolioItem({ imgSrc, address, location, details }: { imgSrc: string, address: string, location: string, details: { purchasePrice: string, squareFootage: string, dateAcquired: string, dateSold: string, numberOfTenants: string } }) {
  return (
    <div className="grid-item">
      <Image src={imgSrc} className="property" alt="property" width={700} height={550} />
      <div className="property-card">
        <h4>{address}<br />{location}</h4>
        <div className="property-details">
          <p>Purchase Price: {details.purchasePrice}</p>
          <p>Square Footage: {details.squareFootage}</p>
          <p>Date Acquired: {details.dateAcquired}</p>
          <p>Date Sold: {details.dateSold}</p>
          <p>Number of Tenants: {details.numberOfTenants}</p>
        </div>
      </div>
    </div>
  );
}
