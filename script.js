let crsr = document.querySelector("#cursor");
let blurbox = document.querySelector("#cursor-blur")
gsap.to("#nav",{
    backgroundColor: "#000",
    height:"80px",
    duration:0.2,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -50%",
        end:"top -100%",
        scrub:2
    }
})

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x+30 + "px";
    crsr.style.top = dets.y + "px";
    blurbox.style.left = dets.x - 150 + "px";
    blurbox.style.top = dets.y - 150 + "px";
  });



let headtext = document.querySelectorAll("#nav h4");

headtext.forEach((elem)=>{
    elem.addEventListener("mouseenter", ()=>{
        crsr.style.scale = 3
        crsr.style.backgroundColor = "transparent"
        crsr.style.border = "0.8px solid #fff"
        
    })
    elem.addEventListener("mouseleave", ()=>{
        crsr.style.scale = 1
        crsr.style.backgroundColor = "#95c11e"
        crsr.style.border = "0px solid #95c11e"
        
    })
})

gsap.from("#about-us img, .about-div",{
    y:60,
    opacity:0,
    duration:1,
    stagger:0.4
})
