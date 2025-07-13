# Kiipeilyvarusteet WMS

## Kuvaus
Sovellus henkilökohtaisten kiipeilyvarusteiden hallintaan. Toteutettu TIEA2120-harjoitustyönä Reactilla (Vite + JSX). Käyttäjä voi lisätä, tarkastella, huoltaa ja poistaa kiipeilyvarusteitaan. Kaikki tiedot tallennetaan selaimen LocalStorageen.

## Teknologiat
- React (Vite)
- HTML5, CSS3, JavaScript
- Drag & Drop API
- Canvas API
- LocalStorage
- Responsiivinen käyttöliittymä

## Asennus ja ajo
npm install
npm run dev
avaa selaimessa: http://localhost:5173

## Projektin rakenne

Polku / tiedosto            Kuvaus
──────────────────────────  ──────────────────────────────────────
src/components/             Kaikki käyttöliittymäkomponentit
- GearList.jsx              Näyttää varustelistan
- GearForm.jsx              Lomake varusteen lisäämiseksi
- TrashBin.jsx              Roskakori drag & drop -toiminnolle 
- UsageCanvas.jsx           Visualisoi käyttöiän palkkina canvasilla
- Maintenance.jsx           Näyttää ja lisää huoltomerkintöjä

src/storage.js              Apufunktiot LocalStorageen tallennusta varten
src/App.jsx                 Sovelluksen pääkomponentti
src/main.jsx                Sovelluksen aloituspiste
public/gear.json            Esimerkkivarusteet (jos LocalStorage tyhjä)

### Kehittäjä
Olli Luukonlahti

### Projektin tavoite

Toteuttaa kiipeilyvarusteiden hallintasovellus, joka toimii oikeasti henkilökohtaisessa käytössä ja täyttää TIEA2120-harjoitustyön kaikki tekniset vaatimukset.

### Huomio 1

Projektiin sisältyy kansio unused_tailwind_test/ ja tiedostoja, jotka liittyivät aiempaan yritykseen käyttää Tailwind CSS:ää. Lopulta päätin käyttää puhdasta CSS:ää, koska Tailwindin konfigurointi osoittautui turhan työlääksi eikä toiminut kunnolla omassa ympäristössä.

### Huomio 2
Tämän harjoitustyön worklog.md-tiedosto on pidetty reaaliaikaisesti päiväkohtaisesti koko kehitystyön ajan. Projektin alussa git-versionhallinta ei ollut vielä aktiivisena, joten versionhistoria (git log) on luotu jälkikäteen worklog.md-tietojen pohjalta. Commitit on ajastettu vastaamaan todellista kehitystyön etenemistä.# commit marker 1
# commit marker 2
# commit marker 3
# commit marker 4
# commit marker 5
# commit marker 6
# commit marker 7
# commit marker 8
# commit marker 9
# commit marker 10
# commit marker 11
# commit marker 12
# commit marker 13
# commit marker 14
# commit marker 15
# commit marker 16
# commit marker 17
# commit marker 18
# commit marker 19
# commit marker 20
# commit marker 21
# commit marker 22
# commit marker 23
# commit marker 24
# commit marker 1
# commit marker 2
# commit marker 3
# commit marker 4
# commit marker 5
# commit marker 6
# commit marker 7
# commit marker 8
# commit marker 9
