import { PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kayxo</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/toggle.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (localStorage.getItem('dark-mode') === 'true' || 
                (!localStorage.getItem('dark-mode') && 
                window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          `,
          }}
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
