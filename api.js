const backend_base_url = "http://127.0.0.1:5000"
const frontend_base_url = "http://127.0.0.1:5500"

// 회원 가입
async function handleSignin() {
    console.log("handle signin")

    const signupData = {
        email: document.getElementById("floatingInput").value,
        password: document.getElementById("floatingPassword").value,
        password_check: document.getElementById("floatingPasswordCheck").value
    }

    const response = await fetch(`${backend_base_url}/signup`, {
        method: 'POST',
        body: JSON.stringify(signupData)
    })

    response_json = await response.json()
    console.log(response_json)

    if (response.status == 200) {
        window.location.replace(`${frontend_base_url}/login.html`)
    } else {
        alert(response.status)
    }

    // if (response.status == 200 & password == password_check) {
    //     window.location.replace(`${frontend_base_url}/login.html`)
    //     alert("회원가입 완료!")
    // } else if (password != password_check) {
    //     alert("비밀번호가 일치하지 않습니다.")
    // } else {
    //     alert(response.status)
    // }
}

// 로그인
async function handleLogin() {
    console.log("handle login")

    const loginData = {
        email: document.getElementById("floatingInput").value,
        password: document.getElementById("floatingPassword").value
    }

    const response = await fetch(`${backend_base_url}/login`, {
        method: 'POST',
        body: JSON.stringify(loginData)
    })

    console.log(response)
    response_json = await response.json()
    console.log(response_json)
    localStorage.setItem("token", response_json.token)
    // 브라우저 자체 url에 로컬 스토리지에 저장

    if (response.status == 200) {
        window.location.replace(`${frontend_base_url}`)
    } else {
        alert(response.status)
    }
}