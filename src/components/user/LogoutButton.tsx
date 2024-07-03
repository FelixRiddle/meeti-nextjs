"use client";

import { logout } from "@/api/requestTypes";

/**
 * Logout button
 */
export default function LogoutButton() {
	/**
	 * Called when the user clicks logout button
	 */
	async function clickLogout(e: any) {
		await logout();
	}
	
	return (
		<a
			href="#"
			onClick={clickLogout}
		>Logout</a>
	);
}
