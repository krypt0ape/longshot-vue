import snsWebSdk from "@sumsub/websdk";
import useApi from "./useApi";

export default function useKyc() {

  /**
   * @param accessToken - access token that you generated on the backend in Step 2
   * @param applicantEmail - applicant email (not required)
   * @param applicantPhone - applicant phone, if available (not required)
   * @param customI18nMessages - customized locale messages for current session (not required)
   */
  const launchWebSdk = (
    accessToken,
    applicantEmail = null,
    applicantPhone = null
  ) => {
    const snsWebSdkInstance = snsWebSdk
      .init(
        accessToken,
        // token update callback, must return Promise
        // Access token expired
        // get a new one and pass it to the callback to re-initiate the WebSDK
        () => this.getNewAccessToken()
      )
      .withConf({
        lang: "en", //language of WebSDK texts and comments (ISO 639-1 format)
        email: applicantEmail,
        phone: applicantPhone,
        theme: "dark" | "light",
      })
      .withOptions({ addViewportTag: false, adaptIframeHeight: true })
      // see below what kind of messages WebSDK generates
      .on("idCheck.onStepCompleted", (payload) => {
        console.log("onStepCompleted", payload);
      })
      .on("idCheck.onError", (error) => {
        console.log("onError", error);
      })
      .build();

    // you are ready to go:
    // just launch the WebSDK by providing the container element for it
    snsWebSdkInstance.launch("#sumsub-websdk-container");
  };

  const getNewAccessToken = async () => {
    const { data, refetch } = useApi("post", "/kyc/get-access-token");

    await refetch();
    const { token } = data;
    console.log(data);
    return token;
  };

  const start = async () => {
    const accessToken = await getNewAccessToken();
    launchWebSdk(accessToken);
  };

  return {
    start,
  };
}
