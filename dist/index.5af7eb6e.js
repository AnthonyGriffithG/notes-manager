const e={currentCategory:{name:"",notes:[],currentID:1},categories:[{name:"Reminders",notes:[],currentID:1},{name:"Notes",notes:[],currentID:1}],search:{query:"",notes:[]},favorites:[]},t=function(t){return e.categories.some((e=>e.name===t))},r=function(){localStorage.setItem("state",JSON.stringify(e))};!function(){const t=JSON.parse(localStorage.getItem("state"));t&&(e.categories=t.categories,e.currentCategory=t.categories,e.search=t.search)}(),e.currentCategory=e.categories[0];var n=new class{_parentEl;_formAddCategory;_errorMessage="The category could not be add because it exceeds the characters limit.";_data;_addCategoryBtn;constructor(){this._parentEl=document.querySelector(".category-list"),this._formAddCategory=document.getElementById("new-category-form"),this._addCategoryBtn=document.querySelector(".add-icon"),this._addCategoryBtn.addEventListener("click",this._showForm.bind(this)),this.getFormInput().addEventListener("blur",this._hideForm.bind(this))}getQuery(){return this._parentEl.querySelector(".new-category").value}getFormInput(){return this._parentEl.querySelector(".new-category")}addHandlerCreateCategory(e){this._formAddCategory&&(this._formAddCategory.addEventListener("submit",(t=>{t.preventDefault();const r=this.getQuery();this._parentEl.lastElementChild.classList.toggle("hidden"),r&&(this.getFormInput().value="",e(r))})),this.renderSavedCategories())}addRenderCategoryHandler(e){this._parentEl.addEventListener("click",(t=>{const r=t.target.closest(".category");if(!r)return;this._parentEl.querySelector(".current").classList.remove("current"),r.classList.add("current");const n=r.textContent.trim();e(n)}))}render(e){if(!e)return;this._data=e;const t=this._generateCategoryMarkup(e.name);this._parentEl.querySelector(".current").classList.remove("current"),this._parentEl.lastElementChild.insertAdjacentHTML("beforebegin",t)}renderSavedCategories(){const e=this._data.categories.slice(2).map((e=>this._generateCategoryMarkup(e.name,!1))).join("");this._parentEl.lastElementChild.insertAdjacentHTML("beforebegin",e)}_generateCategoryMarkup(e,t=!0){return`\n    <li class="category ${t?"current":""}">\n      <svg xmlns="http://www.w3.org/2000/svg" class="category-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />\n      </svg>\n      <p>${e}</p>\n    </li>\n    `}_showForm(e){e.preventDefault(),this._parentEl.lastElementChild.classList.remove("hidden"),this.getFormInput().focus()}_hideForm(e){e.preventDefault(),this._parentEl.lastElementChild.classList.add("hidden"),this.getFormInput().value=""}};function a(e){navigator.clipboard.writeText(e).then((function(){}),(function(){}))}function o(e,t){setTimeout((()=>{t()}),e)}var s=new class{_parentEl=document.getElementById("notes");_btnAddNote=this._parentEl.querySelector(".submit-note");_formTextarea=this._parentEl.querySelector("textarea");_noteForm=this._parentEl.querySelector(".new-note-form");_data;_deleteHandler;addNewNoteHandler(e){this._noteForm.addEventListener("submit",(t=>{t.preventDefault();const r=this._formTextarea.value;r&&e(r)}))}renderCategory(e){this._data=e,this._parentEl.querySelectorAll(".note").forEach((e=>e.remove())),e.notes.forEach((e=>{const t=`\n      <div class="note" data-id="${e.id}">\n        <div class="note-body">\n          ${e.note}\n          <p>${e.date}</p>\n        </div>\n        <div class="note-side">\n          <div class="icon-container">\n            <svg xmlns="http://www.w3.org/2000/svg" class="copy-note" viewBox="0 0 20 20" fill="currentColor">\n              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />\n              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />\n            </svg>\n          </div>\n          <div class="icon-container">\n            <svg xmlns="http://www.w3.org/2000/svg" class="delete-note-icon" viewBox="0 0 20 20" fill="currentColor">\n              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />\n            </svg>\n          </div>\n        </div>\n      </div>\n      `;this._noteForm.insertAdjacentHTML("beforebegin",t);const r=this._noteForm.previousElementSibling;r.querySelector(".delete-note-icon").addEventListener("click",(t=>{t.preventDefault(),this._deleteHandler(e.id),r.style.opacity="0",o(500,(()=>r.remove()))}));const n=r.querySelector(".copy-note");n.addEventListener("click",(t=>{t.preventDefault();a(e.note),n.classList.add("icon-active"),o(1e3,(()=>n.classList.remove("icon-active")))}))}))}renderNote(e){if(!e)return;const t=`\n    <div class="note" data-id="${e.id}">\n      <div class="note-body">\n        ${e.note}\n        <p>${e.date}</p>\n      </div>\n      <div class="note-side">\n        <div class="icon-container">\n          <svg xmlns="http://www.w3.org/2000/svg" class="copy-note" viewBox="0 0 20 20" fill="currentColor">\n            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />\n            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />\n          </svg>\n        </div>\n        <div class="icon-container">\n          <svg xmlns="http://www.w3.org/2000/svg" class="delete-note-icon" viewBox="0 0 20 20" fill="currentColor">\n            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />\n          </svg>\n        </div>\n      </div>\n    </div>\n    `;this._noteForm.insertAdjacentHTML("beforebegin",t);const r=this._noteForm.previousElementSibling;r.querySelector(".delete-note-icon").addEventListener("click",(t=>{t.preventDefault(),this._deleteHandler(e.id),r.style.opacity="0",o(500,(()=>r.remove()))}));const n=r.querySelector(".copy-note");n.addEventListener("click",(t=>{t.preventDefault();a(e.note),n.classList.add("icon-active"),o(1e3,(()=>n.classList.remove("icon-active")))})),this._formTextarea.value=""}addHandlerDelete(e){this._deleteHandler=e}getTextAreaElement(){return this._parentEl.querySelector("textarea")}};var i=new class{parentEl=document.getElementById("search-bar");inputEl=this.parentEl.querySelector("#search");searchBTN=this.parentEl.querySelector(".search-icon");deleteQuery=this.parentEl.querySelector(".delete-search-icon");constructor(){this.deleteQuery.addEventListener("click",(e=>{e.preventDefault(),this.inputEl.value=""})),this.parentEl.addEventListener("click",(e=>{e.preventDefault(),this.inputEl.focus()}))}getSearchText(){return this.inputEl.value}addHandlerSearch(e){this.parentEl.addEventListener("submit",(t=>{t.preventDefault();const r=this.getSearchText();e(r)})),this.searchBTN.addEventListener("click",(t=>{t.preventDefault();const r=this.getSearchText();e(r)}))}};const c=function(a){try{!function(n){try{if(t(n))throw new Error("Categoria ya existente");const a={name:n,notes:[],currentID:0};e.categories.push(a),e.currentCategory=a,r()}catch(e){throw e}}(a),n.render(e.currentCategory),s.renderCategory(e.currentCategory)}catch(e){console.log("Ya existe esa categoria")}},l=function(t){!function(t){const r=e.categories.find((e=>e.name.toLowerCase()===t.toLowerCase()));e.currentCategory=r}(t),s.renderCategory(e.currentCategory)},d=function(t){!function(t){const n={note:t,date:new Date(Date.now()).toDateString(),id:e.currentCategory.currentID+1};e.currentCategory.currentID+=1,e.currentCategory.notes.push(n),r()}(t);const n=e.currentCategory.notes.slice(-1)[0];s.renderNote(n)},u=function(t){!function(t){const r=e.currentCategory.notes.filter((e=>e.note.toLowerCase().includes(t.toLowerCase())));e.search.notes=r}(t),s.renderCategory(e.search)},h=function(t){!function(t){for(let[r,n]of e.currentCategory.notes.entries())n.id===t&&e.currentCategory.notes.splice(r,1);r()}(t)};n._data=e,s._deleteHandler=h,n.addHandlerCreateCategory(c),n.addRenderCategoryHandler(l),s.renderCategory(e.currentCategory),s.addNewNoteHandler(d),i.addHandlerSearch(u);
//# sourceMappingURL=index.5af7eb6e.js.map