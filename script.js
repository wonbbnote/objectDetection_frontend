const backend_base_url = "http://127.0.0.1:5000"
const frontend_base_url = "http://127.0.0.1:5501"

// 이미지 업로드
async function upload() {
    const formData = new FormData();
    const fileField = document.querySelector('#upload-file');

    formData.append('file_give', fileField.files[0]);

    const response = await fetch(`${backend_base_url}/upload`,{
        method : 'POST',
        body: formData,
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
function search(){
    




}


function preview() {
    let frame = document.getElementById('frame');
    frame.src=URL.createObjectURL(event.target.files[0]);
    frame.style.display = 'block';
  }