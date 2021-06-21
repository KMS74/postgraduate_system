import Vue from "vue";
import Vuex from "vuex";

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
      eldor: "",
      faculty: "",
      universty: "",
      department: "",
      grade: "",
    },
    diplomaDataForm: {
      diplomIn: "",
      eldor: "",
      faculty: "",
      universty: "",
      department: "",
      grade: "",
    },
    masterDataForm: {
      masterIn: "",
      eldor: "",
      faculty: "",
      universty: "",
      department: "",
      grade: "",
    },
  },
  mutations: {
    updateField,
  },
  actions: {},
  getters: {
    getField,
  },
  modules: {},
});
