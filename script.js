"use strict";

// Get all the cells
const worksCells = document.querySelectorAll(".subGrid");
const menu = document.querySelector(".menu");
const menuItems = menu.querySelectorAll("a");
const btns = document.querySelectorAll("button");

// Function to generate a random color in hexadecimal format
function getRandomColour() {
  const palette = ["fe6f5e", "fe6f5e", "ffcc33", "afe313", "95e0e8", "8a8ad5"];
  const randomIdx = Math.floor(Math.random() * palette.length);
  const colour = "#" + palette[randomIdx];
  return colour;
}

const colourButtons = (buttonType) => {
  buttonType.forEach((cell) => {
    cell.classList.add("smooth-transition");

    let isMoved = false;
    function moveDown() {
      if (buttonType != menuItems) {
        if (!isMoved) {
          cell.style.transform = "translate(-3px, -3px)";
          cell.style.boxShadow = "none";
          cell.style.border = "2.5px solid #3f3f3f";
          isMoved = true;
        } else {
          cell.style.transform = "translate(0)";
          isMoved = false;
        }
      }
    }

    cell.addEventListener("click", () => {
      moveDown();
      const link = cell.getAttribute("data-link");
      if (link) {
        window.location.href = link;
      }
    });

    const hoveredColour = getRandomColour();
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = hoveredColour;
    });
    cell.addEventListener("mouseout", () => {
      cell.style.backgroundColor = "#fff";
    });
  });
};

colourButtons(worksCells);
colourButtons(menuItems);
colourButtons(btns);

// changes project description to "in progress" when hovered
const showDisclamer = () => {
  worksCells.forEach((proj) => {
    const inProg = proj.querySelector(".in_prog");
    if (inProg) {
      const origHTML = inProg.innerHTML;
      proj.addEventListener("mouseover", () => {
        inProg.innerHTML = ` <h3>⚠️ Still in Progress! ⚠️</h3><h4>...but you're welcome to look!</h4>`;
      });
      proj.addEventListener("mouseout", () => {
        inProg.innerHTML = origHTML;
      });
    }
  });
};

showDisclamer();
