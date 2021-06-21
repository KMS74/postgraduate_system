<template>
  <div class="table mt-5">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">م</th>
          <th scope="col">الاسم</th>
          <th scope="col">المؤهل الدراسي</th>
          <th scope="col">القسم</th>
          <th scope="col">جهة التخرج</th>
          <th scope="col">التقدير العام</th>
          <th scope="col">الوظيفة الحالية</th>
          <th scope="col">الموقف من التجنيد</th>
          <th scope="col">العمليات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in studentData" :key="student.nationalID">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ student.studentName }}</td>
          <td>{{ student.bachelorIn }}</td>
          <td>{{ student.bachelorDepartment }}</td>
          <td>
            {{
              " كلية " +
              student.bachelorFaculty +
              " جامعة " +
              student.bachelorUniversty
            }}
          </td>
          <td>{{ student.bachelorGrade }}</td>
          <td>{{ student.jop }}</td>
          <td>{{ student.militaryStatus }}</td>
          <td>
            <div class="text-center">
              <button class="btn btn-success mx-2">قبول</button>
              <button class="btn btn-primary mx-2">تعديل</button>
              <button class="btn btn-danger mx-2">حذف</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    studentData: {
      type: Array,
    },
  },
};
</script>

<style></style>
