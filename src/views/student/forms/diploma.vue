<template>
  <div class="container mt-5">
    <div class="row mulitistep-form">
      <div class="col-lg-12">
        <form-wizard
          @on-complete="submit"
          next-button-text="التالي"
          back-button-text=" السابق"
          finish-button-text="تقديم البيانات"
          color="#0d6efd"
        >
          <h1 class="" slot="title">التقديم لدبلومة الدراسات العليا</h1>
          <p class="" slot="title">اكمل الخطوات لاتمام عمليةالتقديم</p>
          <tab-content title="بيانات شخصية">
            <personal-data-form />
          </tab-content>
          <tab-content title="بيانات البكالوريوس">
            <bachelor-data-form />
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
import PersonalDataForm from "../../../components/PersonalDataForm.vue";

export default {
  methods: {
    submit() {
      // implement the method
      alert("submit method");
    },
  },
  components: {
    FormWizard,
    TabContent,
    PersonalDataForm,
    BachelorDataForm,
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
