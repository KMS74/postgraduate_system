<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 col-sm-10 mx-auto">
        <form class="register">
          <h2 class="text-center mb-4">املئ البيانات للتسجيل</h2>
          <div class="mb-3">
            <label for="name" class="form-label"> اسم الطالب</label>
            <input
              v-model="formData.studentName"
              type="email"
              class="form-control"
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">البريد الالكتروني</label>
            <input
              v-model="formData.email"
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">كلمة المرور</label>
            <input
              type="password"
              v-model="formData.password"
              class="form-control"
              id="password"
            />
          </div>

          <button
            @click.prevent="register()"
            style="min-width: 120px"
            type="submit"
            class="btn btn-primary"
          >
            تسجيل
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // binding form data with input feilds
      formData: {
        studentName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      // implement register method
      console.log("register method");
      console.log(this.formData);
      this.$router.push({ name: "Home" }); // will be cahnaged later
    },
  },
};
</script>

<style scoped>
.register {
  background-color: #f8f9fa;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  padding: 30px;
  margin-top: 50px;
}
</style>
