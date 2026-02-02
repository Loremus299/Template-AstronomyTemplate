"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type blogwoheading } from "./sanity";
import Image from "next/image";
import Link from "next/link";
import AnimatedContent from "@/components/AnimatedContent";

export default function Blogs(props: { blogdata: blogwoheading[] }) {
  return (
    <div id={"blogs"} className="dark grid grid-cols-3 portrait:grid-cols-1">
      {props.blogdata.map((item) => (
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.3}
          key={item.heading}
          className="mb-4"
        >
          <Link href={`/blog/${item.heading}`}>
            <Card className="m-2 border-0 h-full">
              <CardHeader>
                <Image
                  src={item.headerURL}
                  width={1000}
                  height={1000}
                  alt={item.heading}
                  className="w-full rounded-2xl mb-2"
                ></Image>
                <CardTitle>{item.heading}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">{item.subheading}</p>
              </CardContent>
            </Card>
          </Link>
        </AnimatedContent>
      ))}
    </div>
  );
}
