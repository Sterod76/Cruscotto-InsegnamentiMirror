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
| LT, LM | 2012-2015 | elenchi (Wayback), con lo stile in `_wayback/`; per la LM 2015/16 anche le 67 schede di valutami |

Asset condivisi (CSS/JS/img/font UNIPI): ~130 file.

## Sorgente

Le pagine sono state scaricate dal sito ufficiale **valutami** dell'Università
di Pisa (`https://esami.unipi.it/programmi_insegnamenti.php?...` per la
Triennale, `https://esami.unipi.it/esami2/programmi_insegnamenti.php?...` per
la Magistrale), preservando i link reciproci tra lista e dettagli e gli
asset grafici originali. I link a risorse esterne (docenti su unimap,
libri citati nei programmi) restano come URL assoluti e si aprono online.

### Gli anni dalla Wayback Machine (2012/13 → 2015/16)

Le otto pagine `LT-2012` … `LM-2015` sono gli elenchi del vecchio sito del
Dipartimento (`www.df.unipi.it/didatticanuova/…`, Drupal) come li ha
conservati la Wayback Machine. Dal 2026-10-24 portano con sé il loro stile:
fogli di stile e immagini del vecchio sito sono copiati in `_wayback/`
(`tools/mirror_wayback_stile.py`), senza script, così il layout si vede anche
dove la pagina non può caricare nulla da web.archive.org (l'archivio su
ADM HUB è in sandbox).

La colonna **Info extra** puntava alle pagine dei corsi su Claroline
(`corsidf.df.unipi.it`), che la Wayback non ha conservato (ne ha una sola,
del 2017); nemmeno le schede dei corsi del sito Drupal (`node/1416`,
`node/1029`) sono state archiviate. Ora il link porta alla fonte originale
migliore che esiste per quel codice e quell'anno, e il `title` dice quale:

- il **registro delle lezioni** su unimap (dal database del censimento, il
  registro con più ore), che dice lezione per lezione cosa si è fatto in aula;
- altrimenti, solo per la **LM 2015/16**, la scheda su valutami, copiata qui
  (`LM-2015/programma-*.html`, più la lista in `LM-2015/valutami.html`):
  docente, moduli e ore, ma il programma per quell'anno valutami non lo ha
  («Programma non disponibile» in tutte e 67); per gli anni prima valutami
  non ha nulla;
- altrimenti resta il link di prima (la Wayback dirà che la pagina non c'è).

Il link originale resta nell'attributo `data-originale`. I link ai registri
dei docenti del 2012/13 e 2013/14 (`unimap.unipi.it/registri/registri.php`)
vanno a unimap direttamente: funzionano ancora.

Script di generazione (`mirror_esami.py`, `mirror_wayback.py`, `mirror_wayback_stile.py`, `inject_sort.py`)
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
