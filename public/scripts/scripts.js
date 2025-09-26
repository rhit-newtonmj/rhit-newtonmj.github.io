let headerLinks = {Home:"index.html", Resume:"./resume.html", Portfolio:"./portfolio.html"};
let footerLinks = {};

function addHeader(){
    let header = document.querySelector("header");
    Object.keys(headerLinks).forEach((page) =>{
        let link = document.createElement("a");
        link.title = page;
        link.href = headerLinks[page];
        header.appendChild(link);
    });

    }

window.addEventListener("load", (event) => {
    console.log("event occured: " + event);
    addHeader();
    })