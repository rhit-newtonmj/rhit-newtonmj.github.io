const headerLinks = {Home:"index.html", Resume:"./resume.html", Portfolio:"./portfolio.html"};
const footerLinks = {Handshake:"https://rose-hulman.joinhandshake.com/profiles/6ns8uu"};

function addHeader(){
    let header = document.querySelector("header");
    Object.keys(headerLinks).forEach((page) =>{
        let link = document.createElement("a");
        link.innerText = page;
        link.href = headerLinks[page];
        header.appendChild(link);
    });

    }

function addFooter(){
    let footer = document.querySelector("footer");
    Object.keys(footerLinks).forEach((page) =>{
        let link = document.createElement("a");
        link.innerText = page;
        link.href = footerLinks[page];
        footer.appendChild(link);
    });
    }

window.addEventListener("load", (event) => {
    console.log("event occured: " + event);
    addHeader();
    addFooter();
    })