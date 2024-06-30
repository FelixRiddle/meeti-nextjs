import "./globals.css";

/**
 * Root layout
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                <title>Meeti Nextjs</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
