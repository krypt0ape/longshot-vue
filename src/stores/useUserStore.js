import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import useApiRequest from "@/composables/useApiRequest";
import { wss } from "@/api/wss";
import { GET_USER, SIGNIN, UPDATE_USER } from "@/api/user";

export default defineStore("user", () => {
	const user = ref(null); // undefined user means it's a guest
	const socket = ref();

	const request = useApiRequest();

	//   onMounted(async () => {
	// User if got from PageInitialStateLoader  not needed here
	//     await getUser();

	//     if (!user.value) {
	//       console.log("No user for socket");
	//       return;
	//     }

	//     socket.value = wss(`Bearer `);

	//     socket.value.on("message", (payload) => {
	//       if (payload.type === "User") {
	//         user.value = payload.data;
	//       }
	//     });
	//   });

	const getUser = async () => {
		const {data} = await request(GET_USER());
		user.value = data;
	};

	const updateUser = async (updateData) => {
		const req = await request(UPDATE_USER(updateData));
		user.value = data;
	};

	const signin = async ({ identifier, password }) => {
		const { data } = await request(SIGNIN({ identifier, password }));
		user.value = data;
	};

	const signout = async () => { 
		user.value = null;
	}

	// const completeRegistration = async ({
	// 	nickname,
	// 	acceptedTerms,
	// 	affiliateCode,
	// 	signupCode,
	// }) => {
	// 	token.value = await getAccessTokenSilently();

	// 	const { data } = await request({
	// 		method: "POST",
	// 		path: "/auth/complete-registration",
	// 		data: {
	// 			nickname,
	// 			acceptedTerms,
	// 			affiliateCode,
	// 			signupCode,
	// 		},
	// 		token: token.value,
	// 	});
	// 	user.value = data;
	// };

	// const completeVerification = async ({
	// 	firstname,
	// 	lastname,
	// 	birthDate,
	// 	occupation,
	// 	country,
	// 	city,
	// 	postalCode,
	// }) => {
	// 	token.value = await getAccessTokenSilently();

	// 	const { data } = await request({
	// 		method: "POST",
	// 		path: "/auth/complete-verification",
	// 		data: {
	// 			firstname,
	// 			lastname,
	// 			birthDate,
	// 			occupation,
	// 			country,
	// 			city,
	// 			postalCode,
	// 		},
	// 		token: token.value,
	// 	});
	// 	user.value = data;
	// };

	return {
		user,
		getUser,
		updateUser,
		signin,
		signout
	};
});
