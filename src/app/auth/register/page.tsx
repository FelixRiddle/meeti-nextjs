"use server";

import { notAuthenticated } from "@/lib/auth/authenticate";
import RegisterFrontend from "./RegisterFrontend";

/**
 * Register
 */
export default async function Register() {
	notAuthenticated();
	
	return (
		<div>
			<RegisterFrontend />
		</div>
	);
}
