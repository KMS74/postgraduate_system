<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label class="form-label">كلية</label>
          <input
            v-model.lazy="bachelorFaculty"
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
            v-model.lazy="bachelorUniversty"
            style="direction: rtl"
            type="text"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10">
        <div class="mb-3">
          <label class="form-label">بكالوريوس في</label>
          <input
            v-model.lazy="bachelorIn"
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
            v-model.lazy="bachelorEldor"
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
            v-model.lazy="bachelorDepartment"
            style="direction: rtl"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label">التقدير العام</label>
          <input
            v-model.lazy="bachelorGrade"
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
      "bachelorDataForm.bachelorIn",
      "bachelorDataForm.bachelorEldor",
      "bachelorDataForm.bachelorFaculty",
      "bachelorDataForm.bachelorUniversty",
      "bachelorDataForm.bachelorDepartment",
      "bachelorDataForm.bachelorGrade",
    ]),
  },
};
</script>

<style></style>
