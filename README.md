# Digital Studio

Sito statico con una pagina principale per scegliere tra due proposte commerciali e due siti separati, navigabili come pagine autonome.

## Percorsi

- [Master](https://giusebuild.github.io/digital-studio/) — scelta visiva tra i due percorsi.
- [Consulenza e progetti](https://giusebuild.github.io/digital-studio/generale/) — problemi aziendali, servizi, metodo e contatti.
- [Performance commerciale B2B](https://giusebuild.github.io/digital-studio/commerciale/) — vendite perse, inefficienze del team commerciale, Revenue Operations e un caso illustrativo interattivo.
- [Partner](https://giusebuild.github.io/digital-studio/partner/) — proposta di collaborazione e sviluppo commerciale per specialisti.

La pagina master serve per confrontare diverse direzioni con i partner. Le due pagine commerciali parlano ai rispettivi clienti, senza etichette come *ipotesi*, *versione* o *simulazione*.

## Struttura

```text
index.html                  Master
generale/index.html         Consulenza e progetti
commerciale/index.html      Revenue Operations
partner/index.html          Professionisti e partner
assets/master.css           Design del master
assets/styles.css           Componenti condivisi
assets/editorial.css        Stile delle pagine
assets/positionings.css     Dettagli pagina RevOps
assets/site.js              Menu mobile e riepiloghi form
assets/editorial.js         Preselezione delle esigenze
assets/commerciale.js       Esempio commerciale interattivo
assets/icon.svg             Favicon
```

Tecnologia: HTML, CSS e JavaScript statici, senza framework, font remoti o tracciamento.

## Limiti dei prototipi

- I moduli dimostrativi **non inviano richieste né salvano dati**. Consentono di copiare un riepilogo del testo inserito.
- Le due proposte non sono validate commercialmente.
- Non sono presenti numeri inventati, testimonianze o risultati attribuiti a clienti inesistenti.
- L'esempio di intervento RevOps è illustrativo, non un caso reale.
- Le landing dedicate sono contrassegnate `noindex` finché il posizionamento non è scelto.
- Per lanciare un sito commerciale reale servono un recapito attivo e gli opportuni adempimenti sul trattamento dei dati.

## Pubblicazione

GitHub Pages dal branch `main`, cartella `/ (root)`.

Per il test locale:

```bash
python3 -m http.server 8080
```
