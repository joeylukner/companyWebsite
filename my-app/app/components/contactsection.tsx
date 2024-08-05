import Image from 'next/image';

export default function ContactSection() {
  return (
    <section className="contact-us">
      <div className="bg-logo">
        <Image src="/images/bg-captive-logo.png" alt="property" width={300} height={300} />
      </div>
      <div className="contact-info">
        <h4>Contact Us!<br />jangelella@tspartnersinc.com 610-768-1105</h4>
      </div>
      <div className="ts-logo">
        <Image src="/images/ts-logo.png" alt="property" width={300} height={300} />
      </div>
    </section>
  );
}
