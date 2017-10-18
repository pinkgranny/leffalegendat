import {bind} from 'hyperhtml';

/**
 * A sample dummy
 */
export default class MovieList {
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

    return bind(this.element)`

    <!-- Ensin otsikkona haetuttu nimi -->

    <div class="mdc-card">
      <section class="mdc-card__primary">
        <h1 class="mdc-card__title mdc-card__title--large">Tauno Palo</h1>
      </section>
    </div>

    <!-- Sitten CARD listaksi elokuvat  -->

    <div class="mdc-card mdc-card--theme-dark demo-card demo-card--bg-demo"
      style="height: 21.875rem;
      background-image: url(images/TuntematonSotilas.jpg);
      background-size: cover;
      background-repeat: no-repeat;"
    >
      <section
        class="mdc-card__primary"
        style="background: rgba(0,117,108,0.7);"
      >
        <h1 class="mdc-card__title mdc-card__title--large">Leffan nimi</h1>
        <h2 class="mdc-card__subtitle">Kuvaus..</h2>
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
        >
            Action 1
        </button>
        <button
          class="
            mdc-button
            mdc-button--raised
            mdc-button--accent
            mdc-card__action"
        >
            Action 2
        </button>
      </section>
    </div>


    `;
  }
}
