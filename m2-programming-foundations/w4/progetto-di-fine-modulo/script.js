/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
    { title: 'Marketing Intern', location: 'US, NY, New York' },
    {
        title: 'Customer Service - Cloud Video Production',
        location: 'NZ, Auckland',
    },
    {
        title: 'Commissioning Machinery Assistant (CMA)',
        location: 'US, IA, Wever',
    },
    {
        title: 'Account Executive - Washington DC',
        location: 'US, DC, Washington',
    },
    { title: 'Bill Review Manager', location: 'US, FL, Fort Worth' },
    { title: 'Accounting Clerk', location: 'US, MD,' },
    { title: 'Head of Content (m/f)', location: 'DE, BE, Berlin' },
    {
        title: 'Lead Guest Service Specialist',
        location: 'US, CA, San Francisco',
    },
    { title: 'HP BSM SME', location: 'US, FL, Pensacola' },
    {
        title: 'Customer Service Associate - Part Time',
        location: 'US, AZ, Phoenix',
    },
    {
        title: 'ASP.net Developer Job opportunity at United States,New Jersey',
        location: 'US, NJ, Jersey City',
    },
    {
        title: 'Talent Sourcer (6 months fixed-term contract)',
        location: 'GB, LND, London',
    },
    {
        title: 'Applications Developer, Digital',
        location: 'US, CT, Stamford',
    },
    { title: 'Installers', location: 'US, FL, Orlando' },
    { title: 'Account Executive - Sydney', location: 'AU, NSW, Sydney' },
    {
        title: 'VP of Sales - Vault Dragon',
        location: 'SG, 01, Singapore',
    },
    { title: 'Hands-On QA Leader', location: 'IL, Tel Aviv, Israel' },
    {
        title: 'Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only',
        location: 'GB, SOS, Southend-on-Sea',
    },
    { title: 'Visual Designer', location: 'US, NY, New York' },
    {
        title: 'Process Controls Engineer - DCS PLC MS Office - PA',
        location: 'US, PA, USA Northeast',
    },
    { title: 'Marketing Assistant', location: 'US, TX, Austin' },
    { title: 'Front End Developer', location: 'NZ, N, Auckland' },
    { title: 'Engagement Manager', location: 'AE,' },
    {
        title: 'Vice President, Sales and Sponsorship (Businessfriend.com)',
        location: 'US, CA, Carlsbad',
    },
    { title: 'Customer Service', location: 'GB, LND, London' },
    { title: 'H1B SPONSOR FOR L1/L2/OPT', location: 'US, NY, New York' },
    { title: 'Marketing Exec', location: 'SG,' },
    {
        title: 'HAAD/DHA Licensed Doctors Opening in UAE',
        location: 'AE, AZ, Abudhabi',
    },
    {
        title: 'Talent Management Process Manager',
        location: 'US, MO, St. Louis',
    },
    { title: 'Customer Service Associate', location: 'CA, ON, Toronto' },
    {
        title: 'Customer Service Technical Specialist',
        location: 'US, MA, Waltham',
    },
    { title: 'Software Applications Specialist', location: 'US, KS,' },
    { title: 'Craftsman Associate', location: 'US, WA, Everett' },
    { title: 'Completion Engineer', location: 'US, CA, San Ramon' },
    { title: 'I Want To Work At Karmarama', location: 'GB, LND,' },
    {
        title: 'English Teacher Abroad',
        location: 'US, NY, Saint Bonaventure',
    },
];

// PART 1
let count = 0;
let results = [];

const trimAndToLowerCase = text => {
    return text.trim().toLowerCase();
};

const searchJob = (inputTitle, inputLocation) => {
    inputTitle = trimAndToLowerCase(inputTitle);
    inputLocation = trimAndToLowerCase(inputLocation);

    jobs.forEach(job => {
        const jobsTitle = trimAndToLowerCase(job.title);
        const jobsLocation = trimAndToLowerCase(job.location);
        const isJobAvailable =
            jobsTitle.includes(inputTitle) &&
            jobsLocation.includes(inputLocation);

        isJobAvailable && results.push(job);
        count = results.length;
    });
};
searchJob('dEv ', ' uS  ');

console.log(count, ...results);

// PART 2
const title = document.querySelector('h1');
const mainContainer = document.querySelector('main');
const jobTitle = document.getElementById('job-title');
const searchBtn = document.getElementById('search-btn');
const ulContainer = document.getElementById('job-list');
const jobLocation = document.getElementById('job-location');

const errorMessage = document.createElement('div');
errorMessage.classList.add('error-message');

let jobList = '';
let titleValue, locationValue;

const showText = (element, text) => {
    element.textContent = text;
};

const appendElement = (firstElement, secondElement) => {
    firstElement.append(secondElement);
};

const removeElement = element => {
    element.remove();
};

const getValuesAndResetValues = () => {
    titleValue = jobTitle.value;
    locationValue = jobLocation.value;
    jobTitle.value = '';
    jobLocation.value = '';
};

const isInputFilled = () => {
    return (
        (titleValue !== '' && titleValue.length >= 3) ||
        (locationValue !== '' && locationValue.length >= 2)
    );
};

const sendValuesToSearchJob = () => {
    getValuesAndResetValues();
    isInputFilled() && searchJob(titleValue, locationValue);
};

const getResults = () => {
    results.forEach(result => {
        jobList += `<li>
                      <p><span>Job Title</span>${result.title}</p>
                      <p><span>Location</span>${result.location}</p>
                    </li>`;
    });

    ulContainer.innerHTML = jobList;
};

const resetResults = () => {
    count = 0;
    results = [];
    jobList = '';
};

const showResults = () => {
    showText(
        title,
        `${
            count === 0
                ? "Sorry, we didn't find any job..."
                : `We found ${count} ${count === 1 ? 'job' : 'jobs'} for you...`
        }`
    );
    removeElement(errorMessage);
    appendElement(mainContainer, ulContainer);
};

const showError = () => {
    showText(title, 'Looking For A Job?');
    showText(
        errorMessage,
        'Minimum characters required: 3 for title, 2 for location. Thank you!'
    );
    removeElement(ulContainer);
    appendElement(mainContainer, errorMessage);
};

const appendResults = () => {
    resetResults();
    sendValuesToSearchJob();
    getResults();
    isInputFilled() ? showResults() : showError();
};

const enterKey = e => {
    if (e.key === 'Enter') {
        appendResults();
    }
};

searchBtn.addEventListener('click', () => {
    appendResults();
});

document.addEventListener('keydown', enterKey);
