# Mirror offline esami.unipi.it — Fisica (Pisa)

Snapshot statico delle pagine `esami.unipi.it` per il CdS Fisica (Pisa),
lista insegnamenti + programmi singoli, per AA **2016/17 → 2023/24**.

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

Asset condivisi (CSS/JS/img/font UNIPI): ~130 file.

## Sorgente

Le pagine sono state scaricate dal sito ufficiale **valutami** dell'Università
di Pisa (`https://esami.unipi.it/programmi_insegnamenti.php?...` per la
Triennale, `https://esami.unipi.it/esami2/programmi_insegnamenti.php?...` per
la Magistrale), preservando i link reciproci tra lista e dettagli e gli
asset grafici originali. I link a risorse esterne (docenti su unimap,
libri citati nei programmi) restano come URL assoluti e si aprono online.

Script di generazione: `tools/mirror_esami.py` nel repo
[OsirisDF](https://codeberg.org/Sterod76/Admin-CensimentoCdS).

## Uso

- Online (Codeberg Pages): `https://sterod76.codeberg.page/Admin-CensimentoCdS-Mirror/`
- Locale: doppio click su `index.html`

## Licenza / disclaimer

Tutti i contenuti sono **pubblici** e provengono dal portale ufficiale
dell'Università di Pisa. Questo mirror è un artefatto archivistico per
consultazione e ricerca: l'autorità sui dati resta dell'Ateneo.
