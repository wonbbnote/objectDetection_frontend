const backend_base_url = "http://127.0.0.1:5000"
const frontend_base_url = "http://127.0.0.1:5500"

// 회원 가입
async function handleSignin() {
    console.log("handle signin")

    const signupData = {
        user_id: document.getElementById("floatingInput").value,
        password: document.getElementById("floatingPassword").value,
        password_check: document.getElementById("floatingPasswordCheck").value
    }

    const response = await fetch(`${backend_base_url}/signup`, {
        method: ["POST"],
        body: JSON.stringify(signupData)
    })

    response_json = await response.json()
    console.log(response_json)

    if (response_json['message'] == 'success') {
        alert("회원가입 완료!")
        window.location.replace(`${frontend_base_url}/login.html`)
    } else if (response_json['message'] == 'id none') {
        alert("아이디를 입력해주세요!")
    } else if (response_json['message'] == 'password none') {
        alert("비밀번호를 입력해주세요!")
    } else if (response_json['message'] == 'password check none') {
        alert("비밀번호 확인이 필요합니다!")
    } else if (response_json['message'] == 'password is different') {
        alert("비밀번호가 일치하지 않습니다!")
    } else if (response_json['message'] == 'id is duplicated') {
        alert("중복된 아이디입니다.")
    }

    // if (response.status == 200 & response.password == response.password_check) {
    //     alert("회원가입 완료!")
    //     window.location.replace(`${frontend_base_url}/login.html`)
    // } else if (response.status == 401 & response.user_id == "") {
    //     alert("아이디를 입력해주세요!")
    // } else if (response.status == 401 & response.password == "") {
    //     alert("비밀번호를 입력해주세요!")
    // } else if (response.status == 401 & response.password_check == "") {
    //     alert("비밀번호 확인이 필요합니다!")
    // } else if (response.status == 401 & response.password != response.password_check) {
    //     alert("비밀번호가 일치하지 않습니다!")
    // }
}

// 로그인
async function handleLogin() {
    console.log("handle login")

    const loginData = {
        user_id: document.getElementById("floatingInput").value,
        password: document.getElementById("floatingPassword").value
    }

    const response = await fetch(`${backend_base_url}/login`, {
        method: "POST",
        body: JSON.stringify(loginData)
    })

    console.log(response)
    response_json = await response.json()
    console.log(response_json)
    localStorage.setItem("token", response_json.token)
    // 브라우저 자체 url에 로컬 스토리지에 저장

    if (response_json['message'] == 'success') {
        alert("로그인 완료!")
        window.location.replace(`${frontend_base_url}`)
    } else if (response_json['message'] == 'id none') {
        alert("아이디를 입력해주세요!")
    } else if (response_json['message'] == 'password none') {
        alert("비밀번호를 입력해주세요!")
    } else if (response_json['message'] == 'id and password is different') {
        alert("아이디 또는 비밀번호가 일치하지 않습니다!")
    }

    // if (response.status == 200) {
    //     window.location.replace(`${frontend_base_url}`)
    // } else if (response.status == 401 & response.user_id == "") {
    //     alert("아이디를 입력해주세요!")
    // } else if (response.status == 401 & response.password == "") {
    //     alert("비밀번호를 입력해주세요!")
    // } else if (response.status == 401) {
    //     alert("아이디 또는 비밀번호가 일치하지 않습니다!")
    // }
}