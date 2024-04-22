import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import useApiRequest from "@/composables/useApiRequest";
import { wss } from "@/api/wss";
import { GET_USER, SIGNIN, UPDATE_USER, SIGNOUT, SIGNUP } from "@/api/user";

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
		setUser(data);
	};

	const setUser = (data) => {
		user.value = data;
	}

	const updateUser = async (updateData) => {
		const req  = await request(UPDATE_USER(updateData));
		setUser(req.data);
	};

	const signin = async ({ identifier, password }) => {
		const req = await request(SIGNIN({ identifier, password }));
		user.value = req.data;
	};

	const signout = async () => { 
		 await request(SIGNOUT());
		 user.value = null;
	}

	const signup = async (form) => {
		const req = await request(SIGNUP(form));
		user.value = req.data;
	};

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
		setUser,
		updateUser,
		signin,
		signout,
		signup	
	};
});
