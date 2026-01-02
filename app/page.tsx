import Icon from "@/components/icon";
import ProjectCardGrid from "@/components/project-card-grid";
import { ubuntu } from "@/lib/fonts";
import { getCommitCount } from "@/lib/github";
import { getFeaturedProject, getProjectsCount, getTechnologiesUsedCount } from "@/lib/projects";
import { CodeXml, icons } from "lucide-react";

export default async function HomePage() {
  const projects = getFeaturedProject();
  const totalProjectsCount = getProjectsCount();

  const stats_card_list = [
    { value: totalProjectsCount, title: "Completed Tasks" },
    { value: `${getTechnologiesUsedCount()}+`, title: "Tools Used" },
    { value: getCommitCount(), title: "Total Commits" },
  ];

  const features_card_list = [
    {
      icon: "CodeXml",
      title: "Optimized Code",
      description:
        "Well-structured and documented source code following best practices to ensure high readability and easier maintenance.",
    },
    {
      icon: "Layers",
      title: "Technical Stack",
      description:
        "Built using foundational web technologies including HTML, CSS, and PHP to provide a stable and consistent user experience.",
    },
    {
      icon: "CircleCheck",
      title: "Skill Validation",
      description:
        "Each assignment demonstrates a specific technical milestone, ranging from responsive layouts to functional data handling logic.",
    },
  ];

  return (
    <main>
      <section className="border-b border-border">
        <div className="section-container text-center">
          <div className="space-y-5">
            <div className="animate__animated animate__fadeIn text-accent-foreground bg-accent inline-flex justify-center items-center gap-1.5 py-2 px-3.5 text-sm rounded-full">
              <CodeXml className="size-5" />
              <p className={`${ubuntu.className} capitalize`}>web technology class</p>
            </div>
            <h1 className={`${ubuntu.className} page-title`}>Class Project Showcase</h1>
            <p className="section-description max-w-4xl mx-auto">
              A collection of projects I built during my Web Technology class. Each project shows what I learned through
              practice and assignments.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 max-w-2xl mx-auto mt-12">
            {stats_card_list.map((item, idx) => (
              <div
                key={idx}
                style={{ animationDelay: `${idx}00ms` }}
                className="animate__animated animate__fadeIn card p-2 md:p-4 text-center"
              >
                <div className="h-full flex-center flex-col">
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground mt-1 capitalize">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 border-b border-border">
        <div className="section-container grid sm:grid-cols-3 gap-4 lg:gap-6">
          {features_card_list.map((item, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx}00ms` }}
              className="animate__animated animate__fadeIn card p-4 gap-2 lg:gap-4 flex items-start flex-col lg:flex-row mx-auto w-full max-w-md sm:max-w-full"
            >
              <div className="bg-accent rounded-lg p-2.5">
                <Icon name={item.icon as keyof typeof icons} className="text-accent-foreground size-5" />
              </div>
              <div>
                <h3 className={`${ubuntu.className} md:text-lg mb-0.5`}>{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {projects.length > 0 ? (
        <section className="section-container">
          <div className="flex-between mb-10">
            <h2 className={`${ubuntu.className} section-title`}>Featured Projects</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              {totalProjectsCount > projects.length
                ? `${projects.length} of ${totalProjectsCount}`
                : totalProjectsCount.toString()}{" "}
              Projects
            </p>
          </div>
          <ProjectCardGrid projects={projects} />
        </section>
      ) : null}
    </main>
  );
}
