"use client";
import Image from "next/image";
import FadeContent from "@/components/FadeContent";

export default function About(props: {
  name: string;
  occupation: string;
  status: string;
  expertise: string;
  custom: string;
  url: string;
}) {
  return (
    <div id="about" className="flex min-h-screen items-center justify-center">
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="flex h-min portrait:flex-col w-full">
          <div className="w-1/2 landscape:pr-16 portrait:pb-16 portrait:w-full rounded-full">
            <Image
              className="w-full rounded-full grayscale border-white border-2"
              src={props.url}
              alt="image"
              width={500}
              height={500}
            ></Image>
          </div>

          <div className="w-full portrait:w-full p-2 space-y-4 h-min place-self-start">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold mb-4">Who am I ?</h3>
              <p>
                I am {props.name}, a career {props.occupation} currently{" "}
                {props.status}.
              </p>
              <p>I have experience in {props.expertise}.</p>
              <p>{props.custom}.</p>
            </div>
          </div>
        </div>{" "}
      </FadeContent>
    </div>
  );
}
