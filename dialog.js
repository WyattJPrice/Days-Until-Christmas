const modal = document.querySelector(".popup")
function popup(); {
 modal.showModal();
}

modal.addEventListener('click', (event) => {
  if (event.target.class !== 'youtube') {
modal.hide();
  }})