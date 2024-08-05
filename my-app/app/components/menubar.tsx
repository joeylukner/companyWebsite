import Image from 'next/image';

export default function MenuBar() {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="menu-bar">
      <Image src="/images/vireon-logo.png" className="vireon-logo" alt="Vireon Logo" width={365 / 1.2} height={70 / 1.2} />
      <div className="menu-buttons">
        <button onClick={() => handleScroll('middle-section')}>About Us</button>
        <button onClick={() => handleScroll('meet-the-team')}>Our Team</button>
        <button onClick={() => handleScroll('portfolio')}>Portfolio</button>
      </div>
    </div>
  );
}
