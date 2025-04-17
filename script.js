import { projectsInfo } from "./projects.js"

const next = document.getElementById("next")
const back = document.getElementById("back")
const projects = document.getElementById("projects")

const gap = 30
const width = projects.offsetWidth

document.addEventListener("DOMContentLoaded", event => {
    projectsInfo.forEach(project =>{
        const container = document.createElement("div")
        container.classList.add("project-card")

        const title = document.createElement("h3")
        title.innerText = project.projectName
        title.classList.add("project-title")

        const image = document.createElement("img")
        image.src = project.projectImage
        image.classList.add("project-image")

        const desc = document.createElement("p")
        desc.innerText = project.projectDesc
        desc.classList.add("project-text")

        const githublink = document.createElement("a")
        githublink.href = project.projectLink
        githublink.innerText = "Link"
        githublink.classList.add("project-link")

        container.append(image)
        container.append(title)
        container.append(desc)
        container.append(githublink)

        projects.append(container)


    })
})