import axios from "axios";
const url = 'localhost:8000/api/auth/login'


export const SC = {
	signIn
};

async function signIn(data) {
	console.log('data', data)
	try {
		const response = await axios.post(url, data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}