import { qs } from "../core/dom.js";
import { on } from "../core/events.js";


export default function initModal() {
const modal = qs("#modal");
const open = qs("#openModal");
const close = qs("#closeModal");


on(open, "click", () => modal.classList.remove("hidden"));
on(close, "click", () => modal.classList.add("hidden"));
}