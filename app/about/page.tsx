import type { Metadata } from "next";
import Icon from "@/components/icon";
import InfoSectionCard from "@/components/info-section-card";
import { ubuntu } from "@/lib/fonts";
import { ChevronRight, House, icons } from "lucide-react";
import Link from "next/link";

const key_features_list = [
  {
    icon: "FileText",
    title: "Project Documentation",
    description: "Clear explanations for every assignment, including code snippets and visual previews.",
  },
  {
    icon: "Terminal",
    title: "Source Code Viewer",
    description: "A simple way to browse and read the actual code files used to build each project.",
  },
  {
    icon: "Cpu",
    title: "Technology Breakdown",
    description: "A clear list of the specific tools and languages used for every task.",
  },
  {
    icon: "TrendingUp",
    title: "Growth Tracking",
    description: "Projects are organized to show how my skills improved with each new challenge.",
  },
];

const skills_list = [
  "HTML & Page Structure",
  "CSS & Visual Styling",
  "PHP & Server Logic",
  "JavaScript Functionality",
  "Modern Web Layouts",
  "Responsive Design",
  "Version Control (Git)",
];

const goals_list = [
  "Master fundamental web technologies (HTML, CSS, JavaScript)",
  "Build responsive and accessible user interfaces",
  "Learn how to organize code so it is clean and easy for others to read.",
  "Understand version control and collaborative workflows",
  "Apply UI/UX principles to create user-friendly designs",
  "Develop clean, maintainable, and well-documented code",
];

export const metadata: Metadata = {
  title: "About This Showcase",
  description:
    "An overview of the learning journey, technical skills, and goals achieved during the Web Technology course.",
};

export default function AboutPage() {
  return (
    <main className="section-container">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href={"/"} className="flex items-center gap-1 hover:text-foreground">
          <House className="size-3.5" /> Home
        </Link>
        <ChevronRight className="size-3.5" />
        <span className="text-foreground">About</span>
      </nav>

      <div className="space-y-4 max-w-3xl mb-10">
        <h1 className={`${ubuntu.className} page-title`}>About This Showcase</h1>
        <p className="section-description">
          This website is a digital portfolio featuring projects completed during my Web Technology course. It serves as
          a practical record of my progress in learning how to build and design for the web.
        </p>
      </div>

      <div className="space-y-8 mb-8">
        <InfoSectionCard icon="BookOpen" title="Project Overview">
          <p className="text-muted-foreground leading-relaxed">
            This showcase acts as a personal gallery for my college assignments. It is designed to let visitors explore
            my code and view project previews in one place. The collection tracks my journey from basic page layouts to
            more functional web tools, showing a clear growth in my technical abilities.
          </p>
        </InfoSectionCard>

        <section>
          <h2 className="section-title mb-4">Key Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {key_features_list.map((item, idx) => (
              <div
                key={item.title}
                style={{ animationDelay: `${idx}00ms` }}
                className="animate__animated animate__fadeIn p-5 card hover:border-primary/20"
              >
                <div className="p-2.5 rounded-lg bg-muted w-fit mb-3">
                  <Icon name={item.icon as keyof typeof icons} className="size-5 text-primary" />
                </div>
                <h3 className="font-medium mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoSectionCard icon="Sparkles" title="Skill Demostrated">
          <div className="flex-center flex-wrap gap-x-2 gap-y-2.5">
            {skills_list.map((skill) => (
              <span key={skill} className="py-1 px-2.5 rounded-md text-sm bg-badge text-badge-foreground">
                {skill}
              </span>
            ))}
          </div>
        </InfoSectionCard>

        <InfoSectionCard icon="Target" title="Learning Goals">
          <ul className="space-y-2">
            {goals_list.map((goal, idx) => (
              <li key={idx} className="flex items-start gap-2 text-muted-foreground list-none">
                <ChevronRight className="size-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm">{goal}</span>
              </li>
            ))}
          </ul>
        </InfoSectionCard>
      </div>

      <div className="animate__animated animate__fadeIn p-4 rounded-xl bg-muted/50 border border-border text-center">
        <p className="text-sm text-muted-foreground">
          This is an academic project showcase created for educational purposes. All code is original work completed as
          part of course assignments.
        </p>
      </div>
    </main>
  );
}
