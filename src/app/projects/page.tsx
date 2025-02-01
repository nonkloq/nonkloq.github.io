import { DelayedSuspense } from "@/components/delayedsus";
import ProjectsPage from "@/components/pojectpage";
import { getAllPorjects } from "@/lib/loadmd";

export default function Page() {
  const projects = getAllPorjects();

  const uniqueTags = new Set<string>();
  projects.forEach((project) => {
    if (project.tags !== null) {
      project.tags = project.tags.map((tag) => tag.toUpperCase());
      project.tags.forEach((tag) => uniqueTags.add(tag));
    }
  });

  return (
    <DelayedSuspense>
      <ProjectsPage projects={projects} uniqueTags={uniqueTags}></ProjectsPage>
    </DelayedSuspense>
  );
}
