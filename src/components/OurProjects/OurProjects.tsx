import { useTranslations } from "next-intl";

export default function OurProjects() {
  const t = useTranslations("OurProjects");

  return (
    <section id="projects" className="our-projects section-parent">
      <div className="content-wrapper">
        <h2 className="our-projects__title section-title">
          {t("projects_title")}
        </h2>

        <p className="our-projects__content">{t("projects_content")}</p>
      </div>
    </section>
  );
}
