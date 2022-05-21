// function that generates the domain landing page
function buildLanding(){
    console.log("attempted to build landing");

    let banner = document.createElement("section");
    banner.classList = "banner";
    let bannerText = document.createElement("div");
    bannerText.innerHTML = "<h1 id='whiteText'> AI Exemplars </h1> <b1 id='whiteText2'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </b1> ";
    bannerText.classList = "bannerText";
    banner.appendChild(bannerText)
    document.body.appendChild(banner);
    document.getElementById("whiteText").style.color = "#FFFFFF";
    document.getElementById("whiteText2").style.color = "#FFFFFF";
    // build the collection
    let accordion = document.createElement("section");
    accordion.classList = "accordion";
    document.body.appendChild(accordion);

    // build a box for each domain
    for(const domain of Object.keys(updatedDomainList).sort()) {
        // console.log("attempted to build box for " + domain);

        for(let feature in updatedDomainList[domain].featureList) {
            let featureHeader = updatedDomainList[domain].featureList[feature].header;
            let featureDescription = updatedDomainList[domain].featureList[feature].description;

            let image = document.createElement("img");
            image.classList = "accordionImg";
            image.src = "images\\Feature Icons\\" + feature + ".svg";
            image.alt = updatedDomainList[domain].featureList[feature].header + " Icon";
            
            let text1 = document.createElement("div");
            text1.classList = "accordionText1";
            text1.innerHTML = "<h4>" + featureHeader + "</h4>"
                            + "<b2>" + featureDescription + "</b2>";
            
            let text2 = document.createElement("div");
            text2.classList = "accordionText2"; 


            let length = updatedDomainList[domain].featureList[feature].capabilityList.length;
            for(x = 0; x < length; x++) {
                let capa = document.createElement("b1");
                capa.innerHTML = updatedDomainList[domain].featureList[feature].capabilityList[x].level1 + "<br>";
                text2.appendChild(capa);
            }

            // let temp = document.createElement("b1");
            // temp.innerHTML = "HIIII";
            // text2.appendChild(temp);

            // for(let capability in updatedDomainList[domain].featureList[feature].capabilityList) {
            //     let capa = document.createElement("b1");
            //     capa.innerHTML = capability.level1;
            //     text2.appendChild(capa);
            // }

            let accordionElement = document.createElement("div");
            accordionElement.classList = "accordionElement";

            accordionElement.appendChild(image);
            accordionElement.appendChild(text1);
            accordionElement.appendChild(text2);

            accordion.appendChild(accordionElement);
        }

    }
}

buildLanding();