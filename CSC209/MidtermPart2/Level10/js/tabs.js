function generateTabs() {
    let tabContainer = document.createElement("div");
    tabContainer.className = "tab";

    let contentContainer = document.createElement("div");

    tabsData.forEach((tab, index) => {
        let button = document.createElement("button");
        button.className = "tablinks";
        button.innerText = tab.name;
        button.onclick = (event) => openCity(event, tab.name);

        if (index === 0) {
            button.id = "defaultOpen"; 
        }

        tabContainer.appendChild(button);

        let tabContent = document.createElement("div");
        tabContent.id = tab.name;
        tabContent.className = "tabcontent";

        let closeButton = document.createElement("span");
        closeButton.className = "topright";
        closeButton.innerHTML = "&times;";
        closeButton.onclick = function () {
            this.parentElement.style.display = "none";
        };

        let heading = document.createElement("h3");
        heading.innerText = tab.name;

        let paragraph = document.createElement("p");
        paragraph.innerText = tab.content;

        tabContent.appendChild(closeButton);
        tabContent.appendChild(heading);
        tabContent.appendChild(paragraph);

        contentContainer.appendChild(tabContent);
    });
    let referenceElement = document.querySelector("p");
    referenceElement.insertAdjacentElement("afterend", tabContainer);
    tabContainer.insertAdjacentElement("afterend", contentContainer);
    document.getElementById("defaultOpen").click();
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}