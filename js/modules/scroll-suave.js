export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if(options === undefined) {
      this.options = {behavior: 'smooth', block: 'start'};
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this) ; //O bind indica qual o this da função
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);

    // forma alternativa
    // const topoSection = section.offsetTop;
  // window.scrollTo({
  //     top: topoSection,
  //     behavior: 'smooth'
  // });
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if(this.linksInternos.length) {
      this.addLinkEvent();
    }
    
    return this;
  }

}

