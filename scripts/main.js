                /* DATA VAULT */
// the data is going to be temporarily stored here until I move it into another file

const domainList = ["AI DOMAIN", "Risk Mitigation & Security", "Healthcare", 
"Manufacturing & Agriculture", "Energy & Infrastructure", "Office Productivity & Business Workflow",
"Marketing & Sales", "Hospitality", "Finance", "Leisure, Content & Media",
"Transportation", "Human Resources & Management", "Education",
"Governance & Policy", "Science"];


                /* class tag assignments */
const domainhead = document.getElementById("domain-header");

// -------------------------------------
const selfeaturehead = document.getElementById("selected-feature-header");
const selfeaturedesc = document.getElementById("selected-feature-description");
const selCapabilityList = document.getElementById("capability-list");

const servicevaluehead = document.getElementById("service-value-header");
const servicevaluedesc = document.getElementById("service-value-description");

const customervaluehead = document.getElementById("customer-value-header");
const customervaluedesc = document.getElementById("customer-value-description");

const servicetypehead = document.getElementById("service-type-header");
const servicetypedesc = document.getElementById("service-type-description");

let navdomainlist = document.getElementsByTagName("nav")[0];
let navfeaturelist = document.getElementsByTagName("nav")[1];
const featurelist =document.getElementById("feature-list");


                        /* NOW LETS CHANGE THINGS UP */

// console.log(Object.keys(domains).sort());

// generating navigation list
for(const domain of Object.keys(updatedDomainList).sort()) {
    let li = document.createElement("button");
    li.innerHTML = updatedDomainList[domain].title;
    li.addEventListener("click", () => {
        let feature1 = Object.keys(updatedDomainList[domain].featureList)[0];
        // setLocation(domain, feature1);
        // changeURL(domain, feature1);
        let path = [domain, feature1];
        navigateTo(path);
        console.log("please navigate to " + domain + " | " + feature1);
    });
    // li.id = "test"
    navdomainlist.appendChild(li);
}


// setLocation("Education", "aes");


function setLocation(domain, feature){
    // console.log("FIRST: " + domain);
    // console.log("SECOND: " + feature);
    // console.log("THIRD: " + updatedDomainList[domain].title);


    // domain is a string
    // feature is a string

    // window.location.search = domain + "/" + feature;

    // update the URL
    // update the page content (HTML strategy)
    document.getElementById("feature-list").innerHTML="";
    // domain in updatedDomainList // checks if the domain is actually in the list -> bool

    // CHANGING THE HEADER OF THE PAGE
    domainhead.innerHTML = updatedDomainList[domain].title;

    // CHANGING THE FEATURE SECTION
    for(let x in updatedDomainList[domain].featureList) {
        let header = document.createElement("h3");
        let description = document.createElement("h4");
        
        header.innerHTML = updatedDomainList[domain].featureList[x].header;
        description.innerHTML = updatedDomainList[domain].featureList[x].description;

        header.addEventListener("click", () => {
            // setLocation(domain, x);
            // changeURL(domain, x);
            let path = [domain, x];

            console.log("please navigate to " + domain + " | " + x);
            navigateTo(path);
        });
        description.addEventListener("click", () => {
            // setLocation(domain, x);
            // changeURL(domain, x);
            let path = [domain, x];

            console.log("please navigate to " + domain + " | " + x);
            navigateTo(path);
        });

        header.id = "test";
        description.id = "test";

        featurelist.appendChild(header);
        featurelist.appendChild(description);
    }

    // CHANGE THE SELECTED AI FEATURE HEADER
    selfeaturehead.innerHTML = updatedDomainList[domain].featureList[feature].header;
    selfeaturedesc.innerHTML = updatedDomainList[domain].featureList[feature].description;

    // CHANGING THE SELECTED FEATURE SECTION
    selCapabilityList.innerHTML = '';
    for(let x in updatedDomainList[domain].featureList[feature].capabilityList) {
        let header = document.createElement("h3");
        
        header.innerHTML = updatedDomainList[domain].featureList[feature].capabilityList[x].level1;
        
        selCapabilityList.appendChild(header);
    }

    servicevaluedesc.innerHTML = updatedDomainList[domain].featureList[feature].serviceValue;

    customervaluedesc.innerHTML = updatedDomainList[domain].featureList[feature].customValue;

    servicetypedesc.innerHTML = updatedDomainList[domain].featureList[feature].serviceType;
    
}

// getting the origin of the website (protocol + hostname + port number)
// console.log(window.location.origin);

// // getting the protocal of the website
// console.log(window.location.protocol);

// // getting the host and hostname
// console.log(window.location.host);
// console.log(window.location.hostname);

// // getting the port number
// console.log(window.location.port);

// // getting the pathname
// console.log(window.location.pathname);

// // get the query string portion
// console.log("query string portion: " + window.location.search);
// window.location.search = "test";

// console.log("query string portion2: " + window.location.search);


// console.log(window.location.toString());

// function that searches for URL parameters and returns their values
// function getParameter(parameterName) {
//     let parameters = new URLSearchParams(window.location.search);
//     return parameters.get( parameterName );
// }
// URL will look like file://path/to/index.html?domain=DOM&feat=FEAT
// use like: getParameter("domain") will return DOM
// console.log(getParameter("domain"));
// console.log(getParameter("feature"));




// so I could have a function1 that calls that getParamter function, then uses those values as inputs to my setLocation
// each button click in setLocation would then no longer be a call to setLocation, but rather a call to a new function
// which updates the url. The page will then reflect that by function1 running again and updating the page

// function func1() {
//     setLocation(getParameter("domain"), getParameter("feature"));
// }




// function that reads the URL, then updates the page state
function updateFromSearch() {
    // console.log("updateFromSearch called");

    let search = (window.location.search != "" ? window.location.search.substr(1) : "");
    // console.log("search from updateFromSearch: " + search);
    let path = search.split('/')
    // console.log("path from updateFromSearch: " + path);

    // if the path doesn't math a domain/feature, set to some default path (ask designers what that should be)

    // call page update function to write contents of page
    setLocation(path[0], path[1]);
}

// this will trigger updateFromSearch() whenever someone presses the 'back' or 'forward' buttons in the browser
window.addEventListener('popstate', updateFromSearch);

function initalPageLoad() {
    // console.log("initialPageLoad called");
    let path = ["Education", "aes"];
    window.history.pushState(null, '', '?' + path.join('/'))
    // FireFox doesn't actually call the popstate event on initial page load, so call it. This is redundant for other browsers
    updateFromSearch();
}


// change the URL and history state?
function navigateTo(path) {
    // console.log("navigateTo called");
    // console.log("path in navigateTo: " + path);
    // console.log("next step" + path.join('/'));
    window.history.pushState(null, '', '?' + path.join('/'));
    updateFromSearch();
}

// FireFox doesn't actually call the popstate event on initial page load, so call it. This is redundant for other browsers
updateFromSearch();


// initalPageLoad();


// what issues currently exist?
// when the "domains" page is loaded w/ no query string, it defaults to blank HTML template
// when you manually type in the URL, sometimes it doesn't work (not sure if it's spelling or cacheing etc.)
