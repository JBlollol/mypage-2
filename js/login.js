// 비밀번호 토글 기능
function togglePassword(id) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

// 로그인 폼 제출 이벤트
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  // 실제 로그인 검증 로직은 서버와 연결 필요
  alert("로그인 성공! 메인 페이지로 이동합니다.");
  window.location.href = "main.html"; // 로그인 성공 시 메인 페이지로 이동
});
