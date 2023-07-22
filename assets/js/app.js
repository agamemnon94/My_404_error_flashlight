let torche = document.querySelector('.torch');

let text = document.querySelector('.big_header');
const sentence = "404 error".split('');

sentence.forEach((el) => {
  text.innerHTML += `<span class="elements" >${el}</span>`;
});


let tLeft;
let tTop;
let rectTorche;
/**
 * Fonction qui fait bouger le faisceau de la lampe torche
 * @param {*} e
 */
let flashLight = (e) => {
  setTimeout(() => {
    torche.style.top = e.pageY - 195 + "px";
    torche.style.left = e.pageX - 200 + "px";
    rectTorche = torche.getBoundingClientRect();
  }, 50);
  // const x = e.clientX;
  // const y = e.clientY;
  const x = rectTorche.right - 70;
  const y = rectTorche.top + 150;

  let spanElements = document.querySelectorAll('.elements');

  spanElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    console.log(rect.left, 'Les lettres');

    if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
      el.classList.add('transformed');
    } else {
      el.classList.remove('transformed');
    }
  });
};

// C'est le curseur qui fait le mouseover
// le faire avec la div
let backToLight = document.querySelector('.back_link');

backToLight.addEventListener('mouseover', () => {
  torche.style.display = "none";
});
backToLight.addEventListener('mouseleave', () => {
  torche.style.display = "block";
});


window.addEventListener('mousemove', flashLight);

