function togglePanel() {
  const panel = document.getElementById('side-panel');
  const arrow = document.getElementById('arrow');
  const arrowIcon = document.getElementById('arrow-icon');

  panel.classList.toggle('open');
  arrow.classList.toggle('rotate');
  
  
  if (panel.classList.contains('open')) {
    document.getElementById("main").style.transform = "translateX(9%)";
    document.getElementById("popup").style.transform = "translateX(9%)";
    arrowIcon.innerHTML = ' <';
  } else {
    document.getElementById("main").style.transform = "translateX(0)";
    document.getElementById("popup").style.transform = "translateX(0)";
    arrowIcon.innerHTML = ' >';
  }    
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function openPricing() {
  location.href = "pricing.html";
}

function closeForm() {
  event.preventDefault();
  document.getElementById("myForm").style.display = "none";
}

function toggleDropdown() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

function closeDropdown() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.classList.remove("show");
}

window.addEventListener("click", function(event) {
  const dropdown = document.getElementById("myDropdown");
  if (!dropdown.contains(event.target)) {
    closeDropdown();
  }
});
