import Idea from "../../../models/Idea";
import IdeasAPI from "../services/ideasAPI";
import IdeaList from "./idealist";

class IdeaForm {
  constructor() {
    this._formModal = document.querySelector("#form-modal");
    this._ideaList = new IdeaList();
  }

  addEventListener() {
    this._form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  async handleSubmit(e) {
    e.preventDefault();

    const idea = {
      text: this._form.elements.text.value,
      tag: this._form.elements.tag.value,
      username: this._form.elements.username.value,
    };

    // Add idea to server
    const newIdea = await IdeasAPI.createIdea(idea);

    // Add idea to list
    this._ideaList.addIdeaToList(newIdea.data.data);

    // clear fields
    this._form.elements.text.value = "";
    this._form.elements.tag.value = "";
    this._form.elements.username.value = "";

    document.dispatchEvent(new Event("closemodal"));
  }

  render() {
    this._formModal.innerHTML = `
    <form id="idea-form">
          <div class="form-control">
            <label for="idea-text">Enter a Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div class="form-control">
            <label for="idea-text">What's your idea?</label>
            <textarea name="text" id="idea-text"></textarea>
          </div>
          <div class="form-control">
            <label for="tag">Tag</label>
            <select name="tag" id="tag" >
              <option value="technology">technology</option>
              <option value="software">software</option>
              <option value="business">business</option>
              <option value="education">education</option>
              <option value="health">health</option>
              <option value="inventions">inventions</option>
            </select>
          </div>
          <button class="btn" type="submit" id="submit">submit</button>
        </form>
    `;
    this._form = document.querySelector("#idea-form");
    this.addEventListener();
  }
}

export default IdeaForm;
