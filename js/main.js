window.onload=function(){
//All functions that must happen on page load
    function initializer(){
        menuSlider();
        AOS.init();
    }

    function menuSlider() {
        var menuLink = document.getElementById("menuLink"),
            menu = document.getElementById("menu"),
            trigger = document.getElementById("close-trigger");

            menuLink.addEventListener("click", function(e){
                e.preventDefault();
                if(menu.classList.contains("menu-hidden")){
                    menu.classList.remove("menu-hidden");
                    trigger.classList.remove("trigger-hidden");
                    menuLink.classList.add("menu-close");
                    menuLink.firstElementChild.classList.add("close-button");
                } else {
                    menu.classList.add("menu-hidden");
                    trigger.classList.add("trigger-hidden");
                    menuLink.classList.remove("menu-close");
                    menuLink.firstElementChild.classList.remove("close-button");
                }

                menu.addEventListener("click", function(e){
                    if(e.target === trigger || e.target.tagName === "A") {
                        menu.classList.add("menu-hidden");
                        trigger.classList.add("trigger-hidden");
                        menuLink.classList.remove("menu-close");
                        menuLink.firstElementChild.classList.remove("close-button");
                    }
                })
            });
        }

    initializer();
}