// 헤더 영역 가져오기
const nav = document.querySelector("nav");

// 헤더 UI 업데이트 함수
function renderNav() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const username = localStorage.getItem("username");

  if (isLoggedIn && username) {
    // 로그인된 상태
    nav.innerHTML = `
      <span>${username}님 환영합니다</span>
      <a href="./html/main.html">메인</a>
      <button id="logoutBtn">로그아웃</button>
    `;

    // 로그아웃 버튼 이벤트
    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
      alert("로그아웃 되었습니다.");
      renderNav(); // 헤더 다시 렌더링
    });
  } else {
    // 로그인되지 않은 상태
    nav.innerHTML = `
      <a href="./html/main.html">메인</a>
      <a href="./html/login.html">로그인</a>
      <a href="./html/signup.html">회원가입</a>
    `;
  }
}

// 페이지 로드 시 실행
renderNav();
