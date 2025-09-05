let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function(){
    fileinp.click(); //transferred the functionality of original file type to the fileinp
});

//want to change the fileinp name to the actual uploaded file name
fileinp.addEventListener("change", function(dets){
    const file = dets.target.files[0];
    if(file){
        btn.textContent=file.name;
    }
});