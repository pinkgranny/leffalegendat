import {bind, wire} from 'hyperhtml';
import jsonDemo from '../demoMovieListResult.json';

/**
 * A view for movies
 */
export default class MovieList {
  /**
   * Default constructor for setting the values
   *
   * @param {HTMLElement} element - The HTML element to bind/adopt
   * @param {Array<Object>} [hakutulokset=null] - The array containing data
   */
  constructor(element) {
    this.element = element;
  }

  getStyle(pictureName) {

    const url = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${pictureName}`;
    const style = `
    height: 21.875rem;
    background: url(${url});
    background-size: cover;
    background-repeat: no-repeat;
    `;
    return style;
  }

  /**
   * Renders the player.
   *
   * @return {HTMLElement} The rendered element
   */
  render(hakutulokset) {
    const hashPart = location.hash.replace(/^#/, '');
    const segments = hashPart.split('/');
    var actor = segments[1];
    console.log(`Render Search Results`);
    //console.log(`List is, ${this.movies.length} elements`);
    //const actor = hakutulokset.results[0].name;
    //const movies = hakutulokset.results[0].known_for;
    const movies = hakutulokset.cast;

    return bind(this.element)`

    <!-- Ensin otsikkona haetuttu nimi -->

    <div class="mdc-card">
      <section class="mdc-card__primary">
        <h1 class="mdc-card__title mdc-card__title--large">
         Tulokset: "${ actor }"
        </h1>
      </section>
    </div>

    <!-- Sitten CARD listaksi elokuvat  -->
    ${ movies.map((p) => wire()  `

    <div class="mdc-card mdc-card--theme-dark demo-card demo-card--bg-demo"
      id="${ p.original_title }"
      style="${this.getStyle(p.poster_path)}"
    >
      <section
        class="mdc-card__primary"
        style="background: rgba(0,117,108,0.7);"
      >
        <h1 class="mdc-card__title mdc-card__title--large">${ p.original_title }</h1>
        <h2 class="mdc-card__subtitle">${ p.overview.substring(0, 100) } ...</h2>
      </section>
      <section
        class="mdc-card__actions"
        style="background: rgba(0,117,108,0.7);"
      >
        <button
          disabled="disabled"
          class="
            mdc-button
            mdc-button--raised
            mdc-button--accent
            mdc-card__action"
          onclick="if(!this.disabled) window.open(this.dataset.areenaurl, '_blank');"
        >
            Areenassa
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


    `) } ` ;
  }
}
