# WORKLOG – Kiipeilyvarusteet WMS  
09.07.–20.07.2025

## 09.07.2025  
- Asensin kehitysympäristön (Node.js, Git, VSCode) ja kokeilin vähän miten React/Vite-projekti toimii – tai siis *luulin* tekeväni niin.  
- Eka yritys meni pieleen kun loin projektin Litillä, enkä tajunnut sitä heti.  
- Poistin koko jutun ja aloitin uudelleen. Aika paljon säätöä mutta nyt koneessa on kaikki valmiina. | **3.5h**

## 10.07.2025  
- Sain oikean React + Vite -projektin vihdoin pyörimään selaimessa.  
- Aloitin GearList.jsx-komponentin, latasin dataa JSON:sta ja laitoin sen LocalStorageen talteen.  
- Kuvat meni aluksi ihan miten sattuu, testasin `object-fit`-asetuksia ja sain lopulta jotain järkeä näkymään. | **5.0h**

## 11.07.2025  
- Ratkaisin kuvan asettelun ongelmat: `object-fit: contain` ja kiinteä mitoitus toimii.  
- Tutkin Markdownia ja editorin esikatseluasetuksia dokkarin tekemistä varten.  
- Kirjoitin työlogia ja virheitä ylös, loin myös pari dokumentaatiotiedostoa valmiiksi. | **4.0h**

## 12.07.2025  
- Päätin kokeilla Tailwindia mutta homma kosahti heti alkuun: CLI ei toiminut, PostCSS ei toiminut, mikään ei toiminut.  
- Käytin suurimman osan ajasta Tailwindin kanssa tappeluun, mutta opin samalla lisää CSS:n käyttäytymisestä kuvien kanssa. | **4.0h**

## 13.07.2025  
- Heitin pyyhkeen kehään Tailwindin kanssa ja tein kaiken suoraan CSS:llä.  
- Hover-efekti toimii nyt puhtaasti, ja kuvatkin skaalautuvat järkevästi. | **3.0h**

## 14.07.2025  
- GearForm-komponentti tehty: lomakekentät, logiikka ja lisäystoiminto kunnossa.  
- App.jsx:ssä refaktorointia, nyt lomake ohjaa GearList-komponenttia suoraan. | **4.0h**

## 15.07.2025  
- LocalStorage toimii lisäyksissä – testasin kaiken muutaman kerran eri selainistunnoissa.  
- Lisäsin HTML5-validointia ja Constraint Validation API:n.  
- Virheilmoitukset näkyy kenttien alla, tein niille myös pientä CSS-tyyliä. | **4.5h**

## 16.07.2025  
- TrashBin tehty! Drag & Drop toimii ja varusteet poistuvat sekä LocalStoragesta että näkymästä.  
- GearListin kortit menevät nyt vierekkäin ja hover toimii visuaalisesti kivasti.  
- TrashBin kiinnitettiin alareunaan `position: fixed` + vähän tyylejä. | **5.0h**

## 17.07.2025  
- Huomasin pienen bugin LocalStoragen kanssa – lisäykset käytti välillä vanhaa dataa. Korjasin sen.  
- gearData-avain yhtenäistetty ja turha “tyhjennä”-nappi poistettu.  
- gear.json siirretty oikeaan kansioon, toimii. | **3.5h**

## 18.07.2025  
- Tein Maintenance.jsx-komponentin huoltohistorian näyttöön ja uuden huollon lisäykseen.  
- Huoltodata menee LocalStorageen ja synkkaa gearin tilan kanssa.  
- Lisäksi pieniä ulkoasujuttuja: lomake + lista vierekkäin Flexboxilla, leveyden rajoitus keskitetysti. | **6.0h**

## 19.07.2025  
- Käyttöiän visualisointi! Tein UsageCanvas.jsx-komponentin, joka piirtää käyttöprosentit canvasiin.  
- Prosenttilasku logiikka oli aluksi väärin, mutta sain sen korjattua.  
- Korjasin myös tekstin leikkautumisongelman canvasissa (kasvatin leveyttä ja siirsin tekstiä). | **4.5h**

## 20.07.2025  
- Kuvavalinnan lisäys GearFormiin: `<select>`-elementti, validointi ja kuvan esikatselu.  
- Yleisimpien varusteiden kartoitus ja kuvien nimeäminen.  
- Kaikki kuvat lisätty `public/images/`-kansioon ja testattu GearListissä. | **4.5h**

---

## ⏱️ Yhteensä käytetty aika: **51.5 tuntia**

---

## ❌ Virheiden ja ongelmien kirjaus

### ❌ Projekti loi väärän teknologiapohjan (Lit)
- Käytin komentoa npm create vite@latest ... oikein, mutta projektin sisältö viittasi Lit-pohjaan
- Löysin virheen kun ihmettelin tiedostorakennetta (puuttui App.jsx, main.jsx, mukana my-element.js)
- Ratkaisu: poistin virheellisen projektin, loin uuden React + JavaScript -pohjan

### ❌ PowerShell estää skriptien ajon
- npm create epäonnistui: "Running scripts is disabled"
- Opin että PowerShell tarvitsee Set-ExecutionPolicy RemoteSigned -Scope Process
- Jatkossa voisin tehdä pysyvän muutoksen -Scope CurrentUser-asetuksella

