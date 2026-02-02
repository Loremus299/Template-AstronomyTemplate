import { Heart } from "lucide-react";
import Link from "next/link";
export default function Footer(props: { name: string }) {
  return (
    <div className="min-h-[50vh] flex flex-col pt-16 pb-8" id="footer">
      <div className="flex">
        <p>
          <strong>Made With</strong>
        </p>
        <Heart className="ml-2" />
      </div>
      All the content on this website is subject to copyright and owned by{" "}
      {props.name}.
      <div className="mt-auto">
        <Link
          href={"https://www.loremus.gay"}
          className="underline underline-offset-4"
        >
          Template by Loremus
        </Link>
      </div>
    </div>
  );
}
