export default {
  repository: 'https://github.com/rafaelesantos/eprimora',
  titleSuffix: ' | Eprimora',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Eprimora</span>
      <span className="text-gray-600 font-normal hidden md:inline">
      Aprimorando seu Consumo de Energia
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Eprimora | Aprimorando seu Consumo de Energia" />
      <meta name="og:description" content="Eprimora | Aprimorando seu Consumo de Energia" />
      <meta name="og:title" content="Eprimora | Aprimorando seu Consumo de Energia" />
      <meta name="og:image" content="https://eprimora.rafaelescaleira.com.br/apple-icon-180x180.png" />
      <meta name="apple-mobile-web-app-title" content="Eprimora" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: false,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: <>Copyright © {new Date().getFullYear()} Eprimora by Rafael Escaleira.</>
}