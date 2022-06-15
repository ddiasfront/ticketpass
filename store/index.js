import axios from "axios";

export const state = () => ({
  login: {},
  error: {},
  events: {},
  eventsmeta: {},
  errorEvents: {},
  createdEvent: {},
  errorCreatedEvent: {}
});

export const getters = {};

export const actions = {
  async clearLogin({commit}) {
    commit('clearLogin');
  },
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
        commit("errorPost", e.response.data);
        return e.response.data;
      }
    }
  },
  async getEventsByPage({ commit }, payload) {
    const api = payload ? payload : "http://localhost:8000/api/events";
    try {
      await axios.get(api).then(response => {
        commit("addEvents", response.data);
        return response;
      });
    } catch (e) {
      commit("errorEvents", e.response.data);
      return e.response.data;
    }
  },
  async createEvent({ commit, state }, payload) {
    const api = "http://localhost:8000/api/events";
    try {
      await axios.post(api, payload, {
        headers: {
          'Authorization': `Bearer ${localStorage.isLoggedIn}`
        }
      }).then(response => {
        commit("createEvent", response.data);
        return response;
      });
    } catch (e) {
      commit("errorCreateEvent", e.response.data);
      return e.response.data;
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
  clearLogin(state) {
    state.login = {};
  },
  addEvents(state, response) {
    state.events = { ...response };
    state.eventsmeta = {...response.meta}
  },
  errorEvents(state, e) {
    state.errorEvents= { ...e };
  },
  createEvent(state, response) {
    state.createdEvent = { ...response };
  },
  errorCreateEvent(state, e) {
    state.errorCreateEvent= { ...e };
  },
};
