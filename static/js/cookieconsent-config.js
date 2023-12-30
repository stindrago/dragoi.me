import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.umd.js';

/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: 'en',
        autoDetect: 'document',
        translations: {
            en: {
                consentModal: {
                    title: 'We use cookies',
                    description: 'This website, dragoi.me, uses cookies to ensure the best experience. For more information, please visit our <a href="/en/privacy-policy" target="_blank">Privacy Policy</a> and <a href="/en/terms-and-conditions" target="_blank">Terms and Conditions</a>.',
                    acceptAllBtn: 'Accept all',
                    // acceptNecessaryBtn: 'Reject all',
                    showPreferencesBtn: 'Manage preferences',
                    footer: '<a href="/en/privacy-policy" target="_blank">Privacy Policy</a><a href="/en/terms-and-conditions" target="_blank">Terms and Conditions</a>'
                },
                preferencesModal: {
                    title: 'Manage cookie preferences',
                    acceptAllBtn: 'Accept all',
                    // acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Accept current selection',
                    closeIconLabel: 'Close modal',
                    serviceCounterLabel: 'Service|Services',
                    sections: [
                        {
                            title: 'Cookie Usage',
                            description: 'We use cookies to improve your experience on our website. Cookies are small data files that help us understand how our site is being used, allowing us to enhance your user experience.'
                        },
                        {
                            title: 'Performance and Analytics',
                            description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you. They help us understand visitor interactions by tracking information such as click-through rates and page visits.',
                            linkedCategory: 'analytics'
                        }
                    ]                    
                }
            },
            it: {
                consentModal: {
                    title: 'Utilizziamo i cookie',
                    description: 'Questo sito web, dragoi.me, utilizza i cookie per garantire la migliore esperienza. Per maggiori informazioni, visita la nostra <a href="/it/informativa-sulla-privacy" target="_blank">Informativa sulla Privacy</a> e i <a href="/it/termini-e-condizioni" target="_blank">Termini e Condizioni</a>.',
                    acceptAllBtn: 'Accetta tutti',
                    // acceptNecessaryBtn: 'Rifiuta tutti',
                    showPreferencesBtn: 'Gestisci le preferenze',
                    footer: '<a href="/it/informativa-sulla-privacy" target="_blank">Informativa sulla Privacy</a><a href="/it/termini-e-condizioni" target="_blank">Termini e Condizioni</a>'
                },
                preferencesModal: {
                    title: 'Gestisci le preferenze dei cookie',
                    acceptAllBtn: 'Accetta tutti',
                    // acceptNecessaryBtn: 'Rifiuta tutti',
                    savePreferencesBtn: 'Accetta la selezione corrente',
                    closeIconLabel: 'Chiudi il modulo',
                    serviceCounterLabel: 'Servizio|Servizi',
                    sections: [
                        {
                            title: 'Uso dei Cookie',
                            description: 'Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito web. I cookie sono piccoli file di dati che ci aiutano a capire come viene utilizzato il nostro sito, permettendoci di migliorare l\'esperienza utente.'
                        },
                        {
                            title: 'Prestazioni e Analitiche',
                            description: 'Questi cookie raccolgono informazioni su come utilizzi il nostro sito web. Tutti i dati sono anonimizzati e non possono essere utilizzati per identificarti. Ci aiutano a capire le interazioni dei visitatori tracciando informazioni come i tassi di clic e le visite alle pagine.',
                            linkedCategory: 'analytics'
                        }
                    ]                    
                }
            }
        }
    }
});