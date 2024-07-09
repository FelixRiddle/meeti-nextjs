"use server";

import { User } from "@/types/User"
import LogoutButton from "./LogoutButton";

/**
 * User navbar
 */
export default async function Navbar({
	user,
}: {
	user: User | undefined
}) {
	return (
		<div>
			{!user && (
				<nav className="nav">
					<a href="#">Create group</a>
					<a href="/auth/login">Login</a>
					<a href="/auth/register">Register</a>
				</nav>
			) || (
				<nav className="nav">
					<a href="/user/admin">Admin</a>
					<a href="/user/profile">Profile</a>
					<LogoutButton />
				</nav>
			)}
		</div>
	)
}
