import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-figtree">
      <div className="text-[16px] md:text-[22px] h-[76px] md:h-[46px] flex flex-col md:flex-row items-center md:gap-1 justify-center bg-linear-to-r/srgb from-[#FC004E] to-[#10CBE0]">
        <div className="flex items-center">
          <div className="text-[#00E7F9] text-shadow-xs font-extrabold flex items-center gap-2">
            <div className="w-6 h-5 relative">
              <Image
                src="/rocket.png"
                fill
                className="object-cover"
                alt="icon"
              />
            </div>
            FRESH BEGINNINGS SALE:
          </div>
          <span className="font-semibold"> Extra 25% OFF,</span>
        </div>

        <span className="font-semibold">
          Limited Spots - start your journey today!
        </span>
      </div>
      <div className="max-w-[70rem] mx-auto">
        {/* Hero section */}
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

          <div className="hidden md:flex gap-[40px] mr-13">
            <Link href="/" className="text-[18px] text-[#A9A9A9]">
              About us
            </Link>
            <Link href="/" className="text-[18px] text-[#A9A9A9]">
              Contact
            </Link>
          </div>
        </div>

        {/* Main */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0 relative z-20">
          <div className="flex justify-center md:justify-start md:flex-shrink-0 md:-ml-40 -z-10 order-1 md:order-2">
            <div className="relative w-[350px] h-[400px] md:w-[666px] md:h-[679px]">
              <Image
                src="/hero-image.png"
                alt="Hero image"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-[56px]  w-full md:w-[516px] order-2 md:order-1 px-5 md:px-0">
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
            <div className="flex gap-2.5 mt-[16px] items-start justify-start">
              <Image
                src="/star.png"
                style={{ objectFit: "contain" }}
                height={22}
                width={25}
                alt="point"
              />
              <p className="text-[16px]">
                Start growing your influence right away—no waiting required!
              </p>
            </div>
            <div className="flex gap-2.5 mt-[13px] items-start justify-start">
              <Image
                src="/star.png"
                height={22}
                width={25}
                alt="point"
                style={{ objectFit: "contain" }}
              />
              <p className="text-[16px]">
                Create viral TikToks and Reels step by step with easy-to-follow
                lessons
              </p>
            </div>
            <div className="flex gap-2.5 mt-[13px] items-start justify-start">
              <Image
                src="/star.png"
                height={22}
                width={25}
                style={{ objectFit: "contain" }}
                alt="point"
              />
              <p className="text-[16px]">
                Use a Personal AI Worker to boost your content
              </p>
            </div>
            <div className="flex gap-2.5 mt-[13px] items-start justify-start">
              <Image
                src="/star.png"
                height={22}
                width={25}
                alt="point"
                style={{ objectFit: "contain" }}
              />
              <p className="text-[16px]">
                Learn from expert-led courses designed for aspiring influencers
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <button className="shadow-[2px_2px_10px_#00f0ff] cursor-pointer mt-[30px] w-[313px] h-[40px] bg-[#FC004E] rounded-lg font-figtree font-bold flex justify-center items-center gap-2">
                <span className="text=[20px]">GET STARTED</span>
                <Image src="/arrow-right.png" alt="icon" height={5} width={8} />
              </button>

              <p className="mt-2.5">1-minute quiz for personalized Insights</p>
              <p className="text-[#ABABAB] text-[12px] mt-[30px]">
                By clicking &quot;Get Started&quot;, you agree with Terms and
                Conditions, Privacy Policy, Subscription Terms
              </p>
              <p className="text-[#ABABAB] text-[10px] mt-[12px]">
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
