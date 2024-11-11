// An array of links for navigation bar
const navBarLinks = [
  { name: "Início", url: "/" },
  { name: "Produtos", url: "/products" },
  { name: "Serviços", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Fale Conosco", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecossistema",
    links: [
      { name: "Termos & Privacidade", url: "/welcome-to-docs/" },
      { name: "Nossos Produtos", url: "/products" },
      { name: "Nossos Serviços", url: "/services" },
    ],
  },
  {
    section: "Enchantè Digital",
    links: [
      { name: "Nossa História", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Carreiras", url: "#" },
      { name: "Avaliações", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
