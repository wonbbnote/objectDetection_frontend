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
        method: 'GET',
    })

    response_json = await response.json()
    console.log(response_json)
    
    showImage()
    const output = document.getElementById("output")
    output.innerText = response_json.output
    

    function showImage() {
        var newImage = document.getElementById('image-show').lastElementChild;
  
    //이미지는 화면에 나타나고
    newImage.style.visibility = "visible";
  
}
    

}
