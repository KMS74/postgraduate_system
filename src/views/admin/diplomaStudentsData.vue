<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="text-center my-4">الطلاب المتقدمين لمرحلة الدبلوم</h2>
        <tabel-form-data :studentData="diplomaStudentData" />
      </div>
    </div>
  </div>
</template>

<script>
import TabelFormData from "../../components/tabelFormData.vue";
export default {
  computed: {
    diplomaStudentData() {
      return this.$store.getters.getSubmitedDiplomaData;
    },
  },
  components: {
    TabelFormData,
  },
  mounted() {
    this.$store.dispatch("fetchDiplomaData");
  },
};
</script>

<style></style>
