<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10">
        <div class="mb-3">
          <label for="master-in" class="form-label"> ماجيستير في</label>
          <input
            v-model="masterDataForm.masterIn"
            style="direction: rtl"
            id="master-in"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-2">
        <div class="mb-3">
          <label for="eldor" class="form-label">دور</label>
          <input
            v-model="masterDataForm.eldor"
            style="direction: rtl"
            id="eldor"
            type="text"
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
            v-model="masterDataForm.faculty"
            style="direction: rtl"
            id="faculty"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="mb-3">
          <label for="universty" class="form-label">جامعة</label>
          <input
            v-model="masterDataForm.universty"
            style="direction: rtl"
            id="universty"
            type="text"
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
            v-model="masterDataForm.department"
            style="direction: rtl"
            id="department"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="grade" class="form-label">التقدير </label>
          <input
            v-model="masterDataForm.grade"
            style="direction: rtl"
            id="grade"
            type="text"
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
      masterDataForm: {
        masterIn: "",
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
