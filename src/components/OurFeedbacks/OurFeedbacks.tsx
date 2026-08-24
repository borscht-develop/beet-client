import { useTranslations } from "next-intl";

export default function OurFeedbacks() {
  const t = useTranslations("OurFeedbacks");

  return (
    <section id="feedbacks" className="feedbacks section-parent">
      <div className="content-wrapper">
        <h2 className="feedbacks__title section-title">
          {t("feedbacks_title")}
        </h2>

        <p className="feedbacks__content">{t("feedbacks_content")}</p>
      </div>
    </section>
  );
}
