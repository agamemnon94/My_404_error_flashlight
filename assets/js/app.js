let torche = document.querySelector('.torch');

let text = document.querySelector('.big_header');
const sentence = "404 error".split('');

sentence.forEach((el) => {
  text.innerHTML += `<span class="elements" >${el}</span>`;
});

/**
 * Fonction qui fait bouger le faisceau de la lampe torche
 * @param {*} e
 */
let flashLight = (e) => {
  setTimeout(() => {
    torche.style.top = e.pageY - 175 + "px";
    torche.style.left = e.pageX - 175 + "px";
  }, 50);
  const x = e.clientX;
  const y = e.clientY;

  let spanElements = document.querySelectorAll('.elements');

  spanElements.forEach((el) => {
    const rect = el.getBoundingClientRect();

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

