const backend_base_url = "http://127.0.0.1:5000"
const frontend_base_url = "http://127.0.0.1:5501"

// 이미지 업로드
async function upload() {

    const formData = new FormData();
    const fileField = document.getElementById('upload-file');
    console.log(fileField) 

    formData.append('file_give', fileField.files[0]);
    console.log(fileField.files[0])

    const response = await fetch(`${backend_base_url}/upload`,{
        method : 'POST',
        headers:{ 'Authorization':localStorage.getItem("token") },
        body: formData
    })

    response_json = await response.json()
    console.log(response_json)

    if (response.status == 200){
        window.location.replace(`${frontend_base_url}/result.html`)
        }else{
            alert(response.status)
        }
}

// 결과값 도출
async function show(){

    const response = await fetch(`${backend_base_url}/result`, {
        method: 'GET'
    })

    response_json = await response.json()
    console.log(response_json)
    
    // 아웃풋 도출
    const result_message = document.getElementById("output")
    output.innerText = response_json.output

    

    // let fileType = file.type;//선택된 파일 형식 가져오기
    // let validExtensions = ["image/jpeg", "image/jpg", "image/png"];//배열에 유효한 이미지를 확장 추가함
    // if(validExtensions.includes(fileType)){
    //     let fileReader = new FileReader(); //사용자가 선택한 파일이 이미지 파일인 경우
    //     fileReader.onload = ()=>{
    //     let fileURL = fileReader.result; //fileURL 변수에 사용자 파일 소스 전달

    //     const img = document.createElement('img')
    //     img.src = fileURL
    //     dropArea.appendChild(img)

    
    
    // 이미지 불러오기
    const img_path = response_json.file_path
    console.log(img_path)
    //document.write('<img src='"+img+"'>');
    // const test = os.path.abspath(__file__)
    // console.log(test)
    // const parent_path = Path(test).parent  //p1_front까지
    // console.log(parent_path)
    // const abs_path = str(parent_path) + img_path
    // console.log(abs_path)
    //C:\Users\USER\OneDrive\바탕 화면\p1_front\static\img
    var img = document.createElement("img")
    //img.setAttribute("src", img_path)
    //img.src = abs_path
    //img.src = 'static/img/김종국.jpeg'
    img.src = img_path
    

    var block = document.getElementById("img-file")
    block.appendChild(img)
    
}



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


