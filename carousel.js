/* Figure carousel: one figure slot with buttons that switch between images
   and their captions. Markup (see fstyle2.css):

   <figure class="main carousel">
     <figcaption>
       <span class="slide-cap">…</span> <span class="slide-cap">…</span>
     </figcaption>
     <div class="carousel-tabs"><button>a</button><button>b</button></div>
     <img class="slide" …> <img class="slide" …>
   </figure>

   Without JavaScript every image and caption is shown. */
document.querySelectorAll("figure.carousel").forEach(function (fig) {
  var slides = fig.querySelectorAll(".slide");
  var caps = fig.querySelectorAll(".slide-cap");
  var btns = fig.querySelectorAll(".carousel-tabs button");

  function show(i) {
    [slides, caps].forEach(function (list) {
      list.forEach(function (el, j) { el.classList.toggle("active", j === i); });
    });
    btns.forEach(function (b, j) { b.setAttribute("aria-pressed", j === i); });
    // MathJax 2 can mis-measure math that was hidden when it was typeset
    if (window.MathJax && MathJax.Hub && caps[i]) {
      MathJax.Hub.Queue(["Rerender", MathJax.Hub, caps[i]]);
    }
  }

  btns.forEach(function (b, i) {
    b.addEventListener("click", function () { show(i); });
  });
  fig.classList.add("ready");
  show(0);
});
