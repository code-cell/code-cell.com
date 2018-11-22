$(document).foundation()

cookieconsent.initialise({
  content: {
    header: 'Cookies usadas en ésta pagina!',
    message: 'Este sitio web utiliza cookies para que usted tenga la mejor experiencia de usuario. Si continúa navegando está dando su consentimiento para la aceptación de las mencionadas cookies y la aceptación de nuestra política de cookies.',
    dismiss: 'Entendido!',
    link: 'Más información',
    href: 'https://www.code-cell.com/politica-cookies',
    close: '&#x274c;',
    policy: 'Política de cookies',
    target: '_blank',
  },
  palette:{
    popup: {background: "#fff"},
    button: {background: "#aa0000"},
  },
  type: 'info',
  law: {
    regionalLaw: false,
  },
  location: true,
});
