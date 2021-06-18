import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login.vue";
import Register from "../views/register.vue";
import Home from "../views/student/home.vue";
import Diploma from "../views/student/forms/diploma.vue";
import Master from "../views/student/forms/master.vue";
import Doctorate from "../views/student/forms/doctorate.vue";
import Dashboard from "../views/admin/dashboard.vue";
import DiplomaStudentsData from "../views/admin/diplomaStudentsData.vue";
import MasterStudentsData from "../views/admin/masterStudentsData.vue";
import DoctorateStudentsData from "../views/admin/doctorateStudentsData.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/diploma",
    name: "Diploma",
    component: Diploma,
  },
  {
    path: "/master",
    name: "Master",
    component: Master,
  },
  {
    path: "/doctorate",
    name: "Doctorate",
    component: Doctorate,
  },
  // TODO : change to parent and sub routes
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/diploma_students",
    name: "DiplomaStudentsData",
    component: DiplomaStudentsData,
  },
  {
    path: "/master_students",
    name: "MasterStudentsData",
    component: MasterStudentsData,
  },
  {
    path: "/doctorate_students",
    name: "DoctorateStudentsData",
    component: DoctorateStudentsData,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
