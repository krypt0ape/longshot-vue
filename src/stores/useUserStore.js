import { defineStore } from "pinia";
import { ref } from "vue";
import { request } from "@/api/api";
import { useAuth0 } from "@auth0/auth0-vue";

export const useUserStore = defineStore("user", () => {
  const user = ref(); // undefined user means it's a guest
  const riskManagement = ref({});
  const token = ref(null);

  const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();

  const auth0Ready = async () => {
    setTimeout(async () => isLoading.value || (await auth0Ready()), 150);
  };

  const getUser = async () => {
    await auth0Ready();
    if (!isAuthenticated.value) {
      return;
    }

    token.value = await getAccessTokenSilently();

    const { data } = await request({
      path: "/auth/me",
      token: token.value,
    });
    user.value = data;
    riskManagement.value = data.userRiskManagement;
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
      path: "/auth/complete-signup",
      data: {
        nickname,
        acceptedTerms,
        affiliateCode,
        signupCode,
      },
      token: token.value,
    });
    user.value = data;
    riskManagement.value = data.userRiskManagement;
  };

  return {
    user,
    riskManagement,
    getUser,
    completeRegistration,
  };
});
