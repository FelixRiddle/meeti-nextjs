"use client";

import { User } from "@/types/User";
import EditProfile from "../EditProfile";

/**
 * Edit user profile
 */
export default function EditUserProfileFrontend({
	user
}: {
	user: User
}) {
	return (
		<main className="contenedor contenedor-formularios no-padding">
			<h1>Edit user profile</h1>
			
			<EditProfile
				user={user}
			/>
		</main>
	);
}

