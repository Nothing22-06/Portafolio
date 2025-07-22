    import { notFound } from "next/navigation";
    import { projectsData } from "@/data/projectsData";
    import ProjectDetail from "@/components/ProjectDetail";
    interface PageProps {
        params: Promise<{ slug: string }>;
    }
    export default async function ProjectPage({ params }: PageProps) {
       const { slug } = await params;
        const project = projectsData.find((p) => p.id === slug);

        if (!project) {
            notFound();
        }

        return <ProjectDetail project={project} />;
    }

    export async function generateStaticParams() {
        return projectsData.map((project) => ({
            slug: project.id,
        }));
    }