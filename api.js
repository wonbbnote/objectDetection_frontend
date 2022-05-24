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
    //document.body.appendChild(img)

    var block = document.getElementById("img-file")
    block.appendChild(img)
    
}


