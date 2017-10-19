import {bind} from 'hyperHTML';

/**
 * The HyperHTML view displaying the video player and channel details.
 */
export default class script {
  /**
   * Default constructor for setting the values
   *
   * @param {HTMLElement} element - The HTML element to bind/adopt
   * @param {String} [url=null] - The URL to use
   * @param {Object} [program=null] - The program to render
   */
 

  /**
   * Renders the player.
   *
   * @return {HTMLElement} The rendered element
   */
  render() {

 

// API configuration
const baseUrl = 'https://external.api.yle.fi/v1';

const YleApiKey = "9b88244eba890a430125b4f19493188c";

const appId = "de33c2d5";

//case 'search':
//var cast = segments[1];
const movieDbKey = "***REMOVED***";
 

var urli = `https://external.api.yle.fi/v1/programs/items.json?app_id=de33c2d5&app_key=${YleApiKey}&id&q&category=5-135&availability=ondemand&order=publication.starttime%3Adesc`;
//alert(urli);

 var response = await fetch(urli);
var json = await response.json();
if(json.results.length > 0) {
  const movieDbKey = "***REMOVED***";
  var urli = `https://api.themoviedb.org/3/person/${json.results[0].id}/movie_credits?api_key=${movieDbKey}`;
  console.log(urli);
  var response = await fetch(urli);
  var json = await response.json();
  console.log(json);
} 
//console.log(json.results);
//return;


//fetch("https://external.api.yle.fi/v1/programs/items.json?app_id=de33c2d5&app_key=9b88244eba890a430125b4f19493188c&id&q&category=5-135&availability=ondemand&order=publication.starttime%3Adesc").then(response => { return response.json() }).then( json => { console.log(json) })

//$.data[0].original_title









  }

}

 


 




 



