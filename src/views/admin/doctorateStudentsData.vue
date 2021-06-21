<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="text-center my-4">الطلاب المتقدمين لمرحلة الدكتوراه</h2>
        <tabel-form-data :studentData="doctorateStudentData" />
      </div>
    </div>
  </div>
</template>

<script>
import TabelFormData from "../../components/tabelFormData.vue";
export default {
  computed: {
    doctorateStudentData() {
      return this.$store.getters.getSubmitedDoctorateData;
    },
  },
  components: {
    TabelFormData,
  },
  mounted() {
    this.$store.dispatch("fetchDoctorateData");
  },
};
</script>

<style></style>
