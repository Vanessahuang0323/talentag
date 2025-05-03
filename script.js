document.addEventListener('DOMContentLoaded', function() {
  const home = document.getElementById('home');
  const companyRegister = document.getElementById('company-register');
  const studentRegister = document.getElementById('student-register');
  const btnCompany = document.getElementById('btn-company');
  const btnStudent = document.getElementById('btn-student');

  btnCompany.addEventListener('click', function() {
    home.classList.remove('active');
    companyRegister.classList.add('active');
  });

  btnStudent.addEventListener('click', function() {
    home.classList.remove('active');
    studentRegister.classList.add('active');
  });

  // 右下角箭頭返回首頁
  document.querySelectorAll('.arrow').forEach(function(arrow) {
    arrow.addEventListener('click', function() {
      companyRegister.classList.remove('active');
      studentRegister.classList.remove('active');
      home.classList.add('active');
    });
  });
}); 