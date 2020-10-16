// written by Bryan Mayson

// Hides notification panel onclick
function onClick() {

    gsap.to("#notif_items", { opacity: 0, duration: .5, ease: Linear.easeNone })
    gsap.to("#notif_container", { height: 0, duration: .5, ease: Linear.easeNone });
    setInterval(function () {
        let x = document.getElementById("notif_container");
        x.style.display = "None";
    }, 2000);
}

// Hides pop up panel on click
function hide() {
    gsap.to("#pop_up", { height: 0, y: 40, duration: .5, ease: Linear.easeNone });
    setInterval(function () {
        let x = document.getElementById("pop_up");
        x.style.display = "None";
    }, 2000);
    // stores pop_up closed info to sessionStorage
    sessionStorage.setItem("clicked", "y");
}

// Checks for scrolling to reach 1/3 of page height before showing pop up
var height = document.body.scrollHeight
$(document).scroll(
    function(){
        // if closed in previous session then ignore pop up
        var check = sessionStorage.getItem("clicked");
        if (check != "y"){
            var pos = document.documentElement.scrollTop
            if (pos > height/3){
                gsap.to("#pop_up", { bottom: 0, duration: 1, ease: Linear.easeNone });
            }
        }

    }
)