import { v4 as uuidv4 } from "uuid";

import Message from "@/types/Message";

/**
 * Messages
 */
export default function Messages({
	messages
}: {
	messages: Array<Message>,
}) {
	return (
		<div>
			{messages.map((msg) => {
				return (
					<div className="alertas" key={uuidv4()}>
						<p className={`alerta ${msg.type || "error"}`}>{msg.message}</p>
					</div>
				);
			})}
		</div>
	);
}
