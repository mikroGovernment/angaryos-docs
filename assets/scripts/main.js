var options = {
  target: target,
  title: title,
  layout: layout,
  editLinkBase: editLinkBase,
  editLinkText: editLinkTextTr,
  router: { mode: 'history' },
  detectSystemDarkTheme: true,
  darkThemeToggler: true,
  //sourcePath: 'http://localhost:8000/',
  
  highlight: ['typescript', 'bash', 'json', 'markdown'],

  nav: nav,
  sidebar: sidebarTr,
  overrides: languageSelect,
  versions: versions,
  plugins: plugins,

  footer: footer,
  banner: banner
};

new Docute(options);