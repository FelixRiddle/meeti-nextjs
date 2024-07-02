import apiUrl from "@/lib/config/apiUrl";
import "./globals.css";
import { authenticate } from "@/lib/auth/authenticate";

/**
 * Root layout
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
	const url = apiUrl();
	const user = authenticate();
	
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
				{/* Styles */}
				<link rel="stylesheet" href={`${url}/public/css/app.css`} />
				<link rel="stylesheet" href={`${url}/public/css/font-sizes.css`} />
				<link rel="stylesheet" href={`${url}/public/css/normalize.css`} />
				<link rel="stylesheet" href={`${url}/public/css/powered-by.css`} />
				
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
				<header className="site-header contenedor">
					<a href="/">
						<img src={`${url}/public/img/logo.png`} alt="Meeti Logo" />
					
						{/* Powered by */}
						<div className="website-powered-by">
							<p>
								Powered by
							</p>
							<p className="framework-nextjs">
								NextJS
							</p>
						</div>
					</a>
					
					{!user && (
						<nav className="nav">
							<a href="#">Create group</a>
							<a href="/auth/login">Login</a>
							<a href="/auth/register">Register</a>
						</nav>
					) || (
						<nav className="nav">
							<a href="/user/admin">Admin</a>
						</nav>
					)}
				</header>
				
                {children}
				
				<footer className="site-footer contenedor">
					{!user && (
						<nav className="nav">
							<a href="#">Create group</a>
							<a href="/auth/login">Login</a>
							<a href="/auth/register">Register</a>
						</nav>
					) || (
						<nav className="nav">
							<a href="/user/admin">Admin</a>
						</nav>
					)}
					
					<div className="copyright">All rights reserved Meeti 2024 &copy;</div>
				</footer>
            </body>
        </html>
    );
}
