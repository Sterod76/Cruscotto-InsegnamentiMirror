# Mirror offline esami.unipi.it — Fisica (Pisa)

Snapshot statico delle pagine `esami.unipi.it` per il CdS Fisica (Pisa),
lista insegnamenti + programmi singoli per gli AA **2016/17 → 2023/24**, più i
soli elenchi insegnamenti degli AA **2012/13 → 2015/16** recuperati dalla
Wayback Machine.

## Contenuto

```
.
├── index.html          ← cruscotto: tabella AA × LT/LM
├── _assets/            ← CSS / JS / immagini / font UNIPI (condivisi)
├── LT-<aa>/
│   ├── index.html      ← lista insegnamenti (Triennale, AA <aa>/<aa+1>)
│   └── programma-<id>-<aa>.html
└── LM-<aa>/
    ├── index.html      ← lista insegnamenti (Magistrale)
    └── programma-<id>-<aa>.html
```

## Numeri

| Tipo | AA coperti | Pagine dettaglio totali |
|------|---:|---:|
| LT | 2016-2023 (8 AA) | 359 |
| LM | 2016-2023 (8 AA) | 613 |
| LT, LM | 2012-2015 | solo elenchi (Wayback) |

Asset condivisi (CSS/JS/img/font UNIPI): ~130 file.

## Sorgente

Le pagine sono state scaricate dal sito ufficiale **valutami** dell'Università
di Pisa (`https://esami.unipi.it/programmi_insegnamenti.php?...` per la
Triennale, `https://esami.unipi.it/esami2/programmi_insegnamenti.php?...` per
la Magistrale), preservando i link reciproci tra lista e dettagli e gli
asset grafici originali. I link a risorse esterne (docenti su unimap,
libri citati nei programmi) restano come URL assoluti e si aprono online.

Script di generazione (`mirror_esami.py`, `mirror_wayback.py`, `inject_sort.py`)
in `tools/` del repo
[Cruscotto-Insegnamenti](https://github.com/Sterod76/Cruscotto-Insegnamenti),
che contiene questo repository in `sources/mirror/`.

## Uso

- Online (GitHub Pages, branch `main`, radice): <https://sterod76.github.io/Cruscotto-InsegnamentiMirror/>

Il sito online **è infrastruttura**: il cruscotto CensimentoCdS vi rimanda con
un link per ogni AA × LT/LM (tab *Links* del foglio). Non va spento né spostato
senza aggiornare quel tab.

Il file `.nojekyll` è necessario: senza, GitHub Pages ignora le cartelle che
iniziano con `_`, cioè `_assets/`, e le pagine escono senza CSS né immagini.

Fino al 2026-09-24 il sito era servito da Codeberg Pages
(`sterod76.codeberg.page/Admin-CensimentoCdS-Mirror/`), dismesso perché i
contenuti non hanno licenza libera come richiesto dai termini di Codeberg.
- Locale: doppio click su `index.html`

## Licenza / disclaimer

Tutti i contenuti sono **pubblici** e provengono dal portale ufficiale
dell'Università di Pisa. Questo mirror è un artefatto archivistico per
consultazione e ricerca: l'autorità sui dati resta dell'Ateneo.
