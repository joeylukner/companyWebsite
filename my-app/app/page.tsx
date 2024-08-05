"use client";
import Container from "./components/container";
import MenuBar from "./components/menubar";
import TopSection from "./components/topsection";
import AboutUsSection from "./components/aboutussection";
import StatsSection from "./components/statssection";
import InterestsSection from "./components/interestssection";
import TeamSection from "./components/teamsection";
import PortfolioSection from "./components/portfoliosection";
import ContactSection from "./components/contactsection";
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const counters = document.querySelectorAll('.stat h4 span');
    const options = {
      root: null,
      threshold: 0.1,
    };

    const callback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endValue = parseInt(target.getAttribute('data-end'), 10);
          const duration = 2000;
          var increment = endValue / (duration / 16);
          let currentValue = 0;
          const countUp = () => {
            currentValue += increment;
            increment += increment * 0.01;
            if (currentValue >= endValue) {
              target.textContent = endValue.toLocaleString();
              target.classList.add('fade-in');
              return;
            }
            target.textContent = Math.ceil(currentValue).toLocaleString();
            requestAnimationFrame(countUp);
          };
          countUp();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    counters.forEach((counter) => observer.observe(counter));
  }, []);

  return (
    <main>
      <Container>
        <MenuBar />
        <TopSection />
        <AboutUsSection />
        <StatsSection />
        <InterestsSection />
        <TeamSection />
        <PortfolioSection />
        <ContactSection />
      </Container>
    </main>
  );
}