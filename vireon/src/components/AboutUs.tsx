import Image from "next/image";
import { Container } from "@/components/Container";

export const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="relative flex flex-col justify-center bg-cover bg-center aspect-w-16 aspect-h-9 lg:h-screen"
      style={{
        background:
          "linear-gradient(90deg, rgba(25,25,25,1) 0%, rgba(36,19,170,1) 100%)",
      }}
    >
      <Container className="flex items-center justify-between h-full">
        <div className="flex p-6 lg:p-20 items-center justify-left w-full lg:w-2/3 h-full">
          <div className="max-w-2xl text-white">
            <h2 className="font-bold leading-tight tracking-tight text-left">
              About Us
            </h2>
            <p className="py-5 leading-relaxed text-left">
              Welcome to Vireon Capital, a distinguished family office with a
              38-year legacy based in King of Prussia, Pennsylvania.
            </p>
            <p className="py-2 leading-relaxed text-left">
              With $250 million in assets, we specialize in trading across
              stocks, distressed/sovereign debt, and derivatives, leveraging
              deep expertise to optimize investment outcomes.
            </p>
            <p className="py-2 leading-relaxed text-left">
              In addition to our financial market acumen, we excel in acquiring
              and managing commercial real estate to maximize returns.
            </p>
            <p className="py-2 leading-relaxed text-left">
              Committed to growth, we are expanding into investments in dynamic,
              growing companies, guided by our investment philosophy to
              cultivate sustainable value and long-term prosperity.
            </p>
          </div>
        </div>
        <div className="flex items-end justify-center w-full lg:w-1/3 h-full pt-10">
          <div className="w-full">
            <Image
              src="/images/chart-man.png"
              width={302}
              height={368}
              className="object-contain w-full h-auto"
              alt="Chart Man"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
