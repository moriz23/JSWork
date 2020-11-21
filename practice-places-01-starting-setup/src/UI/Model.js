export class Modal {
  constructor(contentId, fallBackText){
    this.fallBackText = fallBackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById('modal-template');
    this.modalElements = document.importNode(this.modalTemplateEl.content, true);
    this.modalElement = this.modalElements.querySelector('.modal');
    this.backdropElement = this.modalElements.querySelector('.backdrop');
  }
  show(){
    if('content' in document.createElement('template')) {
      const contentElement = document.importNode(this.contentTemplateEl.content, true);
      
      this.modalElement.appendChild(contentElement);

      document.body.insertAdjacentElement('afterbegin', this.modalElement);
      document.body.insertAdjacentElement('afterbegin', this.backdropElement);
    } else {
      // fallback code
      alert(this.fallBackText);
    }
  }

  hide(){
    if(this.modalElement) {
      document.body.removeChild(this.modalElement);
      document.body.removeChild(this.backdropElement);
      this.modalElement = null;
      this.backdropElement = null;
    }
  }
}