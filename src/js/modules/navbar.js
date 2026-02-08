import { qs } from "../core/dom.js";
import { on } from "../core/events.js";


export default function initNavbar() {
const toggle = qs("#navToggle");
const links = qs("#navLinks");


on(toggle, "click", () => links.classList.toggle("hidden"));
}