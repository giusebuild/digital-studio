# Digital Studio

Sito statico di presentazione del concept **Digital Studio**, con un percorso rivolto alle imprese e uno alle collaborazioni professionali.

## Posizionamento

Un referente esterno per le esigenze digitali delle imprese: **consulenza, affiancamento continuativo, realizzazione e formazione**.

Il cliente può affidare allo Studio una singola decisione o un progetto, oppure un incarico continuativo per attività e responsabilità concordate. La rete di partner è un modello organizzativo e una possibile fonte di opportunità commerciali reciproche.

Il business model, i prezzi, l'ICP specifico e la rete operativa restano da validare.

## Versioni e pagine

- [Homepage generale](https://giusebuild.github.io/digital-studio/): posizionamento ampio, consulenza, progetti, affiancamento, formazione. Rimane la versione principale, con link per confrontare le ipotesi.
- [Ipotesi Revenue Operations B2B](https://giusebuild.github.io/digital-studio/commerciale/): posizionamento verticale su opportunità commerciali perse, inefficienze nelle vendite e controllo del processo. Proposta da discutere con partner e clienti, non ancora validata.
- [Per i partner](https://giusebuild.github.io/digital-studio/partner/): opportunità commerciali, collaborazione, modalità di lavoro e modulo dimostrativo.

L'architettura consente di aggiungere ulteriori ipotesi come sottopagine, senza sostituire il sito generale. Nessuna pagina nuova assume casi studio o risultati già ottenuti.

## Principi dell'interfaccia

- Estetica editoriale sobria: tipografia e gerarchia prima di decorazioni e icone.
- Layout responsive; navigazione accessibile da tastiera; interazioni minimali.
- Esempio interattivo funzionale nella homepage: tre alternative da confrontare, senza simulare una diagnosi automatica.
- Nessuna immagine stock, metrica inventata, recensione fittizia, analytics o font caricati da servizi esterni.
- I moduli validano i dati localmente e offrono un riepilogo copiabile. **Non inviano messaggi e non raccolgono lead.**

## Struttura

```text
index.html                 Home imprese
partner/index.html         Home partner
assets/styles.css          Base UI e componenti form / navigazione
assets/editorial.css       Identità visiva editoriale e layout responsive
assets/site.js             Menu mobile e moduli demo
assets/editorial.js        Scenario interattivo e preselezione delle richieste
assets/positionings.css     Stili confronto e offerta RevOps
assets/commerciale.js      Interazione demo del processo commerciale
commerciale/index.html    Ipotesi commerciale B2B
assets/icon.svg            Favicon
```

Il sito funziona senza build o dipendenze JavaScript. Per provarlo localmente:

```bash
python3 -m http.server 8080
```

### Pubblicazione

GitHub Pages, branch `main`, cartella `/ (root)`. Ogni aggiornamento del branch pubblica una nuova versione.

Prima di attivare la raccolta reale dei contatti servono un canale di invio, trattamento dati appropriato e informativa privacy.
