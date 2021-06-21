<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10">
        <div class="mb-3">
          <label class="form-label">دبلوم الدراسات العليا في</label>
          <input
            v-model.lazy="diplomaIn"
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
            v-model.lazy="eldor"
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
            v-model.lazy="faculty"
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
            v-model.lazy="universty"
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
            v-model.lazy="department"
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
            v-model.lazy="grade"
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
      "diplomaDataForm.diplomaIn",
      "diplomaDataForm.eldor",
      "diplomaDataForm.faculty",
      "diplomaDataForm.universty",
      "diplomaDataForm.department",
      "diplomaDataForm.grade",
    ]),
  },
};
</script>

<style></style>
