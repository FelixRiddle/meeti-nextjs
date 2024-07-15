
/**
 * Convert an object to form data
 */
export function objectToFormData(obj: any) {
	const formData = new FormData();
	
	for (const key in obj) {
		const value = obj[key];
		formData.append(key, obj[key] || "");
	}
	
	return formData;
}
