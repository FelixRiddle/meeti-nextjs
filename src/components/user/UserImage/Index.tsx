import apiUrl from "@/lib/config/apiUrl";
import { User } from "@/types/User";

/**
 * User image
 */
export default function UserImage({
	user,
}: {
	user: User;
}) {
	const url = apiUrl();
	
	return (
		<img
			src={`${url}/public/user/${user.id}/${user.pfp}`}
			alt="Group image"
			width="400"
		/>
	)
}
