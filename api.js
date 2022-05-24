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

    const result_message = document.getElementById("output")
    output.innerText = response_json.output

    const img_path = response_json.file_path
    console.log("C:/Users/USER/OneDrive/바탕 화면/p1/main/static/img"+img_path)
    //document.write('<img src='"+img+"'>');

    var img = document.createElement("img")
    //img.setAttribute("src", img_path)
    img.src = 'C:/Users/USER/OneDrive/바탕 화면/p1/main/static/img/'+img_path
    //document.body.appendChild(img)

    var block = document.getElementById("img-file")
    block.appendChild(img)

}
    
