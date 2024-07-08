import { authenticate } from "@/lib/auth/authenticate";
import EditUserProfileFrontend from "./EditUserProfileFrontend";
import { redirect } from "next/navigation";

/**
 * Edit user profile
 */
export default async function EditUserProfile() {
	
	// The third time it's called down the layout calls
	const user = authenticate();
	
	if(!user) {
		redirect("/auth/login");
	}
	
	return (
		<div>
			<EditUserProfileFrontend
				user={user}
			/>
		</div>
	)
}
