
/**
 * Check if a request was successful
 */
export function requestWasSuccessful(responseData: any) {
	if(!responseData || !responseData.messages) {
		return false;
	}
	
	for(const message of responseData.messages) {
		if(message.error || message.type === "error") {
			return false;
		}
	}
	
	return true;
}
