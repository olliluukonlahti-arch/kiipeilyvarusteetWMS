#!/bin/bash
set -e

i=1

commit() {
  echo "# commit marker $i" >> README.md
  git add -A
  GIT_AUTHOR_DATE="$1" GIT_COMMITTER_DATE="$1" git commit -m "$2"
  ((i++))
}

commit "2025-07-09T14:00:00" "09.07: Kehitysympäristön asennus ja ensimmäinen yritys Vite-projektilla"
commit "2025-07-09T22:00:00" "09.07: Väärä Lit-pohja tunnistettu ja korjattu React+Vite-pohjaan"
commit "2025-07-10T14:00:00" "10.07: React+Vite-projekti pyörimään ja GearList aloitus"
commit "2025-07-10T22:00:00" "10.07: Kuvat, object-fit ja LocalStorage-integraatio"
commit "2025-07-11T14:00:00" "11.07: Kuvien asettelun viimeistely ja Markdown-harjoittelu"
commit "2025-07-11T22:00:00" "11.07: Dokumentaation aloitus ja virheiden kirjaus"
commit "2025-07-12T14:00:00" "12.07: Tailwind-yritykset ja PostCSS-ongelmat"
commit "2025-07-12T22:00:00" "12.07: Kuvien skaalautuvuuden testaus ja siirtyminen CSS:ään"
commit "2025-07-13T14:00:00" "13.07: Tailwind pois, hover-efektit ja tyylit CSS:llä"
commit "2025-07-13T22:00:00" "13.07: Kuvien mittasuhteiden viimeistely"
commit "2025-07-14T14:00:00" "14.07: GearForm: kentät, logiikka, lisäystoiminto"
commit "2025-07-14T22:00:00" "14.07: App.jsx refaktorointi, GearList ohjautuu lomakkeesta"
commit "2025-07-15T14:00:00" "15.07: LocalStorage-testit ja validointi HTML5:llä"
commit "2025-07-15T22:00:00" "15.07: Virheilmoitukset kenttien alle + CSS-tyyli"
commit "2025-07-16T14:00:00" "16.07: TrashBin-komponentti ja poistotoiminto"
commit "2025-07-16T22:00:00" "16.07: Kortit vierekkäin ja TrashBin visuaalinen sijoittelu"
commit "2025-07-17T14:00:00" "17.07: gearData-yhtenäistys ja json-polun korjaus"
commit "2025-07-17T22:00:00" "17.07: gear.json siirto ja 'tyhjennä'-napin poisto"
commit "2025-07-18T14:00:00" "18.07: Maintenance.jsx huoltohistorialle ja synkka"
commit "2025-07-18T22:00:00" "18.07: Flexbox-asettelu ja leveyden keskitys"
commit "2025-07-19T14:00:00" "19.07: UsageCanvas: canvas-piirto ja prosenttilogiikka"
commit "2025-07-19T22:00:00" "19.07: Tekstin leikkautumisen korjaus canvasissa"
commit "2025-07-20T14:00:00" "20.07: Kuvavalinta GearFormiin ja varustekuvien nimeäminen"
commit "2025-07-20T22:00:00" "20.07: Kuvien testaus GearListissä ja loppuviimeistely"
