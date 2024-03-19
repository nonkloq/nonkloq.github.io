import Navbar from "@/components/navbar";
import { getAllExperiences } from '@/lib/loadmd';


// Home Page JSX
import HomePage from "@/components/homepage";
import ExperienceArray from "@/components/_homepage/expviewer";
import About from "@/components/_homepage/about";
import Skills from "@/components/_homepage/skills";
import Contact from "@/components/_homepage/contact";
import Socials from "@/components/_homepage/socials";


import { SocialLinks } from "@/types";
import scJson from "@/../_content/socials.json";
import Intro from "@/components/_homepage/intro";
import { DelayedSuspense } from "@/components/delayedsus";

export default function Home() {
  
  const exparr = getAllExperiences();
  const sociallinks: SocialLinks[] = scJson;
    
  return (
    <main>
      <DelayedSuspense delay={0}>
      <Navbar to_path="/projects" name="Projects"></Navbar>
      <HomePage
      sections={
        {
          "home": <Intro/>,
          "about": <About/>,
          "skills": <Skills/>,
          "experience": <ExperienceArray exparr={exparr}/>,
          "contact": <Contact/>,
        }
        }
      ></HomePage>
      <Socials socials={sociallinks}></Socials>
      </DelayedSuspense>
    </main>
  );
}
