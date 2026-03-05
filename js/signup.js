// 비밀번호 토글 기능
function togglePassword(id) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

// 전체 동의 체크박스 기능
document.getElementById("agreeAll").addEventListener("change", function() {
  const checkboxes = document.querySelectorAll(".agree");
  checkboxes.forEach(cb => cb.checked = this.checked);
});
