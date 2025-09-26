let headerLinks = {Home:"index.html", Resume:"./resume.html", Portfolio:"./portfolio.html"};
let footerLinks = {};

function addHeader(){
    let header = document.querySelector("header");
    headerLinks.keys().forEach((page) =>{
        let link = document.createElement("a");
        link.title = page;
        link.href = headerLinks[page];
        header.appendChild(link);
    });

    }

window.addEventListener("load", (event) => {
    addHeader();
    })