import { fakeFetch } from "../core/api.js";
import { qs } from "../core/dom.js";


(async () => {
const list = qs("#projectList");
if (!list) return;


const projects = await fakeFetch();


list.innerHTML = projects
.map(p => `<li>${p.name}</li>`)
.join("");
})();