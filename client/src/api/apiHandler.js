import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

const apiHandler = {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/users/me")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // api call to read data.
  getQA() {
    return service
      .get("/api/qa")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // api call to record new data.
  postQA(userInfo) {
    return service
      .post("/api/qa", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // api call to update data.
  updateQA(userInfo) {
    return service
      .patch("api/qa/" + userInfo.id, userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // api call to delete data.
  deleteQA(userInfo) {
    return service
      .delete("api/aq/:id", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};

export default apiHandler;
