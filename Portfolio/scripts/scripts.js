const skillsElement = document.querySelector(".skills");

let skillList = {};

const displaySkills = (skills) => {
    skills.forEach(skill => {
        const div = document.createElement("div");
        const p = document.createElement("p");
        const img = document.createElement("img");

        p.textContent = `${skill.name}`;
        img.setAttribute("src", skill.img);
        img.setAttribute("alt", skill.desc);
        img.setAttribute("loading", "lazy")
        img.setAttribute("width", "50")
        img.setAttribute("height", "50")



        div.appendChild(p);
        div.appendChild(img)

        skillsElement.appendChild(div);
    })
}

const getSkills = async () => {
    const response = await fetch("https://borgesfacundo.github.io/Projects/Portfolio/json/skills.json");
    if (response.ok) {
        const data = await response.json();
        skillList = data;

        displaySkills(skillList);
    }
}

getSkills();