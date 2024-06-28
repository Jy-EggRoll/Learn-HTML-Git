let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/star.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入您的名字：");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "你好，" + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = storedName + "，欢迎访问此页面";
}

myButton.onclick = function () {
    setUserName();
};