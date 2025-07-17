import axios from "axios";

const agent = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

agent.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { status } = error.response;
    if (status === 404) {
      console.log("Not Found");
    }
    if (status === 500) {
      console.log("Server Error");
    }
    if (status === 401) {
      console.log("Unauthorized");
    }
    if (status === 400) {
      console.log("Bad Request");
    }
    if (status === 403) {
      console.log("Forbidden");
    }
    if (status === 409) {
      console.log("Conflict");
    }

    throw error;
  }
);





export default agent;