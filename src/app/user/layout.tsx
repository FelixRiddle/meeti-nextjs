"use server";

import { authenticate } from "@/lib/auth/authenticate";
import React from "react";

/**
 * Layout
 * 
 * Mainly to authenticate
 */
export default async function Layout({
	children
}: {
	children: React.ReactNode
}) {
	authenticate();
	
	return (
		<div>
			{children}
		</div>
	);
}

