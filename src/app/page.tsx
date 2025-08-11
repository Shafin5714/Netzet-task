import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-figtree">
      {/* Nav Section */}
      <div className="text-[16px] w-full  md:text-[22px] h-[76px] md:h-[46px] flex flex-col md:flex-row items-center md:gap-1 justify-center bg-linear-to-r/srgb from-[#FC004E] to-[#10CBE0] px-2 md:px-0">
        <div className="flex items-center gap-1">
          <div className="text-[#00E7F9] font-extrabold flex items-center gap-1 ">
            <div className="w-5 h-5 md:w-7 md:h-7 relative">
              <Image src="/rocket.png" fill alt="icon" />
            </div>
            FRESH BEGINNINGS SALE:
          </div>
          <span className="font-semibold"> Extra 25% OFF,</span>
        </div>

        <span className="font-semibold">
          Limited Spots - start your journey today!
        </span>
      </div>

      {/* Hero section */}
      <div className="max-w-[1440px] md:px-[160px] mx-auto">
        <div className="pt-[35px] flex justify-center md:justify-between">
          <div className="flex items-center justify-center relative w-full md:w-auto">
            <Image src="/logo.svg" height={74} width={173.12} alt="logo" />
            <div className="absolute right-7 md:hidden cursor-pointer">
              <Image
                src="/hamburger-icon.png"
                style={{ objectFit: "contain" }}
                height={12}
                width={20}
                alt="logo"
              />
            </div>
          </div>

          <div className="hidden md:flex gap-[40px] mr-15">
            <Link href="/" className="text-[18px] text-[#A9A9A9] font-semibold">
              About us
            </Link>
            <Link href="/" className="text-[18px] text-[#A9A9A9] font-semibold">
              Contact
            </Link>
          </div>
        </div>

        {/* Main */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] relative z-20">
          <div className="flex justify-center md:justify-end md:flex-shrink-0 -z-10 order-1 md:order-2 px-3 md:px-0">
            <div className="relative w-full h-[400px] md:w-[666px] md:h-[679px]  ">
              <Image
                src="/hero-image.png"
                alt="Hero image"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="md:mt-[56px]  w-full md:w-[516px] order-2 md:order-1 px-5 md:px-0 md:-mr-20">
            <h2 className="text-[25px] font-urbanist text-center md:text-left md:text-[35px] font-bold leading-10">
              Want to Turn Social Media Into a Profitable Career?{" "}
            </h2>
            <h2
              className="text-[25px] font-urbanist text-center md:text-left md:text-[35px] text-[#00E7F9] font-bold leading-10 mt-1"
              style={{
                textShadow: "0px 3px 0 #C2003C",
              }}
            >
              Discover your way to success with Fametonic:
            </h2>
            <div className="flex gap-2.5 mt-[16px] items-center  justify-start">
              <Image
                src="/star.png"
                style={{ objectFit: "contain" }}
                height={22}
                width={25}
                alt="point"
              />
              <p className="text-[16px] font-semibold">
                Start growing your influence right away—no waiting required!
              </p>
            </div>
            <div className="flex gap-2.5 mt-[13px] items-center justify-start">
              <Image
                src="/star.png"
                height={22}
                width={25}
                alt="point"
                style={{ objectFit: "contain" }}
              />
              <p className="text-[16px] font-semibold">
                Create viral TikToks and Reels step by step with easy-to-follow
                lessons
              </p>
            </div>
            <div className="flex gap-2.5 mt-[13px] items-center justify-start">
              <Image
                src="/star.png"
                height={22}
                width={25}
                style={{ objectFit: "contain" }}
                alt="point"
              />
              <p className="text-[16px] font-semibold">
                Use a Personal AI Worker to boost your content
              </p>
            </div>
            <div className="flex gap-2.5 mt-[13px] items-center justify-start">
              <Image
                src="/star.png"
                height={22}
                width={25}
                alt="point"
                style={{ objectFit: "contain" }}
              />
              <p className="text-[16px] font-semibold">
                Learn from expert-led courses designed for aspiring influencers
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start ">
              <div className="order-2 md:order-1 pb-10 md:pb-0 w-[313px]">
                <button className="shadow-[2px_2px_10px_#00f0ff] cursor-pointer mt-[30px] w-[313px] h-[40px] bg-[#FC004E] rounded-lg font-figtree font-bold flex justify-center items-center gap-2">
                  <p className="text-[20px] font-bold">GET STARTED</p>
                  <Image
                    src="/arrow-right.png"
                    alt="icon"
                    height={5}
                    width={8}
                  />
                </button>

                <p className="mt-2.5 text-center text-[12px]">
                  1-minute quiz for personalized Insights
                </p>
              </div>

              <div className="order-1 md:order-2 text-center md:text-left">
                <p className="text-[#ABABAB] text-[12px] mt-[30px] font-medium">
                  By clicking &quot;Get Started&quot;, you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
                </p>
                <p className="text-[#ABABAB] text-[10px] mt-[12px] font-medium">
                  Fametonic 2025 ©All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
