"use client";
import Lottie from "react-lottie";
import SplitText from "@/components/SplitText";
import { json } from "@/public/planetarynavbar.json";
import { useRef } from "react";
import Link from "next/link";
import { Home, Book, User, Scale, Mail } from "lucide-react";
import Particles from "@/components/Particles";

export default function Homepage(props: { name: string; contact: string }) {
  const nav = useRef<Lottie>(null);
  const icons = useRef<HTMLDivElement>(null);
  const startAnimation = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    nav.current?.play();
    setTimeout(() => icons.current?.classList.remove("hidden"), 3000);
  };
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: json,
  };

  return (
    <div
      id="home"
      className="flex w-full flex-wrap h-screen justify-center items-center pb-8"
    >
      <div className="w-full h-screen absolute -z-10">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={12}
          speed={0.2}
          particleBaseSize={50}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="relative flex items-center justify-center w-full h-1/2">
        <div className="absolute h-auto w-1/4 portrait:w-full">
          <Lottie ref={nav} options={defaultOptions}></Lottie>
          <div className="hidden" ref={icons}>
            <Link
              href={"/#home"}
              className="absolute w-[8%] h-[8%] top-[56.75%] left-[53.75%] transform translate-x-[-50%] translate-y-[-50%]"
            >
              <Home className="w-full h-full hover:opacity-0 ease-in duration-300" />
            </Link>
            <Link
              href={"/#blogs"}
              className="absolute w-[6%] h-[6%] top-[69.5%] left-[31.25%] transform translate-x-[-50%] translate-y-[-50%]"
            >
              <Book className="w-full h-full hover:opacity-0 ease-in duration-300" />
            </Link>
            <Link
              href={"/#footer"}
              className="absolute w-[4%] h-[4%] top-[72.5%] left-[14%] transform translate-x-[-50%] translate-y-[-50%]"
            >
              <Scale className="w-full h-full hover:opacity-0 ease-in duration-300" />
            </Link>
            <Link
              href={"/#about"}
              className="absolute w-[6%] h-[6%] top-[40.5%] left-[76.75%] transform translate-x-[-50%] translate-y-[-50%]"
            >
              <User className="w-full h-full hover:opacity-0 ease-in duration-300" />
            </Link>
            <Link
              href={`mailto:${props.contact}`}
              className="absolute w-[4%] h-[4%] top-[28%] left-[86.75%] transform translate-x-[-50%] translate-y-[-50%]"
            >
              <Mail className="w-full h-full hover:opacity-0 ease-in duration-300" />
            </Link>
          </div>
        </div>
      </div>
      <div className="self-end portrait:pb-8">
        <SplitText
          text={`Hey, I am ${props.name}`}
          className="text-2xl text-center text-white"
          delay={150}
          duration={0.5}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={-40}
          rootMargin="-50px"
          textAlign="center"
          onLetterAnimationComplete={startAnimation}
        />
      </div>
    </div>
  );
}
