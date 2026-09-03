import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
// import { setRequestLocale } from "next-intl/server";
import GlobalClientComponent from "@/components/GlobalClientComponent/GlobalClientComponent";
import "@/styles/main.scss";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // setRequestLocale(locale);

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <GlobalClientComponent />
      </body>
    </html>
  );
}
