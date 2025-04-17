import { projectsInfo} from "./projects.js"

const next = document.getElementById("next")
const back = document.getElementById("back")
const projects = document.getElementById("projects")

const gap = 30
const width = projects.offsetWidth

document.addEventListener("DOMContentLoaded", event => {
    projectsInfo.forEach(projects =>{
        const container = document.createElement("div")
        container.classList.add("project-card")

        const title = document.createElement("h3")
        title.innerText = projects.projectName
        title.classList.add("project-title")

        const image = document.createElement("img")
        image.src = projects.projectImage
        image.classList.add("project-image")

        const desc = document.createElement("p")
        desc.innerText = projects.projectDesc
        desc.classList.add("project-text")

        const githublink = document.createElement("a")
        githublink.href = projects.projectLink
    })
})