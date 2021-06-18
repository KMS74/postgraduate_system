<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label for="faculty" class="form-label">كلية</label>
          <input
            v-model="bachelorDataForm.faculty"
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
            v-model="bachelorDataForm.universty"
            style="direction: rtl"
            id="universty"
            type="text"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10">
        <div class="mb-3">
          <label for="bachelor-in" class="form-label">بكالوريوس في</label>
          <input
            v-model="bachelorDataForm.bachelorIn"
            style="direction: rtl"
            id="bachelor-in"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-2">
        <div class="mb-3">
          <label for="eldor" class="form-label">دور</label>
          <input
            v-model="bachelorDataForm.eldor"
            style="direction: rtl"
            id="eldor"
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
            v-model="bachelorDataForm.department"
            style="direction: rtl"
            id="department"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="grade" class="form-label">التقدير العام</label>
          <input
            v-model="bachelorDataForm.grade"
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
      bachelorDataForm: {
        bachelorIn: "",
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
