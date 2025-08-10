import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-figtree bg-[#000002]">
      <div className="text-[22px] h-[46px] flex items-center gap-1 justify-center bg-gradient-to-r from-[#FC004E] via-[#9c538a]  to-[#10CBE0]">
        <span className="text-[#00E7F9] text-shadow-xs font-extrabold ">
          🚀 FRESH BEGINNINGS SALE:
        </span>
        <span className="font-semibold">
          Extra 25% OFF, Limited Spots - start your journey today!
        </span>
      </div>
      <div className="max-w-[70rem] mx-auto">
        {/* Hero section */}
        <div className=" pt-[35px] flex justify-between">
          <Image src="/logo.svg" height={74} width={173.12} alt="logo" />
          <div className="flex gap-[40px]">
            <Link href="/" className="text-[18px] text-[#A9A9A9]">
              About us
            </Link>
            <Link href="/" className="text-[18px] text-[#A9A9A9]">
              Contact
            </Link>
          </div>
        </div>

        {/* Main */}
        <div className="grid grid-cols-[1fr_auto] gap-0 relative z-20">
          <div className="mt-[56px] font-urbanist w-[516px]">
            <h2 className="text-[35px] font-bold">
              Want to Turn Social Media Into a Profitable Career?{" "}
            </h2>
            <h2
              className="text-[35px] text-[#00E7F9] font-bold "
              style={{
                textShadow: "0px 3px 0 #C2003C",
              }}
            >
              Discover your way to success with Fametonic:
            </h2>
            <div className="flex gap-2.5 mt-[16px] ">
              <Image src="/star.png" height={22} width={25} alt="point" />
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
            <div className="flex gap-2.5 mt-[13px]">
              <Image src="/star.png" height={22} width={25} alt="point" />

              <p className="text-[16px]">
                Use a Personal AI Worker to boost your content
              </p>
            </div>
            <div className="flex gap-2.5 mt-[13px]">
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
            <button className="shadow-[2px_2px_10px_#00f0ff] cursor-pointer mt-[30px] w-[313px] h-[40px] bg-[#FC004E] rounded-lg font-figtree font-bold flex justify-center items-center gap-2">
              <span className="text=[20px]">GET STARTED</span>
              <Image src="/arrow-right.png" alt="icon" height={5} width={8} />
            </button>

            <p className="font-figtree mt-2.5">
              1-minute quiz for personalized Insights
            </p>
            <p className="font-figtree text-[#ABABAB] text-[12px] mt-[30px]">
              By clicking &quot;Get Started&quot;, you agree with Terms and
              Conditions, Privacy Policy, Subscription Terms
            </p>
            <p className="font-figtree text-[#ABABAB] text-[10px] mt-[12px]">
              Fametonic 2025 ©All Rights Reserved.
            </p>
          </div>
          <div className="flex-shrink-0 -ml-40 -z-10">
            <Image
              src="/hero-image.png"
              width={666}
              height={679}
              alt="Hero image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
