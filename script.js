document.addEventListener("DOMContentLoaded", function () {

    // HTML 요소 가져오기
    const idInput = document.getElementById("userId");
    const passwordInput = document.getElementById("userPassword");

    const signInBtn = document.getElementById("signInBtn");
    const signUpLink = document.getElementById("signUpLink");


    // 로그인 기능
    function signIn() {

        const id = idInput.value.trim();
        const password = passwordInput.value.trim();


        // ID를 입력하지 않았을 때
        if (id === "") {

            alert("ID를 입력해주세요.");

            idInput.focus();

            return;
        }


        // 비밀번호를 입력하지 않았을 때
        if (password === "") {

            alert("PASSWORD를 입력해주세요.");

            passwordInput.focus();

            return;
        }


        // 둘 다 입력했을 때
        alert(id + "님, 로그인 정보가 입력되었습니다.");

    }


    // Sign In 버튼 클릭
    signInBtn.addEventListener("click", signIn);


    // ID 입력 후 Enter
    idInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            passwordInput.focus();

        }

    });


    // PASSWORD 입력 후 Enter
    passwordInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            signIn();

        }

    });


    // Sign Up 클릭
    signUpLink.addEventListener("click", function (event) {

        event.preventDefault();

        alert("회원가입 페이지는 아직 준비 중입니다.");

    });

});