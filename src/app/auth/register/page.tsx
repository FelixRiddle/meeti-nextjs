"use server";

import RegisterFrontend from "./RegisterFrontend";

/**
 * Register
 */
export default async function Register() {
	
	return (
		<div>
			<main className="contenedor contenedor-formularios">
				<h1>Register</h1>
				
				<RegisterFrontend />
			</main>
		</div>
	);
}
