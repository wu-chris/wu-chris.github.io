function generateAccordion() {
  let container = document.body;
  for (let i = 1; i <= NRIMAGES; i++) {
      let button = document.createElement("button");
      button.className = "accordion";
      button.innerText = `Download Image ${i}`;

      let panel = document.createElement("div");
      panel.className = "panel";

      let link = document.createElement("a");
      link.href = `../Images/img${i}.jpg`;
      link.innerText = "Download";

      panel.appendChild(link);
      container.appendChild(button);
      container.appendChild(panel);

      button.addEventListener("click", toggleFunction);
  }
}
function toggleFunction() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
}
