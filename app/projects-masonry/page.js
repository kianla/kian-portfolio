import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";

import dynamic from "next/dynamic";
const ProjectMasonryIsotop = dynamic(
  () => import("@/components/ProjectMasonryIsotop"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Projects Masonry",
};

const ProjectMasonry = () => {
  return (
    <NoxfolioLayout>
      <PageBanner pageName={"Project Masonry"} />
      <section className="projects-masonry-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <ProjectMasonryIsotop />
         
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
    </NoxfolioLayout>
  );
};
export default ProjectMasonry;
