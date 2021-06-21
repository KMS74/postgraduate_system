<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10">
        <div class="mb-3">
          <label class="form-label"> ماجيستير في</label>
          <input
            v-model.lazy="masterIn"
            style="direction: rtl"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-2">
        <div class="mb-3">
          <label class="form-label">دور</label>
          <input
            v-model.lazy="masterEldor"
            style="direction: rtl"
            type="text"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label class="form-label">من كلية</label>
          <input
            v-model.lazy="masterFaculty"
            style="direction: rtl"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="mb-3">
          <label class="form-label">جامعة</label>
          <input
            v-model.lazy="masterUniversty"
            style="direction: rtl"
            type="text"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label">التخصص</label>
          <input
            v-model.lazy="masterDepartment"
            style="direction: rtl"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label">التقدير </label>
          <input
            v-model.lazy="masterGrade"
            style="direction: rtl"
            type="text"
            class="form-control"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  computed: {
    ...mapFields([
      "masterDataForm.masterIn",
      "masterDataForm.masterEldor",
      "masterDataForm.masterFaculty",
      "masterDataForm.masterUniversty",
      "masterDataForm.masterDepartment",
      "masterDataForm.masterGrade",
    ]),
  },
};
</script>

<style></style>
