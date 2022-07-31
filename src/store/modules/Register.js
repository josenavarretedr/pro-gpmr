// import { firebaseAuth, firebaseDb} from "@/firebaseInit.js";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";


// import router from '@/router'


const RegisterStore = {
  namespaced: true,
  state: {
    basicInfo: null,
    contactInfo: null,
    servicesRequired: null,
    views: {
      basicInfo: true,
      contactInfo: false,
      servicesRequired: false,
      businessInfo: false,
    }

  },

  mutations: {
    SET_VIEWS(state, payload) {
      Object.keys(state.views).forEach(key => {
        state.views[key] = (key === payload) ? true : false;
      })
    },
    SET_BASIC_INFO(state, payload) {
      state.basicInfo = payload
    },
    SET_CONTACT_INFO(state, payload) {
      state.contactInfo = payload;
      console.log(payload);
    }
  },

  actions: {
    setViews({commit}, payload) {
      commit('SET_VIEWS', payload);
    },
    setBasicInfo({commit}, payload) {
      commit('SET_BASIC_INFO', payload);
    }      ,
    setContactInfo({commit}, payload) {
      commit('SET_CONTACT_INFO', payload);
    }
    
  },
  getters: {
  }
}

export default RegisterStore