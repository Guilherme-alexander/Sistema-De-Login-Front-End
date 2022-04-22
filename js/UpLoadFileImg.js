const image_input = document.querySelector("#input-file")
let imageBox = document.querySelector("#display-image")

    image_input.addEventListener("change", function() {
        const reader = new FileReader();
        image_input.setAttribute("class","hidden")//Set class hidden

        reader.addEventListener("load", () => {
            let recentImage = localStorage.setItem("recentImage",reader.result);
            unloadFile()
        });

        reader.readAsDataURL(this.files[0]);
    });

    function unloadFile(e){
        setTimeout(function(){
            location.reload()
        },1000)
    }

    document.addEventListener("DOMContentLoaded",() => {
        const recentImageDataUrl = localStorage.getItem("recentImage")//set Image

        if(recentImageDataUrl){
            imageBox.setAttribute("src",recentImageDataUrl)
            
        }
        
    });

    //Upload Image JS -> complexo de mais. 
    // const image_input = document.querySelector("#image-input");

    // image_input.addEventListener("change", function() {
    // 
    // const reader = new FileReader();
    // reader.addEventListener("load", () => {
    //     const uploaded_image = reader.result;
    //     document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
        
    // });
    // reader.readAsDataURL(this.files[0]);
    // console.log(reader)

    //});