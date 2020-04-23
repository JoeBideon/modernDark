function display(e) {
  let scrollTop = window.pageYOffset;
  let navbar = document.querySelector("nav");

  if (scrollTop < 40) {
    return navbar.classList.remove("sticky");
  }

  navbar.classList.add("sticky");
}

console.log(display);

window.onscroll = (e) => display();