### ❌ Markdownin käyttö ja VSCode-ominaisuudet
- Harjoittelin ja googlettelin miten kannattaa README tehdä yms.
- Opin miten syntaksiväritys ja fontit liittyvät VSCode-teemaan
- Opettelin käyttämään koodilohkoja ( bash ), taulukoita ja esikatselun säätöjä, kuvia yms. 

### ❌ Kuvien mittasuhteet aiheuttivat visuaalisia ristiriitoja  
-  w-60 h-40 ja object-cover eivät riittäneet tasaamaan eri mittasuhteiden kuvia (esim. köysi vs. valjaat)  
- Kuvien täyttöaste vaihteli, ja köysi näytti liian pieneltä tai zoomautui näkymättömäksi  
- Ratkaisu: aloin siirtymään style-pohjaiseen width/height-asetteluun ja object-fit: contain + taustaväri

### ❌ Kuvien mukautetut leveydet eivät toimineet odotetusti  
- Käytin w-[240px] ja h-[160px], mutta Vite/Tailwind ei generoinut luokkia oikein  
- Ongelma korostui JIT-kääntäjän ja luokan käytön ajoituksen vuoksi  
- Ratkaisu: vaihdoin Tailwindin vakioluokkiin (w-60, h-40) tai suoraan inline-tyyliin

### ❌ gear.json puuttui ja aiheutti Vite-import-virheen  
- GearList.jsx antoi virheen Failed to resolve import "../data/gear.json"  
- Kävi ilmi, että tiedosto oli poistunut projektista (vahingossa tai siirron seurauksena)  
- Ratkaisu: palautin gear.json oikeaan polkuun ja käynnistin Vite-ympäristön uudelleen

### ❌ Tailwind CSS ei toiminut, vaikka sitä yritettiin perusteellisesti
- tailwindcss init ei toiminut normaalisti: CLI ei ilmestynyt polkuun eikä komennot toimineet
- npx-komennot antoivat virheen "could not determine executable to run" tai require is not defined
- Asennuksia yritettiin monella eri tavalla: npm install, sudo, -g, brew, jne.
- Kaikki @tailwind base;, hover:scale-110, bg-pink-500 yms. luokat eivät näkyneet selaimessa lainkaan
- Tein laajoja selvityksiä ChatGPT:n, Google-haun, Stack Overflow'n, TikTokin ja YouTuben avulla — mikään ei auttanut
- Testilaatikot, värit, hoverit, shadowit — mikään ei tullut näkyviin, vaikka konfiguraatio oli ohjeiden mukaan kunnossa
- Ratkaisu: luovuin Tailwindista ja toteutuin ulkoasu puhtaalla CSS:llä, joka toimi heti luotettavasti

### ❌ Poistetut varusteet ilmestyivät takaisin lisäyksen yhteydessä
- Kun poistin varusteen ja lisäsin uuden, aiemmin poistettu varuste ilmestyi takaisin näkyviin
- Syy: GearForm luki LocalStoragesta vanhaa gear-dataa (loadGear()), joka ei ollut synkassa Reactin tilan kanssa
- Ratkaisu: GearForm muutettiin käyttämään propsina annettua gear-tilaa ja saveGear()-funktiota → tilan ja tallennuksen synkronointi korjaantui

### ❌ gear.json ei latautunut lainkaan sovelluksen alussa
- Oletin gear.jsonin toimivan, mutta mitään esimerkkejä ei ilmestynyt näkyviin tyhjällä LocalStoragella
- Syy: gear.json oli sijoitettu src/-kansioon → fetch("/gear.json") ei löytänyt tiedostoa
- Ratkaisu: gear.json siirrettiin public/-kansioon, jolloin selain pystyi lataamaan sen oikein

## ❌ Git-versionhallinta jäi aluksi pois käytöstä
- Huomasin jälkikäteen, että olin aloittanut projektin ilman, että git oli aktiivisena. Kehitin sovellusta koko ajan
paikallisesti, mutta unohdin tehdä git init ja commitit
- Päätin korjata tilanteen jälkikäteen ja rakensin versionhistorian tarkasti päiväkirjan ja muistiinpanojen perusteella. Tämä oli opettavainen kokemus siitä, miten tärkeää versionhallinnan käyttö on alusta asti
- Käytin GIT_AUTHOR_DATE ja GIT_COMMITTER_DATE -muuttujia, jotta sain committien päivämäärät vastaamaan työlogiani
- Commit-viestit tein huolella jokaisesta päivän vaiheesta

---

## 🔄 Reflektio
Alkuvaiheessa oli yllättäviä teknisiä esteitä, mutta ratkaisin ne itse systemaattisesti. Kirjasin myös oppimani asiat muistiin. Reflektoin ja opin etenkin Tailwindin ja Viten yhteensopivuusongelmista sekä kuvien renderöinnistä selaimessa. Tästä eteenpäin kehitys sujui loogisesti ja jokainen komponentti lisättiin vähitellen. Projekti on nyt valmis, visuaalisesti toimiva ja helposti laajennettavissa.

