import Image from "next/image";

export const MeetTheTeam = () => {
  return (
    <section
      id="meet-the-team"
      className="relative flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-blue-900 to-black py-16 text-white"
      style={{
        height: "100vh",
        maxHeight: "56.25vw", // Maintain 16:9 aspect ratio
      }}
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="font-bold">Meet the Team</h2>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-2 gap-10 px-8 max-w-6xl mx-auto">
        {/* Team Member 1 */}
        <div className="relative group overflow-hidden">
          <Image
            src="/images/ben.jpg"
            alt="Benjamin Goldfield"
            width={500}
            height={500}
            className="w-full h-auto transition-transform duration-300 ease-in-out transform"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            <div className="p-6">
              <h4 className="font-bold mb-2">Benjamin Goldfield</h4>
              <p className="">Owner, CEO</p>
              <p className="mt-4">
                Benjamin Goldfield is the President/CEO of TS Partners, a 38-year-old banking software company with $25 million in yearly recurring revenue. Outside of TS Partners, Ben actively invests in and manages large commercial real estate properties in addition to running a captive insurance company and family office hedge fund. Ben graduated from Drexel University in 1980 with a degree in MIS and a Master’s degree in 1982 in Investment Management. Prior to founding TS Partners, he held positions at SEI Investments, Premier Systems, and PNC Financial.
              </p>
            </div>
          </div>
        </div>
        {/* Team Member 2 */}
        <div className="relative group overflow-hidden">
          <Image
            src="/images/john.jpg"
            alt="John Angelella"
            width={500}
            height={500}
            className="w-full h-auto transition-transform duration-300 ease-in-out transform"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
            <div className="p-6">
              <h4 className="font-bold mb-2">John Angelella</h4>
              <p className="">Chief Investment Officer</p>
              <p className="mt-4">
                John Angelella is the Chief Investment Officer of Vireon Capital, the umbrella entity that encompasses Ben’s personal real estate holdings, captive insurance company, and hedge fund. John is responsible for property selection, oversight, accounting/payroll, accounts receivable/payable, legal drafts, and collections. Outside of overseeing the fund’s real estate holdings, John is an equities and options trader for the family office’s $250 million hedge fund. John graduated from Villanova in 2023 with a dual degree in Economics and Biology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
