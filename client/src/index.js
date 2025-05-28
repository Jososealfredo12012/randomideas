// import "@fortawesome/fontawesome-free/css/all.css";
import Modal from "./components/Modal.js";
import "./css/style.css";
import IdeaForm from "./components/IdeaForm.js";
import IdeaList from "./components/idealist.js";

new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
new IdeaList();
