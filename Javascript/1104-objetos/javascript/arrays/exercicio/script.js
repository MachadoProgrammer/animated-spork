const links = document.querySelectorAll("nav a");

links.forEach(function AtivarLink(link) {
  const href = link.href;
  const url = document.location.href;
  if (href === url) {
    link.style.backgroundColor = "black";
    link.style.color = "white";
    link.style.borderRadius = "5px";
    link.style.fontFmaily = "Arial";
    link.style.fontSize = "18px";
    link.style.textTransform = "uppercase";
  }
  console.log(href);
});
