import React from "react";
import "../globals.css";
import Header from "@/components/Header";
import TagList from "@/components/TagList";
import ProjectList from "@/components/ProjectList";
import { TagProvider } from "@/components/utils/useTags";
import { ProjectProvider } from "@/components/utils/useProjects";
import { CurrentTagProvider } from "@/components/utils/CurrentTagContext";
import { getTag, getProjects } from "../../sanity/sanity-util";
import Layout from "@/components/transition/PageTransition";
export default async function Work() {
  const tagData = await getTag();
  const projectsData = await getProjects();

  return (
    <Layout>
    <CurrentTagProvider>
      <ProjectProvider initialData={projectsData}>
        <TagProvider initialData={tagData}>
          <div>
            <Header />
            <main>
              <TagList />
              <ProjectList />
            </main>
          </div>
        </TagProvider>
      </ProjectProvider>
    </CurrentTagProvider>
    </Layout>
  );
}
