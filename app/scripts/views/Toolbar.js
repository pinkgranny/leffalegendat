import {bind, wire} from 'hyperhtml';

/**
 * The HyperHTML view displaying toolbar and program image background.
 */
export default class Toolbar {
  /**
   * Default constructor for setting the values
   *
   * @param {HTMLElement} element - The HTML element to bind/adopt
   * @param {Object} [program=null] - The program to render
   * @param {Array<Object>} [channels=null] - The channels to show in the guide
   */
  constructor(element, program, channels) {
    this.element = element;
    this.program = program;
    this.channels = channels;

    // We handle the elements separately because HyperHTML computes the delta bad.
    this.headerTitle = element.querySelector('.mdc-toolbar__title');
    this.tabBar = element.querySelector('.mdc-tab-bar');
    this.headerBackground = element.querySelector('.header-background');
  }

  /**
   * Infer the tab style for a given channel.
   *
   * @param {Object} channel - The channel POJO to pick the channel from
   * @return {String} Style (mdc-tab with or without mdc-tab--active)
   */
  tabStyle(channel) {
    return `mdc-tab ${ channel.id === this.program.channelId ? 'mdc-tab--active' : ''}`;
  }

  /**
   * Renders the toolbar.
   *
   * @return {HTMLElement} The rendered element
   */
  render() {
    console.log('Render toolbar');

    const transform = `w_${this.element.clientWidth},h_${this.element.clientHeight},c_fit`;
    const url = `http://images.cdn.yle.fi/image/upload/${transform}/${this.program.imageId}.png`;
    const backgroundStyle = `
      background: url(${url}) no-repeat center bottom;
      background-size: cover;
      width: 100%;
      height: 100%;
    `;

    // Render the elements
    bind(this.headerTitle)`${ this.program.channel }`;
    bind(this.tabBar)`${
      this.channels.map((c) => wire(c)`
        <a class="${ this.tabStyle(c) }" href="${ `#channels/${c.id}` }">${ c.title }</a>
      `)
    }`;
    bind(this.headerBackground)`<div style="${backgroundStyle}"></div>`;

    return this.element;
  }
}
