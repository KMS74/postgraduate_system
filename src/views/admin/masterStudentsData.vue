<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="text-center my-4">الطلاب المتقدمين لمرحلة الماجستير</h2>
        <tabel-form-data :studentData="masterStudentData" />
      </div>
    </div>
  </div>
</template>

<script>
import TabelFormData from "../../components/tabelFormData.vue";
export default {
  computed: {
    masterStudentData() {
      return this.$store.getters.getSubmitedMasterData;
    },
  },
  components: {
    TabelFormData,
  },
  mounted() {
    this.$store.dispatch("fetchMasterData");
  },
};
</script>

<style></style>
