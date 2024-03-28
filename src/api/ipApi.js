import axios from "axios";

const request = async () => {
  const { data } = await axios({
    method: "GET",
    url: import.meta.env.VITE_IP_API_URL,
    params: { key: import.meta.env.VITE_IP_API_KEY },
  });

  return data;
};

export { request };
