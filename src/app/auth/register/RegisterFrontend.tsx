"use client";

/**
 * Register frontend
 */
export default async function RegisterFrontend() {
	return (
		<div>
			<form
				method="POST"
				className="default-form"
			>
				<div className="campo">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" name="email" placeholder="Email" required />
				</div>
				
				<div className="campo">
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" placeholder="Name" required />
				</div>
				
				<div className="campo">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" placeholder="Password" required />
				</div>
				
				<div className="campo">
					<label htmlFor="confirmPassword">Confirm password</label>
					<input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm password" required />
				</div>
				
				<div className="campo">
					<input type="submit" value="Create account" className="btn btn-rosa" />
				</div>
			</form>
		</div>
	);
}

