---
tags:
- clojure
title: Come creare una pagina web in ClojureScript
categories:
  - clojure
date: 2023-02-24
lastMod: 2023-02-27
image: preview.png
---

- [Demo](https://demo.dragoi.me/responsive-landing-page-in-clojurescript/)
- [Repository](https://git.dragoi.me/costin/responsive-landing-page-in-clojurescript)

# Introduzione

Febbraio 2023 un mese in un anno di abbondanza sia nel mondo reale che nel mondo digitale, un anno che è appena iniziato. Notizie spaventose continuano a colpire tutti noi, dalla [guerra in Ucraina](https://it.wikipedia.org/wiki/Invasione_russa_dell%27Ucraina_del_2022) al [terremoto in Turchia e Siria](https://it.wikipedia.org/wiki/Terremoto_in_Turchia_e_Siria_del_2023), in un periodo in cui l'umanità stava ancora riprendendosi dal [virus epidemico COVID-19](https://it.wikipedia.org/wiki/COVID-19). Un età di alta connessione tra individui in cui i pensieri non sono mai stati condivisi con tata volontà è facilità attraverso Internet.

Nel corso del tempo la crescita in [numero di linguaggi di programmazione](https://it.wikipedia.org/wiki/Lista_dei_linguaggi_di_programmazione) e di framework hanno portato gli sviluppatori alla pazzia. Sulle piattaforme social come [Twitter](https://twitter.com) e [Reddit](https://reddit.com) si tengono continuamente dibattiti apparentemente critici e costruttivi. Basterà solo continuare a scorrere diverse pagine più in fondo che si potranno notare le vere motivazioni. Le parole diventano più dure, le frasi più crudeli e i paragrafi più lunghi. È qui che i dibattiti si trasformano in battaglie e ogni parte suffraga il proprio punto di vista per un unico fine, annichilare l'opposizione. Queste battaglie sono definite **battaglia-dei-linguaggi** o **battaglia-dei-framework**.

Anche io combatto le mie battaglie, e ho portato per voi un semplice progetto per divulgare un paradigma di programmazione controverso e impopolare. Mi riferisco alla programmazione funzionale il cui simbolo è il **lambda (ƛ)** e il linguaggio più moderno è [Clojure](https://it.wikipedia.org/wiki/Clojure).

# Quali strumenti utilizzeremo?

Uno dei linguaggi più utilizzati per la programmazione web è senza dubbio [JavaScript](https://it.wikipedia.org/wiki/JavaScript) e gli accoliti [HTML](https://it.wikipedia.org/wiki/HTML) e [CSS](https://it.wikipedia.org/wiki/CSS).

Poco tempo fa è nato [Clojure](https://it.wikipedia.org/wiki/Clojure) un nuovo linguaggio, un dialetto del appezzato e altrettanto odiato [LISP](https://it.wikipedia.org/wiki/Lisp). Esso ne ha ereditato l'eleganza e le funzionalità, il tutto adattato con comodità aggiuntive alle esigenze moderne. Un linguaggio ospite della [JVM](https://it.wikipedia.org/wiki/Macchina_virtuale_Java) dove anche qui ne ha ereditato i pregi e i difetti.

Con l'aumento in popolarità di [JavaScript](https://it.wikipedia.org/wiki/JavaScript) si è sviluppato attorno una community numerosa che ha contribuito a espandere gli strumenti ben oltre le richieste. Cosi [Clojure](https://it.wikipedia.org/wiki/Clojure) sarebbe andato in ricerca di una nuova piattaforma simbionte. Grazie al ricco ecosistema di [JavaScript](https://it.wikipedia.org/wiki/JavaScript) combinato alle ottimizzazioni fornite dal compilatore Google Closure è nato uno dei linguaggi più potenti che il web abbia mai visto: [ClojureScript](https://clojurescript.org).

Senza l'[HTML](https://it.wikipedia.org/wiki/HTML) non esisterebbe il web come lo conosciamo oggi, un linguaggio di markup con la sintassi XML. Purtroppo questa sintassi non a tutti piacque, e cosi sarebbe nata una nuova libreria per [ClojureScript](https://clojurescript.org) di nome [Hiccup](https://github.com/weavejester/hiccup) con l'obiettivo di tradurre la sintassi XML in una più adatta per i sviluppatori in [Clojure](https://it.wikipedia.org/wiki/Clojure). E se in [HTML](https://it.wikipedia.org/wiki/HTML) scriviamo `<div>...</div>`, visivamente inappagate; nonostante lo sforzo degli editor a venire in soccorso, con [Hiccup](https://github.com/weavejester/hiccup) scriveremo `[:div "..."]`, un modo più chiaro e semplice, un modo alla [Clojure](https://it.wikipedia.org/wiki/Clojure)… Già… Possiamo distinguere una porzione della sintassi di [Clojure](https://it.wikipedia.org/wiki/Clojure): `[]` che di solito rappresenta un contenitore, `:div` una keyword, e `""` una stringa.

Gli utenti quando surfano il web si aspettano un certo piacere visivo che può essere soddisfatto con un l'aggiunta del [CSS](https://it.wikipedia.org/wiki/CSS). Però sono tempi moderni e sono rimasti in pochi gli sviluppatori puristi che programmano in vanilla. E come biasimare la maggioranza, i framework assistono lo sviluppatore a produrre a una velocità singolare. Per questo ho scelto di usare [TailwindCSS](https://tailwindcss.com) che porta classi già implementate che vengono utilizzate direttamente nel codice [HTML](https://it.wikipedia.org/wiki/HTML). In più utilizzeremo anche [DaisyUI](https://daisyui.com), una libreria di componenti.

Un altro framework che utilizzeremo in questo progetto è [Reagent](https://github.com/reagent-project/reagent) un interfaccia in [Clojure](https://it.wikipedia.org/wiki/Clojure) per [React](https://reactjs.org). E queste è tutto ciò che c'è da dire sulla sua esistenza.

[shadow-cljs](https://github.com/thheller/shadow-cljs), che ci approvvigiona con tutti gli utili per compilare il codice [ClojureScript](https://clojurescript.org).

[NPM](https://www.npmjs.com), uno strumento da linea di comando che useremo per installare i pacchetti su cui dipenderà il nostro progetto.

Questi strumenti sono nuovi e carini, ma non eccitatevi troppo, ancora avrete da vedere l'attrazione principale, la sintassi all'hamburger di [LISP](https://it.wikipedia.org/wiki/Lisp).

![](https://res.cloudinary.com/aas-sh/image/upload/v1617292932/blog/2019/07/languages_meme_lisp_smdrnm.png)

# Prima d'inziare installa i requisiti

Lista breve dei requisiti.

- [Java](https://openjdk.org)

- [Clojure](https://clojure.org)

- [nodejs](https://nodejs.org)

Durante questo articolo utilizziamo la shell di Linux.

Per installare i pacchetti su MacOS usa [brew](https://brew.sh). Per Windows esiste un modo attraverso VSCode per avere la shell, più informazioni [qui](https://stackoverflow.com/questions/42606837/how-do-i-use-bash-on-windows-from-the-visual-studio-code-integrated-terminal). Quando installi i programmi attraverso il package manager i comandi potrebbero variare in base alla distribuzione, la mia è Debian. È per questo che è meglio andare sul sito del programma e installarlo secondo le istruzioni ufficiali.

Installa Java, la versione open source: [openjdk](https://openjdk.org).

``` shell
sudo apt update
sudo apt install default-jre default-jdk
java --version
```

Prima d'installare [Clojure](https://it.wikipedia.org/wiki/Clojure), assicurati prima che le dipendenze `bash`, `curl`, `rlwrap` siano installate.

``` shell
which bash curl rlwrap
```

> /bin/bash  
> /usr/bin/curl  
> /usr/local/bin/rlwrap

Altrimenti installli.

``` shell
sudo apt install curl rlwrap
```

Installa [Clojure](https://it.wikipedia.org/wiki/Clojure).

``` shell
curl -O https://download.clojure.org/install/posix-install-1.11.1.1224.sh
chmod +x posix-install-1.11.1.1224.sh
sudo ./posix-install-1.11.1.1224.sh
```

Installa [NodeJS](https://nodejs.org/en/).

``` shell
sudo apt install nodejs
```

Ti consiglio d'installare [VSCode](https://code.visualstudio.com), ma utilizza il binario senza telemetria di [VSCodium](https://vscodium.com).

# Inizializzare il progetto

Inizializziamo il progetto per avere un ambiente di sviluppo adeguato.

Installa e configura l'aiutante di [Clojure](https://it.wikipedia.org/wiki/Clojure) per VSCode: [Calva](https://marketplace.visualstudio.com/items?itemName=betterthantomorrow.calva), oppure guarda [questa](https://clojure.org/guides/editors) lista, potresti trovare un aiutante per il tuo editor preferito.

Inizializza lo scheletro del progetto con **[shadow-cljs](https://github.com/thheller/shadow-cljs)**.

``` shell
npx create-cljs-project ~/Desktop/responsive-landing-page-in-clojurescript
cd ~/Desktop/responsive-landing-page-in-clojurescript
```

## Aggiungi gli script [NPM](https://www.npmjs.com)

In `package.json`.

``` json
{
"scripts": {
  "release": "run-s css:release init:release cljs:release",
  "watch": "run-p css:watch init:watch cljs:watch",
  "init:release": "mkdir -p target/dist && cp -r resources/{assets,index.html} target/dist",
  "init:watch": "mkdir -p target/build && cp -r resources/{assets,index.html} target/build",
  "css:release": "postcss resources/css/tailwind.css --output target/dist/css/main.css --verbose",
  "css:watch": "postcss resources/css/tailwind.css --output target/build/css/main.css --watch --verbose",
  "cljs:release": "clojure -M:cljs release app",
  "cljs:watch": "clojure -M:cljs watch app"
  }
}
```

- Useremo questi **script** durante lo sviluppo.

## Installa le dipendenze

``` shell
npm install react react-dom shadow-cljs tailwindcss daisyui postcss postcss-cli autoprefixer npm-run-all --save
```

## Configura [TailwindCSS](https://tailwindcss.com)

In `tailwind.config.js`.

``` json
module.exports = {
  content: ["./target/**/*.{html,js}"],
  Theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}
```

- _Riga 5_, aggiunto il font Roboto.
- _Riga 10_, aggiunto il plugin [DaisyUI](https://daisyui.com).

In `resources/css/tailwind.css`.

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Aggiunte le classi richieste da [TailwindCSS](https://tailwindcss.com) che [PostCSS](https://postcss.org) risolverà durante la compilazione attraverso un script che abbiamo definito in `package.json`.

## Configura [PostCSS](https://postcss.org)

In `postcss.config.js`.

``` json
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

## Aggiungi le pagine principali

In `resources/index.html`.

``` html
<!doctype html>
<html class="scroll-smooth">

<head>
  <meta charset="utf-8" />
  <link rel="icon" type="image/svg+xml" href="assets/images/1F49F.svg" />
  <link rel="stylesheet" href="css/main.css" />
  <title>Responsive landing page in ClojureScript</title>
</head>

<body>
  <div id="app"></div>
  <script src="js/main.js"></script>
</body>

</html>
```

In `src/main/landing_page/app.cljs`.

``` clojure
(ns landing-page.app
  (:require [reagent.dom :as rd]))

(defn app []
  [:div [:h1 "Hello " [:span {:class "underline decoration-emerald-500"} "World"] "!"]])

(defn start []
  (rd/render [app]
             (.getElementById js/document "app")))

(defn main []
  (start))
```

- _Riga 2_, aggiunta la libreria **reagent.dom**.
- _Riga 4_, definita la funzione **app** che conterrà più avanti tutti i componenti della pagina web.
- _Riga 7_, definita la funzione **start** che monta i componenti nella DOM attraverso **rd/render** che accetta due argomenti.
  - Il primo è **\[app\]**, la chiamata alla funzione **app** nella sintassi di [Reagent](https://github.com/reagent-project/reagent). Può essere anche chiamata nella sintassi di [Clojure](https://it.wikipedia.org/wiki/Clojure) `(rd/render (app) ...)`, però per motivi di efficienza si usa la sintassi di reagent `(rd/render [app] ...)`. Più informazioni nella documentazione ufficiale.
  - Il secondo è `(.getElementById js/document "app")` che prende l'id **app** nel file ``index.html``.
- _Riga 11_, definita la funzione **main** che è chiamata da **[shadow-cljs](https://github.com/thheller/shadow-cljs)** per eseguire l'ambiente di sviluppo.

## Fai partire la modalità sviluppo

``` shell
npm run watch
```

Vai all'indirizzo [http://localhost:8080](http://localhost:8080) e verifica che venga visualizzata la scritta **Hello World!**.

# Sviluppa il sito

Ora che il progetto contiene tutte le parti necessarie strutturiamo la pagina in componenti.

- Hero

Contiene un titolo, una descrizione e un pulsante per scorrere più in basso. È la prima cosa che l'utente vedrà quando si collegherà al sito e dovrà occupare tutto lo spazio della pagina.

- Terminal

Contiene la schermata di un terminale con una breve descrizione su come scaricare questo progetto.

- Footer

Compone la parte finale della pagina. Verranno visualizzati il logo, i social e la licenza.

- Notice

Contiene una notifica pop-up che informerà l'utente sui cookies utilizzati dal sito. Potrà essere chiusa attraverso un pulsante.

- App

`app.cljs`, è il file dove tutti i componenti vengono chiamati.

## Crea il componente **hero**

In `src/main/landing_page/components/hero.cljs`.

``` clojure
(ns landing-page.components.hero)

(defn main []
  [:div {:class "hero min-h-screen bg-base-200"}
   [:div {:class "hero-content text-center"}
    [:div {:class "max-w-md"}
     [:h1 {:class "text-5xl font-bold"} "❤️ ClojureScript"]
     [:p {:class "py-6"} "Build a responsive landing page in ClojureScript, Reagent and TailwindCSS."]
     [:a {:class "btn btn-primary"
          :href "#main"} "Get Started"]]]])
```

- _Riga 1_, definisce il namespace `(ns landing-page.components.hero)`.
- _Riga 3_, definisce la funzione **main**, senza argomenti.
  - All interno della funzione **main** aggiungiamo il `[:div ... ]`, in formato **[Hiccup](https://github.com/weavejester/hiccup)** per definire il layout del componente **hero**.
  - TailiwndCSS è utilizzato all'interno di `{:class "..."}`, che equivale a `class="..."` in [HTML](https://it.wikipedia.org/wiki/HTML).

## Crea il componente **terminale**

In `src/main/landing_page/components/terminal.cljs`.

``` clojure
(ns landing-page.components.terminal)

(defn main []
  [:div {:class "flex justify-center p-8 py-16"
         :id "main"}
   [:div {:class "mockup-code"}
    [:pre {:data-prefix "$"}
     [:code "git clone https://git.dragoi/costin/responsive-landing-page-in-clojurescript"]]
    [:pre {:data-prefix ">", :class "text-warning"}
     [:code "Cloning into 'responsive-landing-page-in-clojurescript'..."]]
    [:pre {:data-prefix "$"}
     [:code "cd responsive-landing-page-in-clojurescript"]]
    [:pre {:data-prefix "$"}
     [:code "npm run release"]]
    [:pre {:data-prefix ">", :class "text-warning"}
     [:code "[:app] Compiling..."]]
    [:pre {:data-prefix ">", :class "text-success"}
     [:code "[:app] Build completed."]]]])
```

## Crea il componente **footer**

In `src/main/landing_page/components/footer.cljs`.

``` clojure
(ns landing-page.components.footer)

(defn main []
  [:footer {:class "footer p-10 bg-neutral text-neutral-content"}
   [:div {:class "flex flex-col"}
    [:svg {:width "50", :height "50", :viewbox "0 0 24 24", :xmlns "[Access denied](http://www.w3.org/2000/svg",) :fill-rule "evenodd", :clip-rule "evenodd", :class "fill-current"}
     [:path {:d "M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"}]]
    [:p "Licensed under"]
    [:a {:href "[Creative Commons](https://creativecommons.org/licenses/by-sa/4.0",) :target "_blank", :class "flex items-center space-x-2"}
     [:span "CC-BY-SA 4.0"]
     [:div {:class "flex items-center space-x-2"}
      [:img {:class "h-4", :src "[404 Not Found](https://mirrors.creativecommons.org/presskit/icons/cc.svg"}])
      [:img {:class "h-4", :src "[404 Not Found](https://mirrors.creativecommons.org/presskit/icons/by.svg"}])
      [:img {:class "h-4", :src "[404 Not Found](https://mirrors.creativecommons.org/presskit/icons/sa.svg"}]]])
    [:br]
    [:p "Made with ♥️ in ClojureScript"]]
   [:div
    [:span {:class "footer-title"} "Social"]
    [:div {:class "grid grid-flow-col gap-4"}
     [:a {:href "https://twitter.com/stindrago"
          :target "_blank"}
      [:svg {:xmlns "[Access denied](http://www.w3.org/2000/svg",) :width "24", :height "24", :viewbox "0 0 24 24", :class "fill-current"}
       [:path {:d "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}]]]
     [:a {:href "[Error 403 (Forbidden)!!1](https://youtube.com/@stindrago")
          :target "_blank"}
      [:svg {:xmlns "[Access denied](http://www.w3.org/2000/svg",) :width "24", :height "24", :viewbox "0 0 24 24", :class "fill-current"}
       [:path {:d "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"}]]]]]])
```

## Crea il componente **notice**

In `src/main/landing_page/components/notice.cljs`.

``` clojure
(ns landing-page.components.notice
  (:require [reagent.core :as r]))

(def state (r/atom {:hidden false}))

(defn main []
  [:div
   {:class (str "toast toast-center sm:toast-start z-10 " (when (:hidden @state) "hidden"))}
   [:div
    {:class "alert shadow-lg"}
    [:div
     [:svg
      {:xmlns "[Access denied](http://www.w3.org/2000/svg",)
       :fill "none",
       :viewBox "0 0 24 24",
       :class "stroke-info flex-shrink-0 w-6 h-6"}
      [:path
       {:stroke-linecap "round",
        :stroke-linejoin "round",
        :stroke-width "2",
        :d "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}]]
     [:div
      [:h3 {:class "font-bold"} "We don't use cookies for no reason!"]
      [:div {:class "text-xs"} "Press the button to dismiss."]]]
    [:div {:class "flex-none"}
     [:button
      {:class "btn btn-sm sm:btn-circle btn-wide"
       :on-click #(swap! state assoc :hidden true)}
      [:svg
       {:xmlns "[Access denied](http://www.w3.org/2000/svg",)
        :class "h-6 w-6",
        :fill "none",
        :viewBox "0 0 24 24",
        :stroke "currentColor"}
       [:path
        {:stroke-linecap "round",
         :stroke-linejoin "round",
         :stroke-width "2",
         :d "M6 18L18 6M6 6l12 12"}]]]]]])
```

- _Riga 2_, `(:require [reagent.core :as r])` serve per importare la libreria **reagent.core**.
- _Riga 4_, `(def state (r/atom {:hidden false}))` definisce un atomo di nome **state**. È una variabile che registra lo stato del componente per determinare se il componente è visibile o nascosto.
- _Riga 8_, `{:class (str "toast toast-center sm:toast-start z-10 " (when (:hidden @state) "hidden"))}`, aggiunge la classe **hidden** se lo stato della variabile **state** è **{:hidden true}**.
- _Riga 28_, `:on-click #(swap! state assoc :hidden true)`, quando si preme il pulsante cambia lo stato di **state** in **{:hidden true}**.

## Chiama i componenti nel file principale

In `src/main/landing_page/app.cljs`.

``` clojure
(ns landing-page.app
  (:require [reagent.dom :as rd]
            [landing-page.components.footer :as footer]
            [landing-page.components.terminal :as terminal]
            [landing-page.components.hero :as hero]
            [landing-page.components.notice :as notice]))

(defn app []
  [:div {:data-theme "dracula"}
   [hero/main]
   [terminal/main]
   [footer/main]
   [notice/main]])

(defn start []
  (rd/render [app]
             (.getElementById js/document "app")))

(defn main []
  (start))
```

- Importati tutti i componenti fino a ora definiti.
- _Riga 8_, in **app** vengono chiamate le funzioni **main** di tutti i componenti.

# Conclusioni

Il sito web è finto. Crea una build per la versione distibuibile.

``` shell
npm run release
```

Il sito si trova in `target/dist`. Può essere fatto il deploy su un qualsiasi web server.
