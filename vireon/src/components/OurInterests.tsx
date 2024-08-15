import { Container } from "@/components/Container";
import Image from "next/image";

export const OurInterests = () => {
  return (
    <div
      id="our-interests"
      className="relative flex items-center justify-center bg-black aspect-w-16 aspect-h-9 lg:h-screen text-white"
    >
      <Container className="flex items-center w-full h-full">
        <div className="flex p-6 items-center justify-left w-full lg:w-1/2 h-full">
          <div className="max-w-2xl text-white">
            <h2 className="font-bold leading-tight tracking-tight text-left pb-10">
              Our Interests
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-2">
                  01 Office Buildings
                </h3>
                <p className="">
                  Specializing in distressed deals with a fast cash close,
                  preferentially Class A office in the Mid-Atlantic region with
                  over 50% occupancy.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  02 Industrial / Flex
                </h3>
                <p className="">
                  Interested in large, multi-tenant warehouse and distribution
                  centers located near major transportation thoroughfares.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  03 Software Companies
                </h3>
                <p className="">
                  Acquisition or majority ownership in well-established software
                  companies with recurring revenue of between $2-$20 million,
                  preferably specializing in a niche industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-center w-full lg:w-1/2 h-full">
          <div className="w-full max-w-md lg:max-w-none lg:w-full">
            <Image
              src="/images/house-icon.svg"
              width={4885}
              height={4475}
              className="object-contain w-full h-auto"
              alt="House Icon"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
