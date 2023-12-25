function locoAni(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locoAni()

function cursorAni(){
    var cursor = document.querySelector("#cursor")
    var page1con = document.querySelector(".page1con")
    
    page1con.addEventListener("mousemove", function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y
        })
    })
    page1con.addEventListener("mouseenter", function(dets){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })
    
    page1con.addEventListener("mouseleave", function(dets){
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
    })

}
cursorAni()

function loadingAni(){
    gsap.from(".page1con #heading span",{
        y: 200,
        opacity:0,
        duration: 1.3,
        stagger: .05,
    })
}
loadingAni()

function scrollAni(){
    gsap.from(".page2top h3",{
        y: 70,
        opacity:0,
        duration: 1,
        stagger: 1,
        scrollTrigger:{
            trigger:".page2",
            scroller: "#main",
            start:"top 78%",
            end:"top 77%",
            // markers:true,
            scrub: 2
        }
    })
    gsap.from(".page2 span",{
        y: 200,
        opacity:0,
        duration: 3,
        delay: 3,
        stagger: 3,
        scrollTrigger:{
            trigger:".page2",
            scroller: "#main",
            start:"top 74%",
            end:"top 73%",
            // markers:true,
            scrub: 2
        }
    })
    gsap.from(".page3con .page3top h2",{
        y: 120,
        opacity:0,
        duration: 3,
        stagger:1,
        delay:1,
        scrollTrigger:{
            trigger:".page3",
            scroller: "#main",
            start:"top 74%",
            end:"top 73%",
            // markers:true,
            scrub: 2
        }
    })
    gsap.from(".page4top h3",{
        y: 50,
        opacity:0,
        duration: 1,
        scrollTrigger:{
            trigger:".page4",
            scroller: "#main",
            start:"top 82%",
            end:"top 81%",
            // markers:true,
            scrub: 2
        }
    })
    gsap.from(".page4 span",{
        y: 200,
        opacity:0,
        duration: 3,
        delay: 3,
        stagger: 2,
        scrollTrigger:{
            trigger:".page4",
            scroller: "#main",
            start:"top 84%",
            end:"top 83%",
            // markers:true,
            scrub: 2
        }
    })
    gsap.from(".page5top h3",{
        y: 50,
        opacity:0,
        duration: 1,
        scrollTrigger:{
            trigger:".page4",
            scroller: "#main",
            start:"top 82%",
            end:"top 81%",
            // markers:true,
            scrub: 2
        }
    })
    gsap.from(".page5 span",{
        y: 200,
        opacity:0,
        duration: 3,
        delay: 3,
        stagger: 2,
        scrollTrigger:{
            trigger:".page4",
            scroller: "#main",
            start:"top 84%",
            end:"top 83%",
            // markers:true,
            scrub: 2
        }
    })
}
scrollAni()

function page4curAni(){
    var page4cur = document.querySelector(".page4cur")
    var page4btm = document.querySelector(".page4btm")
    
    page4btm.addEventListener("mousemove", function(details){
        gsap.to(page4cur,{
            x:details.x-50+"px",
            y:dets.y-50+"px"
        })
    })
    page4btm.addEventListener("mouseenter", function(){
        gsap.to(page4cur,{
            scale:1,
            opacity:1
        })
    })
    
    page4btm.addEventListener("mouseleave", function(){
        gsap.to(page4cur,{
            scale:0,
            opacity:0
        })
    })
    
}
page4curAni()