import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useBody } from "@/hooks/useBody";
// import { anchorLinks } from "@/consts/anchorLinks";
// import { onAnchorClick } from "@/utils/anchorHelper";

export default function Burger() {
  const { locale } = useParams<{ locale: string }>();
  const t = useTranslations("Burger");
  const bodyRef = useBody();

  function onBurgerClick(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;

    if (target.classList.contains("burger__close")) {
      target
        .closest(".burger")
        ?.querySelector(".burger__lang")
        ?.classList.remove("active");

      bodyRef.current?.classList.remove("js-burger-active");
    }

    if (target.classList.contains("burger__lang-trigger")) {
      target.closest(".burger__lang")?.classList.toggle("active");
    }

    if (target.classList.contains("burger__lang-link")) {
      target.closest(".burger__lang")?.classList.remove("active");
    }
  }

  // function onBurgerAnchorClick(event: React.MouseEvent<HTMLAnchorElement>) {
  //   bodyRef.current?.classList.remove("js-burger-active");

  //   onAnchorClick(event);
  // }

  return (
    <div className="burger" onClick={onBurgerClick}>
      <div className="burger__header content-wrapper">
        <h2 className="burger__title">Borscht agency</h2>

        <button type="button" className="burger__close"></button>
      </div>

      <div className="burger__lang content-wrapper">
        <div className="burger__lang-trigger fl">
          {locale === "en" ? t("burger_lang_en") : t("burger_lang_uk")}
        </div>
        <div className="burger__lang-list">
          <Link
            className={
              "burger__lang-link " + (locale === "en" ? "current" : "")
            }
            href="/"
            locale="en"
          >
            {t("burger_lang_en")}
          </Link>
          <Link
            className={
              "burger__lang-link " + (locale === "uk" ? "current" : "")
            }
            href="/"
            locale="uk"
          >
            {t("burger_lang_uk")}
          </Link>
        </div>
      </div>

      {/* <div className="burger__info">
        <ul className="burger__info-list content-wrapper">
          {anchorLinks.map((anchor) => {
            return (
              <li className="burger__info-item" key={anchor.key}>
                <Link
                  href={anchor.link}
                  className="burger__info-link"
                  onClick={onBurgerAnchorClick}
                >
                  {t(anchor.key)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div> */}

      <div className="burger__social">
        <div className="content-wrapper">
          <span className="burger__social-title">
            {t("burger_social_title")}
          </span>

          <ul className="burger__social-list fl">
            <li className="burger__social-item">
              <Link href="#" className="burger__social-link linkedin"></Link>
            </li>

            <li className="burger__social-item">
              <Link href="#" className="burger__social-link instagram"></Link>
            </li>

            <li className="burger__social-item">
              <Link href="#" className="burger__social-link telegram"></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
