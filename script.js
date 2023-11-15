
let cur = document.querySelector("#cursor"); 
let cBlur = document.querySelector("#c-blur"); 


document.addEventListener("mousemove", (dets)=>{
    cur.style.left = dets.x+ 15 + "px"
    cur.style.top = dets.y + "px"
    cBlur.style.left = dets.x - 55 + "px"
    cBlur.style.top = dets.y - 55 + "px"
})

let h4All = document.querySelectorAll("#nav h4");
h4All.forEach(function(elem){
    elem.addEventListener("mouseenter",()=>{
        cur.style.scale = 3
        cur.style.border = "1px solid #fff"
        cur.style.backgroundColor = "transparent"

    })
})
h4All.forEach(function(elem){
    elem.addEventListener("mouseleave",()=>{
        cur.style.scale = 1
        cur.style.border = "0px solid #95C11E"
        cur.style.backgroundColor = "#95C11E"

    })
})

gsap.to("#nav", {
    backgroundColor:"#000",
    height:"5vw",
    duration:0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -20%",
        end: "top -75%",
        scrub: 2
    }
})

gsap.from("#about img, #info",{
    y:30,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger: "#about",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from("#colon1", {
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 54%",
        end: "top 45%",
        scrub: 3
    }
})
gsap.from("#colon2", {
    y:80,
    x:90,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start: "top 54%",
        end: "top 45%",
        scrub: 3
    }
})
gsap.from("#page4 h1", {
    y:40,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 80%",
        end: "top 75%",
        scrub: 2
    }
})