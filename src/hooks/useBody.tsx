"use client";
import { useRef, useEffect, RefObject } from "react";

export function useBody(): RefObject<HTMLBodyElement | null> {
  const bodyRef = useRef<HTMLBodyElement | null>(null);

  useEffect(() => {
    bodyRef.current = document.body as HTMLBodyElement;
  }, []);

  return bodyRef;
}
