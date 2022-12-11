const modal = document.querySelector(".popup")
function popup(t); {
  if (t === open) {
    modal.showModal();
  } else {
    modal.close();
  }
}

modal.addEventListener('click', (event) => {
  if (event.target.class !== 'youtube') {
      popup(close);
  }})