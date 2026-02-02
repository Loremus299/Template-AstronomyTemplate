import { BlogByHeading } from "@/app/sanity";
import { use } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogID: string }>;
}) {
  const param = await params;
  const title = decodeURIComponent(param.blogID);
  const blogdata = await BlogByHeading(title);
  return {
    title: `${blogdata.heading}`,
    description: `${blogdata.subheading}`,
    openGraph: {
      images: [{ url: blogdata.headerURL, secureUrl: blogdata.headerURL }],
    },
    twitter: {
      images: [{ url: blogdata.headerURL, secureUrl: blogdata.headerURL }],
    },
  };
}

export default function Page({
  params,
}: {
  params: Promise<{ blogID: string }>;
}) {
  const param = use(params);
  const title = decodeURIComponent(param.blogID);
  const blogdata = use(BlogByHeading(title));

  return (
    <main className="min-h-screen flex justify-center p-8">
      <div className="w-4xl">
        <Image
          src={blogdata.headerURL}
          width={500}
          height={500}
          alt={blogdata.heading}
          className="w-full rounded-2xl mb-4"
        ></Image>
        <h1 className="text-4xl">{blogdata.heading}</h1>
        <p className="text-neutral-500 mb-8">{blogdata.subheading}</p>
        <ReactMarkdown>{blogdata.Blog}</ReactMarkdown>
      </div>
    </main>
  );
}
