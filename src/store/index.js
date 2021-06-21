import Vue from "vue";
import Vuex from "vuex";
import firebase from "../firebaseConfig";
const db = firebase.firestore();

Vue.use(Vuex);
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField, updateField } from "vuex-map-fields";

export default new Vuex.Store({
  state: {
    personalDataForm: {
      studentName: "",
      nationalID: "",
      dataOfBirth: "",
      addressOfBirth: "",
      currentAddress: "",
      nationality: "",
      religion: "",
      phone: "",
      jop: "",
      militaryStatus: "",
    },
    bachelorDataForm: {
      bachelorIn: "",
      bachelorEldor: "",
      bachelorFaculty: "",
      bachelorUniversty: "",
      bachelorDepartment: "",
      bachelorGrade: "",
    },
    diplomaDataForm: {
      diplomaIn: "",
      diplomaEldor: "",
      diplomaFaculty: "",
      diplomaUniversty: "",
      diplomaDepartment: "",
      diplomaGrade: "",
    },
    masterDataForm: {
      masterIn: "",
      masterEldor: "",
      masterFaculty: "",
      masterUniversty: "",
      masterDepartment: "",
      masterGrade: "",
    },
    supmitedDiplomaData: [],
    supmitedMasterData: [],
    supmitedDoctorateaData: [],
  },
  mutations: {
    updateField,
    UPDATE_PERSONAL_DATA(state, payload) {
      state.personalDataForm = payload;
    },
    UPDATE_BACHELOR_DATA(state, payload) {
      state.bachelorDataForm = payload;
    },
    UPDATE_DIPLOMA_DATA(state, payload) {
      state.diplomaDataForm = payload;
    },
    UPDATE_MASTER_DATA(state, payload) {
      state.masterDataForm = payload;
    },
    UPDATE_SUBMITED_DIPLOMA_DATA(state, payload) {
      state.supmitedDiplomaData = payload;
    },
    UPDATE_SUBMITED_MASTER_DATA(state, payload) {
      state.supmitedMasterData = payload;
    },
    UPDATE_SUBMITED_DOCTORATE_DATA(state, payload) {
      state.supmitedDoctorateaData = payload;
    },
  },
  actions: {
    updatePersonalData(context, payload) {
      context.commit("UPDATE_PERSONAL_DATA", payload);
    },
    updateBachelorData(context, payload) {
      context.commit("UPDATE_BACHELOR_DATA", payload);
    },
    updateDiplomaData(context, payload) {
      context.commit("UPDATE_DIPLOMA_DATA", payload);
    },
    updateMasterData(context, payload) {
      context.commit("UPDATE_MASTER_DATA", payload);
    },
    fetchDiplomaData(context) {
      var diplomaData = [];
      db.collection("diploma")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            diplomaData.push(doc.data());
          });
          context.commit("UPDATE_SUBMITED_DIPLOMA_DATA", diplomaData);
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    fetchMasterData(context) {
      var masterData = [];
      db.collection("master")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            masterData.push(doc.data());
          });
          context.commit("UPDATE_SUBMITED_MASTER_DATA", masterData);
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    fetchDoctorateData(context) {
      var doctorateData = [];
      db.collection("doctorate")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doctorateData.push(doc.data());
          });
          context.commit("UPDATE_SUBMITED_DOCTORATE_DATA", doctorateData);
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
  },
  getters: {
    getField,
    diplomaData(state) {
      return {
        ...state.personalDataForm,
        ...state.bachelorDataForm,
      };
    },
    masterData(state) {
      return {
        ...state.personalDataForm,
        ...state.bachelorDataForm,
        ...state.diplomaDataForm,
      };
    },
    doctorateData(state) {
      return {
        ...state.personalDataForm,
        ...state.bachelorDataForm,
        ...state.diplomaDataForm,
        ...state.masterDataForm,
      };
    },
    getSubmitedDiplomaData(state) {
      return state.supmitedDiplomaData;
    },
    getSubmitedMasterData(state) {
      return state.supmitedMasterData;
    },
    getSubmitedDoctorateData(state) {
      return state.supmitedDoctorateaData;
    },
    getDiplomaDataReceords(state) {
      return state.supmitedDiplomaData.length;
    },
    getMasterDataReceords(state) {
      return state.supmitedMasterData.length;
    },
    getDoctorateDataReceords(state) {
      return state.supmitedDoctorateaData.length;
    },
  },
  modules: {},
});
