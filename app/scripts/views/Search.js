import {bind} from 'hyperhtml';
import {MDCTextfield} from '@material/textfield';

/**
 * A sample dummy
 */
export default class Search {
  /**
   * Default constructor for setting the values
   *
   * @param {HTMLElement} element - The HTML element to bind/adopt
   */
  constructor(element) {
    this.element = element;
  }

  /**
   * Renders the player.
   *
   * @return {HTMLElement} The rendered element
   */
  render() {
    console.log(`Render Search`);

    const element = bind(this.element)`
    <div class="mdc-card">
      <section class="mdc-card__primary">
        <h1 class="mdc-card__title mdc-card__title--large">Näyttelijän nimi</h1>
      </section>
      <section class="mdc-card__supporting-text">
        <div data-mdc-auto-init class="mdc-textfield mdc-textfield--upgraded
          mdc-textfield--fullwidth">
          <input
            type="text"
            class="mdc-textfield__input"
            id="my-textfield"
            aria-controls="my-textfield-helptext"
            data-demo-no-auto-js="">
          <label
            for="my-textfield"
            class="mdc-textfield__label">
              Etunimi, sukunimi tai molemmat
          </label>
          <div class="mdc-textfield__bottom-line" style="transform-origin: 112.5px center"></div>
        </div>
      </section>
      <section class="mdc-card__actions">
        <button
          class="mdc-button mdc-button--raised mdc-button--accent mdc-card__action"
          onclick="window.location.href='#haunTulokset'">
            Suorita haku
        </button>
      </section>
    </div>
    `;
    const textField = element.querySelector('.mdc-textfield');
    //console.log('heippa', MDCTextfield);
    MDCTextfield.attachTo(textField);

    return element;
  }
}
