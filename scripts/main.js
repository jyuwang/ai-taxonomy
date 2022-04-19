                /* DATA VAULT */
// the data is going to be temporarily stored here until I move it into another file

const domainList = ["AI DOMAIN", "Risk Mitigation & Security", "Healthcare", 
"Manufacturing & Agriculture", "Energy & Infrastructure", "Office Productivity & Business Workflow",
"Marketing & Sales", "Hospitality", "Finance", "Leisure, Content & Media",
"Transportation", "Human Resources & Management", "Education",
"Governance & Policy", "Science"];


                /* class tag assignments */
const domainhead = document.getElementById("domain-header");

const banner = document.getElementsByClassName("banner");
const collection = document.getElementsByClassName("collection");

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
const featurelist = document.getElementById("feature-list");


                        /* NOW LETS CHANGE THINGS UP */

// console.log(Object.keys(domains).sort());

// generating navigation list
// for(const domain of Object.keys(updatedDomainList).sort()) {
//     let li = document.createElement("button");
//     li.innerHTML = updatedDomainList[domain].title;
//     li.addEventListener("click", () => {
//         let feature1 = Object.keys(updatedDomainList[domain].featureList)[0];
//         // setLocation(domain, feature1);
//         // changeURL(domain, feature1);
//         let path = [domain, feature1];
//         navigateTo(path);
//         console.log("please navigate to " + domain + " | " + feature1);
//     });
//     // li.id = "test"
//     navdomainlist.appendChild(li);
// }


// setLocation("Education", "aes");

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}


function setLocation(domain, feature){
    // console.log("FIRST: " + domain);
    // console.log("SECOND: " + feature);
    // console.log("THIRD: " + updatedDomainList[domain].title);


    // domain is a string
    // feature is a string

    // window.location.search = domain + "/" + feature;

    // clear everything from the landing page
    // removeElementsByClass("banner");
    // removeElementsByClass("collection");

    // update the URL
    // update the page content (HTML strategy)
    document.getElementById("feature-list").innerHTML="";
    // domain in updatedDomainList // checks if the domain is actually in the list -> bool

    // CHANGING THE HEADER OF THE PAGE
    let domainhead = document.getElementById("domain-header");
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

        let featurelist = document.getElementById("feature-list");
        featurelist.appendChild(header);
        featurelist.appendChild(description);
    }

    // CHANGE THE SELECTED AI FEATURE HEADER
    let selfeaturehead = document.getElementById("selected-feature-header");
    let selfeaturedesc = document.getElementById("selected-feature-description");
    selfeaturehead.innerHTML = updatedDomainList[domain].featureList[feature].header;
    selfeaturedesc.innerHTML = updatedDomainList[domain].featureList[feature].description;

    // CHANGING THE SELECTED FEATURE SECTION
    let selCapabilityList = document.getElementById("capability-list");
    selCapabilityList.innerHTML = '';
    for(let x in updatedDomainList[domain].featureList[feature].capabilityList) {
        let header = document.createElement("h3");
        
        header.innerHTML = updatedDomainList[domain].featureList[feature].capabilityList[x].level1;
        
        selCapabilityList.appendChild(header);
    }

    let servicevaluehead = document.getElementById("service-value-header");
    let servicevaluedesc = document.getElementById("service-value-description");

    let customervaluehead = document.getElementById("customer-value-header");
    let customervaluedesc = document.getElementById("customer-value-description");

    let servicetypehead = document.getElementById("service-type-header");
    let servicetypedesc = document.getElementById("service-type-description");

    servicevaluehead.innerHTML = "Value for Service";
    servicevaluedesc.innerHTML = updatedDomainList[domain].featureList[feature].serviceValue;

    customervaluehead.innerHTML = "Value for Customer";
    customervaluedesc.innerHTML = updatedDomainList[domain].featureList[feature].customValue;

    servicetypehead.innerHTML = "Service Type";
    servicetypedesc.innerHTML = updatedDomainList[domain].featureList[feature].serviceType;
    
}


// function that generates the domain landing page
function buildLanding(){
    console.log("attempted to build landing");

    let banner = document.createElement("section");
    banner.classList = "banner";
    let bannerText = document.createElement("div");
    bannerText.innerHTML = "<h1 id='whiteText'> Domains (14) </h1> <b1 id='whiteText2'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </b1> ";
    bannerText.classList = "bannerText";
    banner.appendChild(bannerText)
    document.body.appendChild(banner);
    document.getElementById("whiteText").style.color = "#FFFFFF";
    document.getElementById("whiteText2").style.color = "#FFFFFF";
    // build the collection
    let collection = document.createElement("section");
    collection.classList = "collection";
    document.body.appendChild(collection);

    // build a box for each domain
    for(const domain of Object.keys(updatedDomainList).sort()) {
        // console.log("attempted to build box for " + domain);

        let feature1 = Object.keys(updatedDomainList[domain].featureList)[0];

        let box = document.createElement("div");
        box.classList = "box";
        box.addEventListener("click", () => {
            // let feature1 = Object.keys(updatedDomainList[domain].featureList)[0];
            let path = [domain, feature1];
            navigateTo(path);
            console.log("please navigate to " + domain + " | " + feature1);
        });

        // prep Image insertion
        let elem = document.createElement("img");
        elem.src = "images\\Feature Icons\\" + feature1 + "_1.svg";
        elem.alt = updatedDomainList[domain].title + " Icon";

        box.onmouseover = () => {elem.src = "images\\Feature Icons\\" + feature1 + ".svg";}
        box.onmouseout = () => {elem.src = "images\\Feature Icons\\" + feature1 + "_1.svg";}
        // prep Feature list insertion
        let featureListString = "";
        for(let x in updatedDomainList[domain].featureList) {
            featureListString += updatedDomainList[domain].featureList[x].header + ", ";
        }
        featureListString = featureListString.slice(0, -2);

        let boxImg = document.createElement("div");
        boxImg.classList = "boxImg";
        boxImg.appendChild(elem);
        box.appendChild(boxImg);

        let boxText = document.createElement("div");
        boxText.classList = "boxText";
        boxText.innerHTML =  "<h4>" + updatedDomainList[domain].title + "</h4>"
        + "<b2>" + featureListString + "</b2>";
        box.appendChild(boxText);



        collection.appendChild(box);
    }
}

