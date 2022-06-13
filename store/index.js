import axios from "axios";

export const state = () => ({
  login: {},
  error: {}
});

export const getters = {};

export const actions = {
  async postLogin({ commit, state }, payload) {
    if (!state.login.access_token) {
      const loginPayload = new FormData();
      loginPayload.append("grant_type", "password");
      loginPayload.append("client_id", "966c01ba-31b1-40a2-8f4c-fab8b1373bd7 ");
      loginPayload.append("username", payload.email);
      loginPayload.append("password", payload.password);
      const api = "http://localhost:8000/api/login";
      try {
        await axios.post(api, loginPayload).then(response => {
          commit("addPost", response);
          localStorage.isLoggedIn = response.data.access_token;
          return response;
        });
      } catch (e) {
        console.log(e.response.data, 'error');
        commit("errorPost", e.response.data);
        return e.response.data;
      }
    }
  },
};

export const mutations = {
  addPost(state, response) {
    state.login = { ...response.data };
  },
  errorPost(state, e) {
    state.error = { ...e };
  },
};
