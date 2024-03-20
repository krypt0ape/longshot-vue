import axios from "axios";

const request = async ({ method = "GET", path, data, token }) => {
  const baseUrl = import.meta.env.VITE_API_URL;

  if (!path.startsWith("/")) {
    path = `/${path}`;
  }

  const { data: response } = await axios({
    method,
    url: `${baseUrl}${path}`,
    data,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  return response;
};

export { request };
