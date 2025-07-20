# Itsearviointi – Kiipeilyvarusteet WMS

## Tavoite

Tarkoitus oli tehdä harjoitustyö, joka ei ole pelkästään pakollinen suoritus vaan ihan oikeasti käyttökelpoinen työkalu. Valitsin aiheeksi kiipeilyvarusteiden hallinnan, koska harrastan kiipeilyä ja tällaiselle olisi ihan oikeaa käyttöä. Samalla tietenkin piti saada kaikki kurssin tekniset vaatimukset mukaan.

## Toteutustapa

Sovellus on tehty Reactilla ja Viten avulla. Komponenttirakenne oli itselle tuttu mutta paljon kertausta vaativa juttu, mutta opin paljon. Kaikki data menee LocalStorageen eikä tarvitse backend-palvelinta, joten tämä toimii helposti yhdellä koneella. Lomakkeet, kuvavalinnat, käyttöiän seuranta ja huollot on rakennettu vaiheittain. Käyttöliittymä skaalautuu myös mobiilissa.

Kaikki sujui hyvin, mutta jouduin googlettelemaan ja etsimään tietoa paljon kun esim. bugien selvittämisessä tai kun piti muistella jotain vanhaa JS-syntaksia. Tailwindia yritin, mutta en saanut toimimaan luotettavasti, joten tein kaiken omalla CSS:llä.

## Teknisten vaatimusten toteutuminen

| Vaatimus                        | Toteutustapa                         | Valmis |
|---------------------------------|--------------------------------------|--------|
| React/Vue käyttö                | Käytin Reactia + Viteä               | ✅     |
| HTML-lomake ja validointi       | GearForm + HTML5 + virheilmoitukset | ✅     |
| Drag & Drop                     | TrashBin-komponentti toimii          | ✅     |
| JSON + async + fetch            | gear.json ladataan ekalla kerralla  | ✅     |
| Tapahtumankäsittely             | Lomake, napit, drag, valinnat        | ✅     |
| Canvas-elementti                | UsageCanvas piirtää käyttöiän        | ✅     |
| LocalStorage                    | Tallennus ja luku toimii             | ✅     |
| CSS/JS-animaatiot               | Hover, skaalaus, värit canvasilla    | ✅     |
| Responsiivisuus                 | Flex + media queries                 | ✅     |

Kaikki vaatimuslistan asiat on siis tehty.

## Arvio omasta työskentelystä

Projektin aikana opin paljon Reactin tavasta jakaa asioita pieniin osiin. Opin myös miten propsit ja tilat toimii, ja miten LocalStorageen voi rakentaa oman "tietokannan" ilman backendiä. Vaikein tai turhin osa oli varmaan Tailwindin kanssa sählääminen, joka vei aikaa mutta josta opin myös paljon. Onneksi päätin luopua siitä ajoissa. Muuten hyvä koodaustausta auttoi paljon ja ei yhtään haittaa ole siitäkään, että töissä päässyt seuraamaan mitä vetämäni koodaritiimi tekee JIRA-tikettien avulla. 

Kaikki ominaisuudet tuli rakennettua pala palalta, ja virheitäkin tuli tehtyä paljon. Virheistä löytyy tietoa worklogilta niistä mistä muistin kirjoittaa. Opin kuitenkin virheiden kautta ja sain korjattua kaiken.

Iso apu on myös siitä, että on kesälomalla ja saanut monta päivää putkeen tehdä työtä niin ettei jää useiden päivien taukoja koodamiseen. 

## Kokonaisarvio

Tämä harjoitustyö vastaa kurssin vaatimuksia ja oli todella opettavaista tehdä. Lisäksi toteutettu sovellus jäi käyttöön itselleni, eli projekti ei jää pelkäksi koulutyöksi. Koodi ei ole ehkä täydellistä, mutta toimii hyvin ja myös UAT meni läpi 😁.

## Kehittäjän terveisin

Olli Luukonlahti

