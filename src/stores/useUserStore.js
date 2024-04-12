import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { request } from "@/api/api";
import { wss } from "@/api/wss";

export const useUserStore = defineStore("user", () => {
  const user = ref(); // undefined user means it's a guest
  const token = ref(null);
  const socket = ref();
 const isAuthenticated = ref(false);

  onMounted(async () => {
    await getUser();

    if (!user.value) {
      console.log("No user for socket");
      return;
    }

    socket.value = wss(`Bearer `);

    socket.value.on("message", (payload) => {
      if (payload.type === "User") {
        user.value = payload.data;
      }
    });
  });

  const getUser = async () => { 
    if (!isAuthenticated.value) {
      console.log("!isAuthenticated");
      return;
    }

    token.value = await getAccessTokenSilently();

    const { data } = await request({
      path: "/auth/me",
      token: token.value,
    });
    user.value = data;
  };

  const completeRegistration = async ({
    nickname,
    acceptedTerms,
    affiliateCode,
    signupCode,
  }) => {
    token.value = await getAccessTokenSilently();

    const { data } = await request({
      method: "POST",
      path: "/auth/complete-registration",
      data: {
        nickname,
        acceptedTerms,
        affiliateCode,
        signupCode,
      },
      token: token.value,
    });
    user.value = data;
  };

  const completeVerification = async ({
    firstname,
    lastname,
    birthDate,
    occupation,
    country,
    city,
    postalCode,
  }) => {
    token.value = await getAccessTokenSilently();

    const { data } = await request({
      method: "POST",
      path: "/auth/complete-verification",
      data: {
        firstname,
        lastname,
        birthDate,
        occupation,
        country,
        city,
        postalCode,
      },
      token: token.value,
    });
    user.value = data;
  };

  return {
    user,
    getUser,
    completeRegistration,
    completeVerification,
  };
});
