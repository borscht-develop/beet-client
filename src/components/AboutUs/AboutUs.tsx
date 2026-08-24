import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("AboutUs");

  return (
    <section id="about" className="about-us section-parent">
      <div className="content-wrapper">
        <h2 className="about-us__title section-title">{t("about_title")}</h2>

        <p className="about-us__content section-text">{t("about_content_1")}</p>
        <p className="about-us__content section-text">{t("about_content_2")}</p>
        <p className="about-us__content section-text">{t("about_content_3")}</p>
        <p className="about-us__content section-text">{t("about_content_4")}</p>
      </div>
    </section>
  );
}
