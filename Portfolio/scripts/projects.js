const projectsClass = document.querySelector(".projects");

let projectsList = {};

const displayProject = (projects) => {
    projects.forEach(project => {
        const article = document.createElement("article");
        const imgDiv = document.createElement("div");
        const img = document.createElement("img");
        const content = document.createElement("div");

        const title = document.createElement("h3");
        const description = document.createElement("p");
        const footer = document.createElement("footer");
        const code = document.createElement("a");
        const preview = document.createElement("a");

        title.textContent = project.name;
        img.setAttribute("src", project.src);
        img.setAttribute("alt", project.name);
        img.setAttribute("loading", "lazy");

        description.textContent = project.desc;
        code.setAttribute("href", project.github);
        preview.setAttribute("href", project.web);

        imgDiv.appendChild(img);
        article.appendChild(imgDiv);
        content.appendChild(title);
        content.appendChild(description);
        article.appendChild(content);
        footer.appendChild(code);
        footer.appendChild(preview);
        article.appendChild(footer)

        projectsClass.appendChild(article);
    })
}

const getProjects = async () => {
    const response = await fetch("./json/projects.json");
    if (response.ok) {
        const data = await response.json();
        projectsList = data;

        displayProject(projectsList);
    }
}

getProjects();