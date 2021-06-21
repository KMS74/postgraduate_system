<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label"> اسم الطالب</label>
          <input
            v-model.lazy="studentName"
            style="direction: rtl"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label">الرقم القومي</label>
          <input
            v-model.lazy="nationalID"
            type="text"
            style="direction: rtl"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label"> محل الميلاد</label>
          <input
            v-model.lazy="addressOfBirth"
            style="direction: rtl"
            placeholder="قرية/مركز/محافظة"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label"> تاريخ الميلاد</label>
          <input
            v-model.lazy="dataOfBirth"
            style="direction: rtl"
            type="date"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label"> الجنسية </label>
          <input
            v-model.lazy="nationality"
            style="direction: rtl"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label"> الديانة</label>
          <input
            v-model.lazy="religion"
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
          <label class="form-label"> الموقف من التجنيد </label>
          <input
            v-model.lazy="militaryStatus"
            style="direction: rtl"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label"> الوظيفة وجهة العمل</label>
          <input
            v-model.lazy="jop"
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
          <label class="form-label"> العنوان </label>
          <input
            v-model.lazy="currentAddress"
            style="direction: rtl"
            placeholder="محل الاقامة الحالي"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label"> رقم التليفون</label>
          <input
            v-model.lazy="phone"
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
      "personalDataForm.studentName",
      "personalDataForm.nationalID",
      "personalDataForm.dataOfBirth",
      "personalDataForm.addressOfBirth",
      "personalDataForm.currentAddress",
      "personalDataForm.nationality",
      "personalDataForm.religion",
      "personalDataForm.phone",
      "personalDataForm.jop",
      "personalDataForm.militaryStatus",
    ]),
  },
};
</script>

<style scoped></style>
