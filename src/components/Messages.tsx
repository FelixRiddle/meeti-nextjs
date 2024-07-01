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
					<div className="alertas" key={msg.message}>
						<p className={`alerta ${msg.type || "error"}`}>{msg.message}</p>
					</div>
				);
			})}
		</div>
	);
}
