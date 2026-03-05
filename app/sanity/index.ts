import { createClient, defineQuery } from "next-sanity";

const client = createClient({
  projectId: process.env.PROJECTID,
  dataset: "production",
  apiVersion: "2022-02-26",
  useCdn: false,
});

interface personal {
  name: string;
  occupation: string;
  expertise: string;
  skills: string;
  custom: string;
  contact: string;
}

interface profile {
  url: string;
}

export interface blogwoheading {
  heading: string;
  subheading: string;
  headerURL: string;
}

interface blogs {
  heading: string;
  subheading: string;
  headerURL: string;
  Blog: string;
}

export async function personalInformation() {
  const query = defineQuery(
    `*[_type == "personal"]{name, occupation, expertise, skills, custom, contact}`,
  );
  const data: personal[] = await client.fetch(query);
  return data[0];
}

export async function profileImage() {
  const query = defineQuery(`*[_type == "personal"]{"url": image.asset->url}`);
  const data: profile[] = await client.fetch(query);
  return data[0];
}

export async function allBlogs() {
  const query = defineQuery(
    `*[_type == "Blogs"]{heading, "headerURL": header.asset->url , subheading}`,
  );
  const data: blogwoheading[] = await client.fetch(query);
  return data;
}

export async function BlogByHeading(heading: string) {
  const query = defineQuery(
    `*[_type == "Blogs" && heading == "${heading}"]{heading, "headerURL": header.asset->url , subheading, Blog}`,
  );
  const data: blogs[] = await client.fetch(query);
  return data[0];
}
