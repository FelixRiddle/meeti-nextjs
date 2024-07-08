"use client";

import Messages from "@/components/Messages";
import Message from "@/types/Message";
import { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

/**
 * When trying to obtain a resource failed
 */
export default function ResourceFailed({
	messages,
	redirectTo = "/user/admin",
}: {
	messages: Array<Message>,
	redirectTo?: string;
}) {
	useEffect(() => {
		setTimeout(() => {
			location.href = redirectTo;
		}, 5000);
	}, []);
	
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
