# LeffaLegendat
PWA study project that searches MovieDB API for actor names and then try finds their movies from YLE API.

## Code in the Woods
[Code in the Woods](https://www.codeinthewoods.fi/) oli huikea viiden päivän leiri, jonka aikana opimme tekemään web-sovelluksia kännykälle PWA-tekniikalla. Samalla opimme kurssin mentoreilta käytäntöjä mm. käyttöliittymäsuunnittelusta, versionhallinnasta, työkaluista ja monista muista asioista.
Tapahtuman aikana suunniteltiin ja rakennettiin mobiilisovellus 4 hengen pienryhmissä. Meidän ryhmäämme kuuluivat Eero, Kaisa, Taina ja Teemu. <br /><br />
Leirin järjestivät **Barona Technologies ja Forenom**

## Screenshotteja applikaatiosta

**Etusivu**:: 
Haku näkymä ja linkit käytettyihin API palveluihin.<br />
![Haku](/docs/screenshots/search.png)

**Haun tulokset**::
Haun tulokset listautuvat näytön koosta riippuen 1-4 vierekkäin.<br />
![Haku](/docs/screenshots/results.png)

**Push-notifikaatio**::
PWA tekniikan keskeisimpiä ominaisuuksia on käyttäjän mahdollisuus tilata muistutuksia.<br />
![notifikaatio](/docs/screenshots/notification.png)

<br /><br />
## Käytetyistä välineistä

**Tech Stack**
- PWA (webbisivun kehitys mobiiliapsiksi)
-- Service Worker (offlinetuki ja notifikaatiot)
-- Web App Manifest (miten applikaatio näkyy mobiilisti)
- SinglePageApp (vain index.html ja kaikki muu JS tiedostoissa)
- Node.js
- Git (versionhallinta)
- Insomnia (REST-selaintyökalu)
- hyperHTML
- JavaScript (ES6)
- HTML, CSS
- SASS (CSSn seuraava taso)
- Gulp (buildinhallintatyökalu)
- Webpack (moduulien yhteenniputtaja julkaisua varten)
- Babel (Javascript versioiden yhteensovittaja)
- Lint (kielipoliisi)
- Material Components-komponenttikirjasto (käyttöliittymän ulkoasuun)
- Googlen Workbox-kirjasto (helpotusta service workkerin hallintaan)
- Web-API kutsut
- JSON (rakenteellisen tiedon kuvausmuoto)

**Työvälineet**
- Atom-tekstieditori
- Chrome-selain (erityisesti debuggaus)
- Android-puhelin

**Projektinhallinta**
- Trello

## Projektista
[Kurssia varten rakennettiin (järjestäjien toimesta) yksinkertainen Web-sovellus](https://github.com/codeinthewoods/now-playing-yle), joka **otettiin tämän appsin pohjaksi**
Pohja
- toteuttaa Service Workereista Offline-tuen ja PUSH-viestit
- käyttää YLE APIa
- soveltaa Googlen Web Starter Kit - pohjaa
Näin päästiin suoraan asiaan tehokkaasti. 

Päätimme tiimimme kesken, että tämä jätetään siihen muotoon, johon saimme sen leirin aikana. Mikäli joku meistä intoutuu sen kanssa jatkamaaan, tekee hän tästä oman branchin tai muuten kopion omaan gittiinsä. 
