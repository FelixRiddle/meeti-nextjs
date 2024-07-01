import apiUrl from "@/lib/config/apiUrl";
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
                
				{/* Styles */}
				<link rel="stylesheet" href={`${apiUrl()}/public/css/app.css`} />
				<link rel="stylesheet" href={`${apiUrl()}/public/css/font-sizes.css`} />
				<link rel="stylesheet" href={`${apiUrl()}/public/css/normalize.css`} />
				
				{/* Font */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Staatliches&display=swap"
					rel="stylesheet"
				/>
				
                <title>Meeti Nextjs</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
