import { personalInformation, profileImage, allBlogs } from "./sanity";
import Homepage from "./home";
import About from "./about";
import Blogs from "./blogs";
import Footer from "./footer";

export async function generateMetadata() {
  const bio = await personalInformation();
  const photo = await profileImage();

  return {
    title: `${bio.name} Portfolio`,
    description: `The ${bio.expertise} you are looking for`,
    openGraph: {
      images: [{ url: photo.url, secureUrl: photo.url }],
    },
    twitter: {
      images: [{ url: photo.url, secureUrl: photo.url }],
    },
  };
}

export default async function Page() {
  const bio = await personalInformation();
  const photo = await profileImage();
  const blogdata = await allBlogs();
  return (
    <main className="flex flex-col pl-8 pr-8 portrait:pl-4 portrait:pr-8">
      <Homepage name={bio.name} contact={bio.contact} />
      <About
        name={bio.name}
        occupation={bio.expertise}
        status={bio.occupation}
        expertise={bio.skills}
        custom={bio.custom}
        url={photo.url}
      ></About>
      <Blogs blogdata={blogdata} />
      <Footer name={bio.name} />
    </main>
  );
}
