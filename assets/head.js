/* ============================================================
   ADP — shared <head>
   Every page includes only:  <script src="assets/head.js"></script>
   Change a font or a stylesheet here and it changes everywhere.
   NOTE: this script must stay a plain, blocking <script> in <head>
   (no defer / async), because it writes tags into the document.
   ============================================================ */
(function () {
  document.write(
    '<link rel="preconnect" href="https://fonts.googleapis.com">' +
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?' +
      'family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800' +
      '&family=IBM+Plex+Mono:wght@400;500;600' +
      '&family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap">' +
    '<link rel="icon" type="image/svg+xml" href="assets/img/favicon.svg">' +
    '<meta name="theme-color" content="#0B1B33">' +
    '<script src="https://cdn.tailwindcss.com?plugins=forms,typography"><\/script>' +
    '<script src="assets/tailwind.config.js"><\/script>' +
    '<link rel="stylesheet" href="assets/styles.css">'
  );
})();
