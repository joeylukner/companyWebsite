import Image from 'next/image';

export default function ContactSection() {
  return (
    <section className="contact-us">
      <Image src="/images/vireon-logo.png" id = "vireon-contact" alt="Vireon Logo" width={365 / 1.2} height={70 / 1.2} />

      <div className="vertical-line">
      </div>
      <div className="contact-info">
        <h5>Contact:<br />jangelella@tspartnersinc.com<br /> 610.768.1105 <br />Contact Us!</h5>
      </div>
    </section>
  );
}
