import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Statistics } from "@/components/Statistics";
import { OurInterests } from "@/components/OurInterests";
import { MeetTheTeam } from "@/components/MeetTheTeam";
import Portfolio from "@/components/Portfolio";


export default function Home() {
  return (
    <Container>
      <Hero />
      <AboutUs />
      <Statistics />
      <OurInterests />
      <MeetTheTeam />
      <Portfolio />
    </Container>
  );
}
