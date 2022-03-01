import * as instace from "axios";
const axios = instace.create({
  baseURL: "http://localhost:8080/api",
});

const requestHandler = (request) => {
  request.headers["Accept"] = "application/json";
  request.headers["Content-Type"] = "application/json";
  const session = JSON.parse(localStorage.getItem("user")) || null;
  if (session) {
    request.headers["Authorization"] = `Bearer ${session.token}`;
  }
  return request;
};

const errorResponseHandler = (response) => {
  return Promise().reject({ ...response });
};

const successResponseHandler = (response) => {
  return response.data;
};

// Inteferir y cambiar el request.
axios.interceptors.request.use((request) => requestHandler(request));

//Interferir en la respuesta y hacer que utilice otros métodos.
axios.interceptors.response.use(
  (response) => successResponseHandler(response),
  (error) => errorResponseHandler(error)
);

export default axios;
