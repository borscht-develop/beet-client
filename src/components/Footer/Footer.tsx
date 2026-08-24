import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Header() {
  const t = useTranslations("Footer");

  return (
    <footer className="footer">
      <div className="content-wrapper footer__wrapper">
        <div className="footer__brand">
          <h2 className="footer__brand-title">Borscht agency</h2>

          <ul className="footer__social-list">
            <li className="footer__social-item">
              <Link href="#" className="footer__social-link linkedin"></Link>
            </li>

            <li className="footer__social-item">
              <Link href="#" className="footer__social-link instagram"></Link>
            </li>

            <li className="footer__social-item">
              <Link href="#" className="footer__social-link telegram"></Link>
            </li>
          </ul>
        </div>

        <div className="footer__contacts">
          <h2 className="footer__contacts-title">{t("footer_contacts")}</h2>

          <Link
            href="mailto:borscht@mail.com"
            className="footer__contacts-email"
          >
            borscht@mail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
