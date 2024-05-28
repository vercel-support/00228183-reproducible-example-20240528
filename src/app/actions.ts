'use server'

import { _getUser } from '@/server-actions';

export async function signInWithPassword({
	email,
	password
}: {
	email: string;
	password: string;
}): Promise<any> {
	try {
    console.log("Starting async function 1");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Completed async function 1");
		const user = await getUser();
		return user;
	} catch (error) {
		console.error('error', { error });
		return { error};
	}
}


export async function getUser(): Promise<any> {
	return await _getUser();
}