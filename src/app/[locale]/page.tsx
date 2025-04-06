"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <div>
        <Link href="/" locale="en">
          Switch to En
        </Link>
        <Link href="/" locale="uk">
          Switch to Uk
        </Link>
      </div>

      <h1>{t("title")}</h1>
      <p>{t("about")}</p>
    </div>
  );
}
