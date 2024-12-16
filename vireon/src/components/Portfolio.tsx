import Image from 'next/image';

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 'reston',
      imgSrc: '/images/reston.png',
      address: '2100 Reston Parkway',
      location: 'Reston, VA',
      details: {
        squareFootage: '168,299',
        dateAcquired: '12/31/24',
        dateSold: 'N/A',
        numberOfTenants: '1'
      }
    },
    {
      id: 'fairfax',
      imgSrc: '/images/fairfax.jpg',
      address: '11350 Random Hills Road',
      location: 'Fairfax, VA',
      details: {
        squareFootage: '166,758',
        dateAcquired: '5/31/24',
        dateSold: 'N/A',
        numberOfTenants: '36'
      }
    },
    {
      id: 'whitemarsh',
      imgSrc: '/images/white-marsh.jpg',
      address: '8110 Corporate Drive',
      location: 'Whitemarsh, MD',
      details: {
        squareFootage: '75,687',
        dateAcquired: '5/23/19',
        dateSold: 'N/A',
        numberOfTenants: '1'
      }
    },
    {
      id: 'whitemarsh2',
      imgSrc: '/images/white-marsh-2.jpg',
      address: '8140 Corporate Drive',
      location: 'Whitemarsh, MD',
      details: {
        squareFootage: '76,793',
        dateAcquired: '5/23/19',
        dateSold: 'N/A',
        numberOfTenants: '12'
      }
    },
    {
      id: 'bedford',
      imgSrc: '/images/bedford.jpg',
      address: '550 Sunnyside Road',
      location: 'Bedford, PA',
      details: {
        squareFootage: '452,177',
        dateAcquired: '8/10/17',
        dateSold: '11/5/21',
        numberOfTenants: '4'
      }
    },
    {
      id: 'goldencorral',
      imgSrc: '/images/golden-corral.png',
      address: 'Golden Corral',
      location: 'Celebration, FL',
      details: {
        squareFootage: '12,622',
        dateAcquired: '2/3/22',
        dateSold: 'N/A',
        numberOfTenants: '1'
      }
    },
    {
      id: 'walgreens',
      imgSrc: '/images/walgreens.png',
      address: 'Walgreens',
      location: 'Tuscon, AZ',
      details: {
        squareFootage: '14,477',
        dateAcquired: '1/28/22',
        dateSold: 'N/A',
        numberOfTenants: '1'
      }
    },
    {
      id: 'gloucester',
      imgSrc: '/images/gloucester.png',
      address: '602 Little Gloucester Road',
      location: 'Blackwood, NJ',
      details: {
        squareFootage: '10,000',
        dateAcquired: '3/3/2006',
        dateSold: '10/30/19',
        numberOfTenants: '1'
      }
    },
    {
      id: 'gloucester2',
      imgSrc: '/images/gloucester-2.png',
      address: '606 Little Gloucester Road',
      location: 'Blackwood, NJ',
      details: {
        squareFootage: '3,960',
        dateAcquired: '3/3/2006',
        dateSold: '10/30/19',
        numberOfTenants: '1'
      }
    }
  ];

  return (
    <section id="portfolio" className="bg-black py-16 text-white">
      <div className="text-center mb-12">
        <h2 className="font-bold">Portfolio</h2>
      </div>
      <div className="grid grid-cols-2 gap-10 px-8 max-w-7xl mx-auto">
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
};

function PortfolioItem({
  imgSrc,
  address,
  location,
  details,
}: {
  imgSrc: string;
  address: string;
  location: string;
  details: {
    squareFootage: string;
    dateAcquired: string;
    dateSold: string;
    numberOfTenants: string;
  };
}) {
  return (
    <div className="relative group overflow-hidden">
      <Image
        src={imgSrc}
        alt="property"
        width={700}
        height={550}
        className="w-full h-auto transition-transform duration-300 ease-in-out transform"
      />
      {/* Address and Location Overlay */}
      <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-50 text-white p-4 text-center transition-opacity duration-300 ease-in-out group-hover:opacity-0">
        <p className="font-bold">
          {address}
          <br />
          {location}
        </p>
      </div>
      {/* Hover Details */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm text-white flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
        <div className="p-6">
          <h4 className="font-bold mb-2">
            {address}
            <br />
            {location}
          </h4>
          <div>
            <p>Square Footage: {details.squareFootage}</p>
            <p>Date Acquired: {details.dateAcquired}</p>
            <p>Date Sold: {details.dateSold}</p>
            <p>Number of Tenants: {details.numberOfTenants}</p>
          </div>
        </div>
      </div>
    </div>
  );
}