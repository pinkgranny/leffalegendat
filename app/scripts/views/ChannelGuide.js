import {bind, wire} from 'hyperhtml';
import config from '../../../config.json';

/**
 * The HyperHTML view displaying the channel guide.
 */
export default class ChannelGuide {
  /**
   * Default constructor for setting the values
   *
   * @param {HTMLElement} element - The HTML element to bind/adopt
   * @param {Array<Object>} [programs=null] - The array containing program data POJOs
   */
  constructor(element, programs = null) {
    this.element = element;
    this.programs = programs;
    this.supportsPUSH = false;
  }

  /**
   * Update the service worker registration handle. Also update the supportsPUSH flag
   *
   * @param {Object} swRegistration - Service Worker registration handle
   * @return {Object} the same handle, to obey the setter convention
   */
  registerWorker(swRegistration) {
    // Update the handle to support PUSH or not
    this.supportsPUSH = 'serviceWorker' in navigator && 'PushManager' in window
      && swRegistration && typeof swRegistration.pushManager === 'object';
    this.swRegistration = swRegistration;

    console.log('Registering worker for channel guide', this.supportsPUSH);
    return swRegistration;
  }

  /**
   * Creates a CTA for the element. In case the video is directly available,
   * show it. Otherwise create a an element to notify when it is available
   *
   * @param {Object} program - The POJO containing program details
   * @return {HTMLElement} element created by hyperHTML (a link or empty text)
   */
  createAction(program) {
    // If the element has playback available, create a CTA for it
    if (program.playbackUrl) {
      return wire()`<a href="${program.playbackUrl}"
        class="mdc-button mdc-button--raised mdc-button--accent mdc-card__action">Katso</a>`;
    }

    // If PUSH notifications are supported, create an action for registering for PUSH
    if (this.supportsPUSH) {
      const element = wire()`
        <button class="mdc-button mdc-button--raised mdc-card__action">Tilaa</button>
      `;
      element.onclick = (event) => this.registerForProgram(event, program);
      return element;
    }

    // Else create no action (empty string)
    return wire()``;
  }

  /**
   * A helper to transform Base64 encoded string into a Uint8Array.
   *
   * Source: https://github.com/GoogleChromeLabs/web-push-codelab/blob/master/app/scripts/main.js
   *
   * @param {String} base64String - The Base64 encoded string
   * @return {Uint8Array} The converted array in unsigned 8-bit integer
   */
   static urlB64ToUint8Array(base64String) {
     const padding = '='.repeat((4 - base64String.length % 4) % 4);
     const base64 = (base64String + padding)
       .replace(/\-/g, '+')
       .replace(/_/g, '/');

     const rawData = window.atob(base64);
     const outputArray = new Uint8Array(rawData.length);

     for (let i = 0; i < rawData.length; ++i) {
       outputArray[i] = rawData.charCodeAt(i);
     }
     return outputArray;
   }

  /**
   * Tries to register the application to notify on the given program availability.
   *
   * Note PUSH Notifications don't transfer contextual metadata - it just registers for PUSH
   * TODO Register the programs to track with a separate API - (not in scope of the example).
   *
   * @param {Event} event - The DOM event triggering the action
   * @param {object} program - The program to send the notifications for
   * @return {boolean} false to prevent default DOM event handling & bubbling up
   */
  async registerForProgram(event, program) {
    console.log(`Registering customer as subscribef for program ${program.id}`);

    // Register a new subscription (returns the old one if one exists)
    const key = config.notifications.publicKey;
    console.log(`Registering PUSH notifications with key '${key}'`);
    const subscription = await this.swRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: ChannelGuide.urlB64ToUint8Array(key),
    });

    // TODO Send the PUSH notification to the server
    await fetch('/api/subscriptions/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: subscription,
        program: program,
      }),
    });

    // Prevent execution of the other eventhandlers
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    return false;
  }

  /**
   * Renders the channel guide.
   *
   * @return {HTMLElement} The rendered element
   */
  render() {
    console.log(`Render channel guide, ${this.programs.length} elements`);

    return bind(this.element)`
      ${ this.programs.map((p) => wire()`
        <div class="mdc-card">
          <section class="mdc-card__primary">
            <h2 class="mdc-card__subtitle">
              ${ p.startTime.getHours() }:${ String(p.startTime.getMinutes()).padStart(2, '0') }
            </h2>
            <h1 class="mdc-card__title mdc-card__title--large">${ p.title }</h1>
          </section>
          <section class="mdc-card__supporting-text">${ p.description }</section>
          <section class="mdc-card__actions" style="justify-content: flex-end">
            ${this.createAction(p)}
          </section>
        </div>
      `)}
    `;

    // Attach the scroller - this is done after templating to permit the right behaviour
    // const tabBarScroller =
    //  new MDCTabBarScroller(document.querySelector('.mdc-tab-bar-scroller'));
  }
}
