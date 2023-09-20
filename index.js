var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });


gsap.to(".nav", {
    backgroundColor: "white",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -1%",
        end: "top -1%",
        scrub: 1
    }
})
gsap.to(".page1", {
    y: "-5%",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        scrub: 3,
    }
})
gsap.to(".heading,.para,.btn2,.right", {
    opacity: 0,
    y: -10,
    duration: 0.3,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".para",
        sroller: "body",
        scrub: 3,
        start: "top 20%"
    }
})

gsap.to(".page2-container", {
    y: "-20%",
    duration: 0.2,
    scrollTrigger: {
        trigger: ".page3",
        scrub: 3,
        scroller: "body",
        end: "top 25%"
    }
})
gsap.to(".heading1,.info-box", {
    opacity: 0,
    duration: 0.2,
    scrollTrigger: {
        trigger: ".page3",
        scrub: 3,
        scroller: "body",
        end: "top 25%"
    }
})
gsap.from(".heading2,.para2", {
    x: "-20%",
    // rotate: -10,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".para2",
        scrub: 2,
        scroller: "body",
        end: "bottom 90%"
    }


})
var t1 = gsap.timeline();
t1
    .from(".heading,.para,.btn2,.right", {
        opacity: 0,
        y: 30,
        duration: 0.8,

    })

gsap.from(".page2-container h1,.page2-container h3", {
    opacity: 0,
    y: 30,
    stagger: 0.5,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".page2-container h3",
        scroller: "body",
        scrub: 4,

        end: "bottom 80%"
    }
})
gsap.to(".info-box", {
    scale: 1.1,
    duration: 1,
    scrollTrigger: {
        trigger: ".info-box",
        scroller: "body",
        scrub: 4,
        end: "bottom 80%"
    }
})

gsap.from(".booking>img", {
    rotate: -360,
    x: "-90%",
    duration: 0.2,
    scrollTrigger: {
        trigger: ".page3-wrapper",
        scrub: 3,
        scroller: "body",
        end: "bottom 90%",
        
    }
})



gsap.from(".para3", {
    x: "-40%",
    duration: 0.2,
    scrollTrigger: {
        trigger: ".page3-wrapper",
        scrub: 3,
        scroller: "body",
        end: "bottom 90%"
    }
})

let nav = false;
document.querySelector(".hamburger").addEventListener("click", () => {
    let sidebar = document.querySelector(".sidebar");
    let sidebar_item = document.querySelector(".sidebar-item");
    if (nav === false) {
        sidebar.style.height = "160px";
        sidebar_item.style.marginTop = "10px";
        nav = true;
    }
    else {
        sidebar.style.height = "0";
        sidebar_item.style.marginTop = "0px";
        nav = false;
    }

})
