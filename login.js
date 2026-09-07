function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("message").textContent = "로그인 성공!";
    } else {
        document.getElementById("message").textContent = "아이디 또는 비밀번호가 틀렸습니다.";
    }
}