<template>
  <div class="container mt-5">
    <div class="row mulitistep-form">
      <div class="col-lg-12">
        <form-wizard
          @on-complete="submitDoctorateForm"
          next-button-text="التالي"
          back-button-text=" السابق"
          finish-button-text="تقديم البيانات"
          color="#0d6efd"
        >
          <h1 class="" slot="title">
            التقديم بالدراسات العليا لدرجة الدكتوراه
          </h1>
          <p class="" slot="title">اكمل الخطوات لاتمام عمليةالتقديم</p>
          <tab-content title="بيانات شخصية">
            <personal-data-form />
          </tab-content>
          <tab-content title="بيانات البكالوريوس">
            <bachelor-data-form />
          </tab-content>
          <tab-content title="بيانات الدبلومة(اختياري)">
            <diploma-data-form />
          </tab-content>
          <tab-content title="بياتات الماجيستير">
            <master-data-form />
          </tab-content>
        </form-wizard>
      </div>
    </div>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import BachelorDataForm from "../../../components/bachelorDataForm.vue";
import DiplomaDataForm from "../../../components/diplomaDataForm.vue";
import MasterDataForm from "../../../components/masterDataForm.vue";
import PersonalDataForm from "../../../components/PersonalDataForm.vue";
import firebase from "../../../firebaseConfig";
const db = firebase.firestore();
export default {
  methods: {
    submitDoctorateForm() {
      let doctorateData = this.$store.getters.doctorateData;
      db.collection("doctorate")
        .add(doctorateData)
        .then(() => {
          alert("تم التقديم طلبك بنجاح");
          this.$store.dispatch("updatePersonalData", {
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
          });
          this.$store.dispatch("updateBachelorData", {
            bachelorIn: "",
            bachelorEldor: "",
            bachelorFaculty: "",
            bachelorUniversty: "",
            bachelorDepartment: "",
            bachelorGrade: "",
          });
          this.$store.dispatch("updateDiplomaData", {
            diplomIn: "",
            diplomaEldor: "",
            diplomaFaculty: "",
            diplomaUniversty: "",
            diplomaDepartment: "",
            diplomaGrade: "",
          });
          this.$store.dispatch("updateMasterData", {
            masterIn: "",
            masterEldor: "",
            masterFaculty: "",
            masterUniversty: "",
            masterDepartment: "",
            masterGrade: "",
          });

          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
  },
  components: {
    FormWizard,
    TabContent,
    PersonalDataForm,
    BachelorDataForm,
    DiplomaDataForm,
    MasterDataForm,
  },
};
</script>

<style>
/* customize form wizard to be RTL */
.vue-form-wizard .wizard-progress-bar {
  float: right;
}
.vue-form-wizard .wizard-card-footer .wizard-footer-left {
  float: right;
}
.vue-form-wizard .wizard-card-footer .wizard-footer-right {
  float: left;
}
.mulitistep-form {
  padding: 30px 20px;
  margin: 30px 0;
  background-color: #f8f9fa;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
}
</style>
