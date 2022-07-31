import { firebaseAuth, firebaseDb} from "@/firebaseInit.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";


import router from '@/router'


const RegisterStore = {
  namespaced: true,
  state: {
    userDataAuth: null,
    userUID: '',
    userClaims: {},
    userData: {},
  },

  mutations: {
    SET_USER_DATA_AUTH(state, payload) {
      state.userDataAuth = payload
    },
    SET_USER_UID(state, payload) {
      state.userUID = payload
    },
    SET_USER_CLAIMS(state, payload) {
      state.userClaims = payload
    },
    SET_USER_DATA(state, payload) {
      state.userData = payload
    }
  },

  actions: {
    authAction({ dispatch, commit }) {
      firebaseAuth.onAuthStateChanged(user => {
        if (user) {
          commit("SET_USER_DATA_AUTH", user);
          commit("SET_USER_UID", user.uid);
          firebaseAuth.currentUser.getIdTokenResult().then(tokenResult => {
            commit("SET_USER_CLAIMS", tokenResult.claims);
          });
          dispatch("loadUserData");

        } else {
          commit("SET_USER_DATA_AUTH", null);
          router.push({ name: 'login' });

        }
      });
    },
    async signIn({ commit }, payload) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          firebaseAuth,
          payload.email,
          payload.password
        );
        commit('SET_USER_DATA_AUTH', userCredential.user);
        router.push({ name: 'admin.home' });
      } catch (e) {
        console.log(e.message);
      }
    },
    async signOut({ commit }) {
      try {
        await firebaseAuth.signOut();
        commit('SET_USER_DATA_AUTH', null);
        commit("SET_USER_UID", '');
        commit("SET_USER_CLAIMS", {});
        router.push({ name: 'login' });
      } catch (e) {
        console.log(e.message);
      }
    },
    async loadUserData( {commit, state}) {

      try {
        const userRef = doc(firebaseDb, 'users', state.userUID);
        const userData = await getDoc(userRef);
        if(userData.exists()) {
          commit('SET_USER_DATA', userData.data());
        } else {
          console.log('no existe');
        }
      } catch (e) {
        console.log(e.message);
      }
    }
    ,
    someAction({ dispatch }) {
      dispatch('increment', null, { root: true });
    }
  },
  getters: {
    getArrayUserDataEntriesProfile: (state) => {
      return Object.entries(state.userData.profile);
    }
  }
}

export default RegisterStore