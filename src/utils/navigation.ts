// An array of links for navigation bar
const navBarLinks = [
  { name: "Início", url: "/" },
  { name: "Produtos", url: "/products" },
  { name: "Serviços", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Fale conosco", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecossistema",
    links: [
      { name: "Termos de Privacidade", url: "/welcome-to-docs/" },
      { name: "Nossos produtos", url: "/products" },
      { name: "Nossos serviços", url: "/services" },
    ],
  },
  {
    section: "Sobre a Enchantè Digital",
    links: [
      { name: "Sobre Nós", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Carreiras", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/enchantedigital",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
