const dropBtn = document.querySelector('#dropBtn');
const dropdownMenu = document.querySelector('.dropdown-menu');
const closeBtn = document.querySelector('#closeBtn');

function toggleDropdown() {
  dropdownMenu.classList.toggle('toggle-dropdown');
}

dropBtn.addEventListener('click', toggleDropdown);
closeBtn.addEventListener('click', toggleDropdown);