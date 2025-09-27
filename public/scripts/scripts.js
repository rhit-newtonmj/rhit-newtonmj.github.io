const headerLinks = {Home:"index.html", Resume:"./resume.html", Portfolio:"./portfolio.html"};
const footerLinks = {};

function addHeader(){
    let header = document.querySelector("header");
    Object.keys(headerLinks).forEach((page) =>{
        let link = document.createElement("a");
        link.innerText = page;
        link.href = headerLinks[page];
        header.appendChild(link);
    });

    }

function addListeners(){
    let threeimages1 = document.getElementById("threeimages1");
    let largeImage1 = document.getElementById("largeImage1")
    let image1 = document.getElementById("image1");
    let image2 = document.getElementById("image2");
    let image3 = document.getElementById("image3");
    let image4 = document.getElementById("image4");
    image1.addEventListener("click", function(){
        if(image1.parentElement != largeImage1){
            largeImage1.appendChild(image1);
            threeimages1.appendChild(image2);
            threeimages1.appendChild(image3);
            threeimages1.appendChild(image4);
        }
    });
    image2.addEventListener("click", function(){
        if(image2.parentElement != largeImage1){
            largeImage1.appendChild(image2);
            threeimages1.appendChild(image1);
            threeimages1.appendChild(image3);
            threeimages1.appendChild(image4);
        }
    });
    image3.addEventListener("click", function(){
        if(image3.parentElement != largeImage1){
            largeImage1.appendChild(image3);
            threeimages1.appendChild(image1);
            threeimages1.appendChild(image2);
            threeimages1.appendChild(image4);
        }
    });
    image4.addEventListener("click", function(){
        if(image4.parentElement != largeImage1){
            largeImage1.appendChild(image4);
            threeimages1.appendChild(image1);
            threeimages1.appendChild(image2);
            threeimages1.appendChild(image3);
        }
    });


    let threeimages2= document.getElementById("threeimages2");
    let largeImage3 = document.getElementById("largeImage3")
    let image6 = document.getElementById("image6");
    let image7 = document.getElementById("image7");
    let image8 = document.getElementById("image8");
    let image9 = document.getElementById("image9");
    image6.addEventListener("click", function(){
        if(image6.parentElement != largeImage3){
            largeImage3.appendChild(image6);
            threeimages2.appendChild(image7);
            threeimages2.appendChild(image8);
            threeimages2.appendChild(image9);
        }
    });
    image7.addEventListener("click", function(){
        if(image7.parentElement != largeImage3){
            largeImage3.appendChild(image7);
            threeimages2.appendChild(image6);
            threeimages2.appendChild(image8);
            threeimages2.appendChild(image9);
        }
    });
    image8.addEventListener("click", function(){
        if(image8.parentElement != largeImage3){
            largeImage3.appendChild(image8);
            threeimages2.appendChild(image6);
            threeimages2.appendChild(image7);
            threeimages2.appendChild(image9);
        }
    });
    image9.addEventListener("click", function(){
        if(image9.parentElement != largeImage3){
            largeImage3.appendChild(image6);
            threeimages2.appendChild(image7);
            threeimages2.appendChild(image8);
            threeimages2.appendChild(image9);
        }
    });
}

window.addEventListener("load", (event) => {
    console.log("event occured: " + event);
    addHeader();
    addListeners();
    })