import { getAllProjects } from "@/lib/projects";

export default function AllProjectsPage() {
  const projects = getAllProjects();
  console.log(projects);

  return (
    <div>
      <main>
        <h1 className="text-primary text-lg">All Projects Page</h1>
      </main>
    </div>
  );
}
