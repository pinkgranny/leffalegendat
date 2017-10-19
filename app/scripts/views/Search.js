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

    <!-- haku kentät  -->

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
          id="searchButton">
            Suorita haku
        </button>
      </section>
      <section class="mdc-card__supporting-text"><p></p></section>

    </div>

    <!-- tiimin esittely -->

    <div class="mdc-card mdc-card--theme-dark demo-card demo-card--bg-demo"
      style="height: 21.875rem;
        background: url(./images/tiimi.jpg) ;
        background-size: cover;
        background-repeat: no-repeat;"
    >
      <section
        class="mdc-card__primary"
        style="background: rgba(0,117,108,0.7);"
      >
        <h1 class="mdc-card__title mdc-card__title--large">LeffaLegendat Tiimi</h1>
        <h2 class="mdc-card__subtitle">Taina, Kaisa, Eero ja Teemu</h2>
      </section>
    </div>


    <!-- API linkit -->

<div class="mdc-card mdc-card--theme-dark demo-card demo-card--bg-demo"
        >
          <section
            class="mdc-card__primary"
            style="background: rgba(0,117,108,0.7);"
          >
            <h1 class="mdc-card__title mdc-card__title--large">Käytimme kahta APIa</h1>
            <h2 class="mdc-card__subtitle"></h2>
          </section>
          <section
            class="mdc-card__actions"
            style="background: rgba(0,117,108,0.7);"
          >
            <button
              class="
                mdc-button
                mdc-button--raised
                mdc-button--accent
                mdc-card__action"
              onclick="window.location.href='http://developer.yle.fi/'"
            >
                YLE API
            </button>
            <button
              class="
                mdc-button
                mdc-button--raised
                mdc-button--accent
                mdc-card__action"
                onclick="window.location.href='https://www.themoviedb.org/documentation/api'"
                target="_blank"
            >
              The Movide DB
            </button>
          </section>
        </div>

    `;
    const textField = element.querySelector('.mdc-textfield');
    //console.log('heippa', MDCTextfield);
    MDCTextfield.attachTo(textField);

    document.getElementById("searchButton").addEventListener("click", function() { document.location.hash = "#haku/" + document.getElementById("my-textfield").value }, false);

    return element;
  }
}
