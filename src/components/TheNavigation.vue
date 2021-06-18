<template>
  <!-- some changes will be done here -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
    <div class="container-fluid">
      <router-link :to="{ name: 'Login' }" class="navbar-brand ms-4">
        <img id="logo" src="@/assets/graduation.png" alt="logo" />

        نظام الدراسات العليا
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ps-5">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Login' }"
              >الرئيسية</router-link
            >
          </li>
        </ul>
        <router-link
          id="register-btn"
          :to="{ name: 'Register' }"
          tag="button"
          class="btn btn-primary me-5"
          type="submit"
          >تسجيل</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
.navbar .navbar-brand {
  font-size: 24px;
  font-weight: bold;
  color: #212529;
}
.navbar-nav .nav-link {
  color: #343a40;
  font-size: 20px;
}
#register-btn {
  min-width: 150px;
  font-size: 18px;
}
#logo {
  height: 50px;
  width: 50px;
}
</style>