// function that builds the skeleton for a specific domain
function buildSkeleton(){
    console.log("attempted to build skeleton");
    let bodyText = document.createElement("div");
    bodyText.classList = "body-text";

    let dummy = document.createElement("caption");
    dummy.innerHTML = "Dummy";

    let domainHeader = document.createElement("h1");
    domainHeader.setAttribute('id', "domain-header");
    domainHeader.innerHTML = "Domain Header";
    bodyText.appendChild(domainHeader);

    let featureList = document.createElement("ul");
    featureList.setAttribute('id', "feature-list");
    featureList.innerHTML = "Feature List";
    featureList.appendChild(dummy);
    bodyText.appendChild(featureList);
    

    let selectedFeatureHeader = document.createElement("h2");
    selectedFeatureHeader.setAttribute('id', "selected-feature-header");
    selectedFeatureHeader.innerHTML = "selectedFeatureHeader";
    bodyText.appendChild(selectedFeatureHeader);

    let selectedFeatureDescription = document.createElement("h4");
    selectedFeatureDescription.setAttribute('id', "selected-feature-description");
    selectedFeatureDescription.innerHTML = "selectedFeatureDescription";
    bodyText.appendChild(selectedFeatureDescription);

    let capabilityList = document.createElement("ul");
    capabilityList.setAttribute('id', "capability-list");
    capabilityList.innerHTML = "capabilityList";
    bodyText.appendChild(capabilityList);

    let sValueHeader = document.createElement("h5");
    sValueHeader.setAttribute('id', "service-value-header");
    sValueHeader.innerHTML = "sValueHeader";
    bodyText.appendChild(sValueHeader);

    let sValueDescription = document.createElement("h6");
    sValueDescription.setAttribute('id', "service-value-description");
    sValueDescription.innerHTML = "sValueDescription";
    bodyText.appendChild(sValueDescription);

    let cValueHeader = document.createElement("h5");
    cValueHeader.setAttribute('id', "customer-value-header");
    cValueHeader.innerHTML = "cValueHeader";
    bodyText.appendChild(cValueHeader);

    let cValueDescription = document.createElement("h6");
    cValueDescription.setAttribute('id', "customer-value-description");
    cValueDescription.innerHTML = "cValueDescription";
    bodyText.appendChild(cValueDescription);

    let sTypeHeader = document.createElement("h5");
    sTypeHeader.setAttribute('id', "service-type-header");
    sTypeHeader.innerHTML = "sTypeHeader";
    bodyText.appendChild(sTypeHeader);

    let sTypeDescription = document.createElement("h6");
    sTypeDescription.setAttribute('id', "service-type-description");
    sTypeDescription.innerHTML = "sTypeDescription";
    bodyText.appendChild(sTypeDescription);    

    document.body.appendChild(bodyText);
}


// function that reads the URL, then updates the page state
function updateFromSearch() {
    // console.log("updateFromSearch called");

    let search = (window.location.search != "" ? window.location.search.substr(1) : "");
    console.log("search from updateFromSearch: " + search);
    
    if(search != "") {
        removeElementsByClass("body-text");
        removeElementsByClass("banner");
        removeElementsByClass("collection");
        buildSkeleton();

        let path = search.split('/')
        setLocation(path[0], path[1]);
    }
    else {
        removeElementsByClass("body-text");
        removeElementsByClass("banner");
        removeElementsByClass("collection");
        buildLanding();
    }


    let path = search.split('/')
    // console.log("path from updateFromSearch: " + path);

    // if the path doesn't math a domain/feature, set to some default path (ask designers what that should be)

    // call page update function to write contents of page
    
}

// this will trigger updateFromSearch() whenever someone presses the 'back' or 'forward' buttons in the browser
window.addEventListener('popstate', updateFromSearch);

function initalPageLoad() {
    // console.log("initialPageLoad called");
    let path = ["Education", "aes"];
    window.history.pushState(null, '', '?' + path.join('/'))
    // FireFox doesn't actually call the popstate event on initial page load, so call it. This is redundant for other browsers
    console.log(path[0] + "   " + path[1]);
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


// for(const domain of Object.keys(updatedDomainList).sort()) {
//     console.log(updatedDomainList[domain].title + " --> " + domain);
// }

// initalPageLoad();


// what issues currently exist?
// when the "domains" page is loaded w/ no query string, it defaults to blank HTML template
// when you manually type in the URL, sometimes it doesn't work (not sure if it's spelling or cacheing etc.)
