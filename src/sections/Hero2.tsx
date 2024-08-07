import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/nebula2.png";
import Image from "next/image";
import cylinderImage from "@/assets/ss2.png";
import noodleImage from "@/assets/ff2.png";
import backgroundImage from '@/assets/bg.jpg'

export const Hero = () => {
  return (
    <section
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
      // style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 1.0 coming soon
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Starship Scholar
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Discover, organize, and conquer your final year project with
              AI-powered tools and resources.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get waitlisted</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage}
              alt="cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={cylinderImage}
              width={220}
              height={220}
              alt="cylinder image"
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={noodleImage}
              width={200}
              alt="noodle image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};