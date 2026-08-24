import { useTranslations } from "next-intl";
// import { useBody } from "@/hooks/useBody";

// TODO: uncomment convertion button after API become available
export default function Hero() {
  const t = useTranslations("Hero");
  // const bodyRef = useBody();

  // function onFormTriggerClick() {
  //   bodyRef.current?.classList.add("js-form-active");
  // }

  return (
    <section className="hero common-section">
      <div className="content-wrapper">
        <h1 className="hero__title fl-c-c">{t("hero_header")}</h1>

        <p className="hero__description">{t("hero_description")}</p>

        {/* <button
          className="hero__button"
          type="button"
          onClick={onFormTriggerClick}
        >
          {t("hero_conversion")}
        </button> */}
      </div>
    </section>
  );
}
