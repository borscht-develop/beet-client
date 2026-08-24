import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useBody } from "@/hooks/useBody";
// import { anchorLinks } from "@/consts/anchorLinks";
// import { onAnchorClick } from "@/utils/anchorHelper";
import logo from "@/images/logo.png";

export default function Header() {
  const t = useTranslations("Header");
  const { locale } = useParams<{ locale: string }>();
  const bodyRef = useBody();

  function onBurgerClick() {
    bodyRef.current?.classList.add("js-burger-active");
  }

  function onLangClick(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;

    if (target.classList.contains("lang-trigger")) {
      target.closest(".header__settings-lang")?.classList.toggle("active");
    }
  }

  return (
    <header className="header">
      <div className="content-wrapper header__wrapper fl-a-c">
        <div className="header__logo">
          <Image src={logo} alt={t("header_logo")} width={30} height={40} />
        </div>

        {/* <ul className="header__block-list">
          {anchorLinks.map((anchor) => {
            return (
              <li className="header__block-item" key={anchor.key}>
                <Link
                  href={anchor.link}
                  className="header__block-link"
                  onClick={onAnchorClick}
                >
                  {t(anchor.key)}
                </Link>
              </li>
            );
          })}
        </ul> */}

        <div className="header__settings">
          <div
            className="header__settings-lang fl-a-c g-8"
            onClick={onLangClick}
          >
            <div className="header__settings-current__lang lang-trigger fl-c-c">
              {locale === "en" ? t("header_en_locale") : t("header_uk_locale")}
            </div>
            <div className="header__settings-lang__list fl">
              <Link
                className={
                  "header__settings-link " + (locale === "en" ? "current" : "")
                }
                href="/"
                locale="en"
              >
                {t("header_en_locale")}
              </Link>
              <Link
                className={
                  "header__settings-link " + (locale === "uk" ? "current" : "")
                }
                href="/"
                locale="uk"
              >
                {t("header_uk_locale")}
              </Link>
            </div>
          </div>
        </div>

        <div className="header__burger">
          <button
            className="header__burger-button"
            type="button"
            onClick={onBurgerClick}
          ></button>
        </div>
      </div>
    </header>
  );
}
