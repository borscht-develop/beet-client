export function onAnchorClick(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();

  const targetLink = event.target as HTMLLinkElement;
  const anchorId = targetLink.getAttribute("href") || "";
  const element = document.getElementById(anchorId);
  const elementPosition = element?.offsetTop;

  if (!elementPosition) {
    return;
  }

  window.scrollTo({
    top: elementPosition,
    behavior: "smooth",
  });
}
