<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 col-sm-10 mx-auto">
        <form class="login">
          <h2 class="text-center mb-4">تسجيل الدخول</h2>
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
              v-model="formData.password"
              type="password"
              class="form-control"
              id="password"
            />
          </div>
          <div class="mb-3">
            <label class="form-label" for="login-type">أختر نوع الدخول</label>
            <select
              v-model="formData.registerType"
              id="login-type"
              class="form-select"
              aria-label="Default select example"
            >
              <!-- <option value="student">طالب متقدم للدراسات العليا</option>
              <option value="admin">أدمن</option>
              <option value="employee">موظف</option> -->
              <option
                v-for="(option, index) in selectedOptions"
                :key="selectedOptions[index]"
              >
                {{ option }}
              </option>
            </select>
          </div>

          <button
            @click.prevent="login()"
            type="submit"
            class="btn btn-primary"
          >
            تسجيل دخول
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      selectedOptions: ["طالب متقدم للدراسات العليا", "أدمن", "موظف"],
      // binding form data with input feilds
      formData: {
        email: "",
        password: "",
        registerType: "",
      },
    };
  },
  methods: {
    login() {
      // implement login method
      // this method will be cahnage later
      console.log("login method");
      console.log(this.formData);
      let selectedOption = this.formData.registerType;
      if (selectedOption == "طالب متقدم للدراسات العليا") {
        this.$router.push({ name: "Home" });
      } else if (selectedOption == "أدمن") {
        this.$router.push({ name: "Dashboard" });
      }
    },
  },
};
</script>

<style scoped>
.login {
  background-color: #f8f9fa;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  padding: 30px;
  margin-top: 50px;
}
</style>
