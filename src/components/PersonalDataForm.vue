<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="name" class="form-label"> اسم الطالب</label>
          <input
            v-model="personalDataForm.studentName"
            style="direction: rtl"
            type="text"
            class="form-control"
            id="name"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="nationalID" class="form-label">الرقم القومي</label>
          <input
            v-model="personalDataForm.nationalID"
            type="text"
            style="direction: rtl"
            class="form-control"
            id="nationalID"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="address" class="form-label"> محل الميلاد</label>
          <input
            v-model="personalDataForm.addressOfBirth"
            style="direction: rtl"
            placeholder="قرية/مركز/محافظة"
            type="text"
            class="form-control"
            id="address"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="birthdate" class="form-label"> تاريخ الميلاد</label>
          <input
            v-model="personalDataForm.dataOfBirth"
            style="direction: rtl"
            type="date"
            class="form-control"
            id="birthdate"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="nationality" class="form-label"> الجنسية </label>
          <input
            v-model="personalDataForm.nationality"
            style="direction: rtl"
            type="text"
            class="form-control"
            id="nationality"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="religion" class="form-label"> الديانة</label>
          <input
            v-model="personalDataForm.religion"
            style="direction: rtl"
            type="text"
            class="form-control"
            id="religion"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="nationality" class="form-label">
            الموقف من التجنيد
          </label>
          <input
            v-model="personalDataForm.militaryStatus"
            style="direction: rtl"
            type="text"
            class="form-control"
            id="nationality"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="religion" class="form-label"> الوظيفة وجهة العمل</label>
          <input
            v-model="personalDataForm.jop"
            style="direction: rtl"
            type="text"
            class="form-control"
            id="religion"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="nationality" class="form-label"> العنوان </label>
          <input
            v-model="personalDataForm.currentAddress"
            style="direction: rtl"
            placeholder="محل الاقامة الحالي"
            type="text"
            class="form-control"
            id="nationality"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label for="religion" class="form-label"> رقم التليفون</label>
          <input
            v-model="personalDataForm.phone"
            style="direction: rtl"
            type="text"
            class="form-control"
            id="religion"
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
      personalDataForm: {
        studentName: "",
        nationalID: "",
        dataOfBirth: "",
        addressOfBirth: "",
        currentAddress: "",
        nationality: "",
        religion: "",
        phone: "",
        jop: "",
        militaryStatus: "",
      },
    };
  },
};
</script>

<style scoped></style>
