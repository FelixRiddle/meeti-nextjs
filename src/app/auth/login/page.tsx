"use server"

import { notAuthenticated } from "@/lib/auth/authenticate";
import LoginFrontend from "./LoginFrontend";

/**
 * Login
 */
export default async function LoginPage() {
	notAuthenticated();
	
	return (
		<div>
			<LoginFrontend />
		</div>
	);
}
