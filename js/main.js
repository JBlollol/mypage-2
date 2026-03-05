// 로그인 상태 확인 (예시: localStorage 사용)
const isLoggedIn = localStorage.getItem("isLoggedIn");
const username = localStorage.getItem("username"); // 로그인 시 저장된 사용자 이름

const headerContainer = document.getElementById("headerContainer");

// 헤더 UI 업데이트 함수
function renderHeader() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const username = localStorage.getItem("username");

  if (isLoggedIn && username) {
    // 로그인된 상태
    headerContainer.innerHTML = `
      <h3>${username}님 환영합니다</h3>
      <button id="logoutBtn">로그아웃</button>
    `;

    document.getElementById("logoutBtn").addEventListener("click", () => {
      // 로그아웃 처리
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");

      // 헤더 다시 렌더링 (메인 페이지 그대로 유지)
      renderHeader();
    });
  } else {
    // 로그인되지 않은 상태
    headerContainer.innerHTML = `
      <a href="login.html">로그인</a>
      <a href="signup.html">회원가입</a>
    `;
  }
}

// 페이지 로드 시 헤더 렌더링
renderHeader();
