const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="15" fill="#121714"/>
  <rect x="1" y="1" width="62" height="62" rx="14" fill="none" stroke="#ffffff" stroke-opacity="0.08"/>
  <text
    x="50%"
    y="52%"
    dominant-baseline="middle"
    text-anchor="middle"
    font-family="Manrope, Arial, sans-serif"
    font-size="31"
    font-weight="750"
    letter-spacing="-2.5"
    fill="#e7e5e4"
  >Sn</text>
</svg>
`;

export function setFavicon() {
  const favicon = document.querySelector<HTMLLinkElement>(
    'link[rel="icon"]'
  ) ?? document.createElement("link");

  favicon.rel = "icon";
  favicon.type = "image/svg+xml";
  favicon.href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(faviconSvg)}`;

  if (!favicon.parentNode) {
    document.head.appendChild(favicon);
  }
}