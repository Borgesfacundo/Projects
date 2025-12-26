const skillsElement = document.querySelector(".skills");

let skillList = {};

const displaySkills = (skills) => {
  skills.forEach((skill) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const img = document.createElement("img");

    p.textContent = `${skill.name}`;

    img.setAttribute("src", skill.img);
    img.setAttribute("alt", skill.desc);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "100");
    img.setAttribute("height", "100");

    // Si es Express, agrega clase especial para invertir color
    if (skill.name.toLowerCase() === "express") {
      img.classList.add("express-invert");
    }

    div.appendChild(p);
    div.appendChild(img);

    skillsElement.appendChild(div);
  });
};

const getSkills = async () => {
  const response = await fetch("json/skills.json");
  if (response.ok) {
    const data = await response.json();
    skillList = data;

    displaySkills(skillList);
  }
};

getSkills();

const email = "borgesfacundo@gmail.com";
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(email);
    alert("Content copied to your clipboard");
  } catch (err) {
    console.error("Missing email Information: ", err);
  }
};

const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector(".menuLinks");

hamburgerElement.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamburgerElement.classList.toggle("open");
});
