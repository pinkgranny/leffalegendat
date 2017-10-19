import {bind, wire, render} from 'hyperhtml';
//import {MDCTextfield} from '@material/textfield';
import MaterialDateTimePicker from 'material-datetime-picker';


/**
 * A sample dummy
 */
export default class tilaaPush {
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
    console.log(`Render tilaaPush`);

    const input = document.querySelector('.c-datepicker-input');
    const picker = new MaterialDateTimePicker()
    .on('submit', (val) => {
          console.log(val.format("DD/MM/YYYY"));
          console.log(val.format("hh:mm"))
          console.log(val.format("A"))
        });

  //  .on('submit', (val) => console.log(`data: ${val}`))
  //  .on('open', () => console.log('opened'))
  //  .on('close', () => console.log('closed'));

    const element = bind(this.element)`

    <div class="mdc-card">
      <section class="mdc-card__primary">
        <h1 class="mdc-card__title mdc-card__title--large">Muistuta minua leffasta</h1>
      </section>
      <section class="mdc-card__supporting-text">
        <div data-mdc-auto-init class="mdc-textfield mdc-textfield--upgraded
          mdc-textfield--fullwidth">
          <input
            placeholder="Päivämäärä ja aika"
            onfocus=${openPicker}
            type="text"
            class="mdc-textfield__input"
            id="my-textfield"
            aria-controls="my-textfield-helptext"
            data-demo-no-auto-js="">
          <label
            for="my-textfield"
            class="mdc-textfield__label">
          </label>

          <div class="mdc-textfield__bottom-line" style="transform-origin: 112.5px center"></div>

        </div>
        <div>
        <section class="mdc-card__actions">
          <button
            class="mdc-button mdc-button--raised mdc-button--accent mdc-card__action"
            onclick="window.location.href='#opening'">
              Lisää muistutus
          </button>
        </section>
        </div>
      </section>
    </div>
    `;

    function openPicker() {
      console.log('opening')
      picker.open()
    }

    //console.log('heippa', MDCTextfield);


    return element;
  }
}
