import Blue from "./blue-img.png";
import Red from "./red-img.png";
import Green from "./green-img.png";
import "./style.css";
console.log("HYEYEYEYE");
const allImages = document.querySelector(".all-images");
const redImg = new Image();
const greenImg = new Image();
const blueImg = new Image();
blueImg.src = Blue;
greenImg.src = Green;
redImg.src = Red;

allImages.appendChild(blueImg);
allImages.appendChild(greenImg);
allImages.appendChild(redImg);

const buttonNext = document.createElement("button");
const buttonPrevious = document.createElement("button");
const frame = document.querySelector(".frame");
frame.appendChild(buttonNext);
frame.appendChild(buttonPrevious);
buttonNext.textContent = "Next";
buttonPrevious.textContent = "Previous";
buttonNext.classList.add("next-btn");
buttonPrevious.classList.add("previous-btn");
buttonPrevious.addEventListener("click", handlePreviousClick);
buttonNext.addEventListener("click", handleNextClick);
function handlePreviousClick() {
  if (allImages.classList.contains("blue")) {
    allImages.classList.remove("blue");
    allImages.classList.add("red");
  } else if (allImages.classList.contains("green")) {
    allImages.classList.remove("green");
    allImages.classList.add("blue");
  } else if (allImages.classList.contains("red")) {
    allImages.classList.remove("red");
    allImages.classList.add("green");
  }
}
function handleNextClick() {
  if (allImages.classList.contains("blue")) {
    allImages.classList.remove("blue");
    allImages.classList.add("green");
  } else if (allImages.classList.contains("green")) {
    allImages.classList.remove("green");
    allImages.classList.add("red");
  } else if (allImages.classList.contains("red")) {
    allImages.classList.remove("red");
    allImages.classList.add("blue");
  }
}

//add two buttons to the sides for next and previous
// functions : if dzqjdioqjd then add classList etc
//
