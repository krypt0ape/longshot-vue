import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { request } from "@/api/api";
import { useAuth0 } from "@auth0/auth0-vue";
import { wss } from "@/api/wss";

export const useUserStore = defineStore("user", () => {
  const user = ref(); // undefined user means it's a guest
  const token = ref(null);
  const socket = ref();

  const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();

  const auth0Ready = async () => {
    if (!isLoading.value) {
      return true;
    }

    await new Promise((resolve) => setTimeout(resolve, 200));

    return await auth0Ready();
  };

  onMounted(async () => {
    await getUser();

    if (!user.value) {
      console.log("No user for socket");
      return;
    }

    socket.value = wss(`Bearer ${await getAccessTokenSilently()}`);

    socket.value.on("message", (payload) => {
      if (payload.type === "User") {
        user.value = payload.data;
      }
    });
  });

  const getUser = async () => {
    await auth0Ready();
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
