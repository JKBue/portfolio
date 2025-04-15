window.onload = () => {
    const transition_el = document.querySelector('.transition-1');
    const anchors = document.querySelectorAll('a');
    
    setTimeout( () => {
        transition_el.classList.remove('is-active');
    });

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, 500)

            console.log(target);
        })
    }
}

function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "button_flex-container") {
      x.className += " responsive";
    } else {
      x.className = "button_flex-container";
    }
  }