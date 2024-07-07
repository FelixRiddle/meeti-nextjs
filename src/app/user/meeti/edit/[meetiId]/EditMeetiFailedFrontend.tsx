"use client";

import Messages from "@/components/Messages";
import Message from "@/types/Message";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

/**
 * When editing a meeti failed, although it can be used anywhere
 */
export default function EditMeetiFailedFrontend({
	messages,
	redirectTo = "/user/admin",
}: {
	messages: Array<Message>,
	redirectTo?: string;
}) {
	setTimeout(() => {
		location.href = redirectTo;
	}, 5000);
	
	return (
		<div>
			{messages && (
				<Messages messages={messages} />
			)}
			
			<p>Redirecting in</p>
			
			<CountdownCircleTimer 
				isPlaying 
				duration={5} 
				colors={[ 
					['#004777', 0.33], 
					['#F7B801', 0.33], 
					['#A30000', 0.33], 
				]} 
			> 
				{({ remainingTime }) => remainingTime} 
			</CountdownCircleTimer> 
		</div>
	);
}
