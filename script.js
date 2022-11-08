const hamburger = document.querySelector(".hamburger");
                const divmenu = document.querySelector(".div-menu");

                hamburger.addEventListener("click", () => {
                hamburger.classList.toggle("active");
                divmenu.classList.toggle("active");
                })
                document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
                hamburger.classList.remove("active");
                hamburger.classList.remove("active");
                }))