/** @format */

const EMAIL_REGEXP =
	/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export function validateEmail(value:string):boolean {
	return EMAIL_REGEXP.test(value);
}

const PASSWORD_REGEXP = /^[A-Za-z]\w{7,14}$/;

export function validatePassword(value: string): boolean {
	return PASSWORD_REGEXP.test(value);
}