const normalNav = document.getElementById("normalNav");
const wrapNav = document.getElementById("nav");
const dropBtn = document.getElementById("dropDown");

function dropMenu() {
  if (window.innerWidth < 767) {
    const btn = document.createElement("button");
    wrapNav.appendChild(btn);
    btn.classList.add("btnDropdown");
    btn.innerHTML = '<img src="src/150.png" />';
    btn.setAttribute("id", "dropDown");
    btn.addEventListener("click", drop);
  }
}

dropMenu();

function drop() {
  document.getElementById("normalNav").classList.toggle("show");
}

document.addEventListener("click", outsideEvtListener);

function outsideEvtListener(evt) {
  if (evt.target === dropBtn) {
    console.log(2);
  } else {
    normalNav.classList.remove("show");
    console.log(1);
  }
}
