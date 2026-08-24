"use client";
import { useEffect } from "react";
import { useBody } from "@/hooks/useBody";

export default function GlobalClientComponent() {
  const bodyRef = useBody();

  useEffect(() => {
    const bodyElement = bodyRef.current;

    bodyElement?.addEventListener("click", handleBodyClick);

    return () => {
      bodyElement?.removeEventListener("click", handleBodyClick);
    };
  }, []);

  function handleBodyClick(event: MouseEvent) {
    const target = event.target as HTMLElement | null;

    if (!target) return;

    const activeDropdown = document.querySelector(
      ".header__settings-lang.active"
    );

    if (activeDropdown && target.closest(".header__settings-lang")) return;

    activeDropdown?.classList.remove("active");
  }

  return null;
}
