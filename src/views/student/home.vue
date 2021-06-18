<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-sm-12">
          <div class="study text-center mb-4">
            <p>
              <router-link :to="{ name: 'Diploma' }"
                >دبلومة الدراسات العليا</router-link
              >
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12">
          <div class="study text-center mb-4">
            <p>
              <router-link :to="{ name: 'Master' }">درجة الماجستير</router-link>
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12">
          <div class="study text-center mb-4">
            <p>
              <router-link :to="{ name: 'Doctorate' }">
                درجة الدكتوراه</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  margin-top: 100px;
}
.study {
  background-color: #f8f9fa;
  border: 2px solid #f1f1f1;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.study p {
  font-size: 25px;
}
.study p a {
  text-decoration: none;
  color: #212529;
}
.study p a:hover {
  text-decoration: underline;
  color: #0d6efd;
}
</style>
