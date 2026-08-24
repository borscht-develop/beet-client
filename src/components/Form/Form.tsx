import { FormEvent, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useBody } from "@/hooks/useBody";

export default function Form() {
  const [formData, setFormData] = useState({});
  const t = useTranslations("Form");
  const bodyRef = useBody();

  useEffect(() => {
    bodyRef.current?.addEventListener("click", handleBodyClick);
  }, []);

  function handleBodyClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (
      target.classList.contains("layout") ||
      target.classList.contains("form__close")
    ) {
      bodyRef.current?.classList.remove("js-form-active");
    }
  }

  async function onFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(formData);
  }

  function onInputChange(event: FormEvent<HTMLInputElement>): void {
    const target = event.target as HTMLInputElement;
    const id = target.id;
    const currentInputState: Record<string, string> = {};

    currentInputState[id] = target.value;

    setFormData({ ...formData, ...currentInputState });
  }

  return (
    <>
      <form className="form" onSubmit={onFormSubmit}>
        <div className="form__close"></div>

        <div className="form__header">
          <h2 className="form__title">{t("form_title")}</h2>
        </div>

        <div className="form__field-wrapper fl">
          <label htmlFor="name" className="form__label">
            {t("form_name")}
          </label>

          <input
            id="name"
            className="form__input"
            autoComplete="off"
            placeholder={t("form_name_placeholder")}
            onInput={onInputChange}
          />
        </div>

        <div className="form__field-wrapper fl">
          <label htmlFor="email" className="form__label">
            {t("form_email")}
          </label>

          <input
            id="email"
            className="form__input"
            autoComplete="off"
            placeholder={t("form_email_placeholder")}
            onInput={onInputChange}
          />
        </div>

        <button type="submit" className="form__submit">
          {t("form_submit")}
        </button>
      </form>

      <div className="layout"></div>
    </>
  );
}
