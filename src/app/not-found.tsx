"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const trollMsg = (path: string) => {
  if (path.startsWith("/onlyfans")) {
    return "Oh wow, you clicked that link with zero hesitation... Unfortunately, it's just bait. Time to reflect on your life choices.";
  }

  if (path === "/secret") {
    return "Shhh... this was supposed to be a secret! But now that you're here, welcome to nothingness.";
  }

  if (path.startsWith("/dei")) {
    return "Vanakamda mapla, ena intha pakko. tholanjitia ena? Keela irukura buttona click pani vituku poi seru.";
  }

  if (path.startsWith("/rot")) {
    return "Brain eating amoeba, pulled up a video, it's favorite water, Still Water, What do i do at those-who-know? Fucking still water. That night, sipping the fucking still water in the mango room by myself with it chilling. Why? i studied bro.";
  }

  return "Misled by someone? Or did you do this to yourself?";
};

export default function NotFoundPage() {
  const path = usePathname();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "justify",
      }}
    >
      <h2>404 - Page Not Found</h2>
      <h5 style={{ marginTop: "10px", color: "#929aaa", maxWidth: "80%" }}>
        {trollMsg(path)}
      </h5>
      <h3 style={{ marginTop: "10px" }}>
        Go back to{" "}
        <Link href="/" style={{ textDecoration: "none" }}>
          home
        </Link>
      </h3>
    </div>
  );
}
