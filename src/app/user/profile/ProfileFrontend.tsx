"use client";

import { editUserProfile } from "@/api/requestTypes";
import Messages from "@/components/Messages";
import apiUrl from "@/lib/config/apiUrl";
import { requestWasSuccessful } from "@/lib/status";
import { User } from "@/types/User";
import Script from "next/script";
import { useRef, useState } from "react";
import EditProfile from "./EditProfile";

/**
 * Profile frontend
 */
export default function ProfileFrontend({
	user
}: {
	user: User
}) {
	return (
		<main className="contenedor contenedor-formularios no-padding">
			<h1>Your profile</h1>
			
			<div className="contenedor-botones">
				<a href="/user/profile/edit" className="btn btn-rosa">Edit profile</a>
				<a href="/user/password/reset" className="btn btn-verde">Change password</a>
				<a href="/user/profile/image/edit" className="btn btn-amarillo">Change pfp</a>
			</div>
			
			<h3>Change profile information</h3>
			
			<EditProfile
				user={user}
				redirect={false}
			/>
		</main>
	);
}
