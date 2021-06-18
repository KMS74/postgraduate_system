<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10">
        <div class="mb-3">
          <label for="diploma-in" class="form-label"
            >دبلوم الدراسات العليا في</label
          >
          <input
            v-model="diplomaDataForm.diplomaIn"
            style="direction: rtl"
            type="text"
            id="diploma-in"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-2">
        <div class="mb-3">
          <label for="eldor" class="form-label">دور</label>
          <input
            v-model="diplomaDataForm.eldor"
            style="direction: rtl"
            type="text"
            id="eldor"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label for="faculty" class="form-label">من كلية</label>
          <input
            v-model="diplomaDataForm.faculty"
            style="direction: rtl"
            type="text"
            id="faculty"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="mb-3">
          <label for="universty" class="form-label">جامعة</label>
          <input
            v-model="diplomaDataForm.universty"
            style="direction: rtl"
            type="text"
            id="universty"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="department" class="form-label">التخصص</label>
          <input
            v-model="diplomaDataForm.department"
            style="direction: rtl"
            type="text"
            id="department"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="grade" class="form-label">التقدير </label>
          <input
            v-model="diplomaDataForm.grade"
            style="direction: rtl"
            type="text"
            id="grade"
            class="form-control"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diplomaDataForm: {
        diplomaIn: "",
        eldor: "",
        faculty: "",
        universty: "",
        department: "",
        grade: "",
      },
    };
  },
};
</script>

<style></style>
