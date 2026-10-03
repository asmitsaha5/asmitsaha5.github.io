// Turns the PROJECTS array (projects.js) into HTML cards inside #project-list.
const list = document.getElementById("project-list");

function link(href, label, primary) {
  if (!href) return "";                       // no URL -> no button
  return `<a class="btn ${primary ? "btn--primary" : ""}" href="${href}" target="_blank" rel="noopener">${label}</a>`;
}

list.innerHTML = PROJECTS.map(p => `
  <article class="project">
    <h3>${p.title}</h3>
    <p>${p.summary}</p>
    <ul>${p.points.map(x => `<li>${x}</li>`).join("")}</ul>
    <ul class="tags">${p.stack.map(t => `<li>${t}</li>`).join("")}</ul>
    <div class="hero__links">${link(p.live, "Live demo", true)}${link(p.code, "Source code", false)}</div>
  </article>`).join("");
