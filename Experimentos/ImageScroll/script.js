document.addEventListener('DOMContentLoaded', () => {
    let options = {
      root: null,
      rootMargin: "-570px 0px -100px 0px",
      threshold: 0.05,
    };

  let Observer= new IntersectionObserver(changeIndex, options);
    document.querySelectorAll("section").forEach(section => {
      Observer.observe(section);
    });
  });


function changeIndex(elements) {
    elements.forEach(el => {
        if (el.isIntersecting) {
            // let id = el.target.closest("[data-link]");
            // let id = el.target.dataset.bg;
            let img1 = document.getElementById("first-img");
            let img2 = document.getElementById("second-img");
            let img3 = document.getElementById("third-img");
            let img4 = document.getElementById("fourth-img");

            console.log(id);
        
            if (id == "red") { //if section data-bg== blue
            
                document.getElementById("first-img").style.zIndex = 2;
                console.log(document.getElementById("first-img").style.zIndex);
                // document.getElementById("to_top_Ellipse_4").style.stroke = "#fff";
            } else {
                document.getElementById("first-img").style.zIndex = 1;
                console.log(document.getElementById("first-img").style.zIndex);
                // document.getElementById("chatting_path_7").style.fill = "#034ea2";
                // document.getElementById("to_top_Ellipse_4").style.stroke = "#034ea2";
            }
        }
    });
}