import {bind} from 'hyperhtml';

/**
 * The HyperHTML view displaying the video player and channel details.
 */
export default class Player {
  /**
   * Default constructor for setting the values
   *
   * @param {HTMLElement} element - The HTML element to bind/adopt
   * @param {String} [url=null] - The URL to use
   * @param {Object} [program=null] - The program to render
   */
  constructor(element, url=null, program=null) {
    this.element = element;
    this.url = url;
    this.program = program;
  }

  /**
   * Renders the player.
   *
   * @return {HTMLElement} The rendered element
   */
  render() {
    console.log(`Render Player with url '${this.url}'`);
    const start = this.program.startTime;
    const time = `${ start.getHours() }:${ String(start.getMinutes()).padStart(2, '0') }`;

    return bind(this.element)`
      <video autoplay controls width="100%">
        <source src="${this.url}" type="application/x-mpegURL">
        Selaimesi ei tue videosoittoa.
      </video>
      <div class="mdc-card">
        <section class="mdc-card__primary">
          <h2 class="mdc-card__subtitle">${ time }</h2>
          <h1 class="mdc-card__title mdc-card__title--large">${ this.program.title }</h1>
        </section>
        <section class="mdc-card__supporting-text">${ this.program.description }</section>
      </div>
    `;
  }
}
