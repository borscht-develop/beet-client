import { useTranslations } from "next-intl";

export default function OurServices() {
  const t = useTranslations("OurServices");

  return (
    <section id="services" className="our-services section-parent">
      <div className="content-wrapper">
        <h2 className="our-services__title section-title">
          {t("services_title")}
        </h2>

        <p className="our-services__content">{t("services_content")}</p>
      </div>
    </section>
  );
}
