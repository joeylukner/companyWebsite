import Image from "next/image";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";

export const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex flex-col justify-center bg-cover bg-center aspect-w-16 aspect-h-10 lg:h-screen"
      style={{
        backgroundImage:
          "url('/images/night-sky.png'), radial-gradient(circle, rgba(37,27,88,0.916) 0%, rgba(18,47,87,0.779) 40%, rgba(0,0,0,0.938) 100%)",
      }}
    >
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>

      {/* Hero Content */}
      <Container className="flex items-center justify-between h-full">
        <div className="flex p-5 lg:p-20 items-center justify-left w-full lg:w-1/2 h-full">
          <div className="max-w-2xl text-white">
            <h1 className="font-bold leading-none tracking-tight text-left">
              Private <br /> Investment <br /> Fund
            </h1>
            <h3 className="py-5 leading-snug text-left">
              Expertise. Confidence. Value.
            </h3>
          </div>
        </div>
        <div className="flex items-end justify-center w-full lg:w-1/2 h-full pt-6 pr-5">
          <div className="w-full h-full flex justify-end items-end">
            <Image
              src="/images/office-buildings.svg"
              width={4885}
              height={4475}
              className="object-contain max-h-full max-w-full"
              alt="Office Buildings"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
