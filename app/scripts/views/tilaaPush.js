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
    this.selectedDate = null;
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
          console.log(val.format("hh:mm"));
          console.log(val.format("A"));
          this.selectedDate = val;
          this.render();
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
            value=${this.selectedDate}
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
            onclick=${this.showNotification.bind(this)}>
              Lisää muistutus
          </button>
        </section>
        </div>
      </section>
    </div>
    `;

    //console.log('heippa', MDCTextfield);

    function openPicker() {
      console.log('opening')
      picker.open()
    }

    return element;
  }



     showNotification(){
      console.log('check if notification is allowed');

      // Let's check if the browser supports notifications
      if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
      }

      // jos ei ole vielä lupaa, kysytään saadaanko se
      if (Notification.permission !== "denied") {
        Notification.requestPermission();
      }

      // Let's check whether notification permissions have already been granted
      if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        console.log('schedule notification 20 sec from now');
        // haetaan ajanhetki nyt
        var now = new Date().getTime();
        // odotellaan, että aika kuluu
        while(new Date().getTime() < now + 20000){
          /* do nothing */
        }
        this.notifyMe('Leffasi on nyt katsottavissa!');
      }

    }

     notifyMe(notiText) {
        var notification = new Notification(notiText);
    }



}
