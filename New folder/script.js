function click()
{
    var click = 0;
var img1 = document.querySelector(".img-1")
var img2 = document.querySelector(".img-2")
var img3 = document.querySelector(".img-3")
var img4 = document.querySelector(".img-4")
var page = document.querySelector(".page1")

page.addEventListener("click",function()
{
    if(click == 0)
    {
        img4.style.opacity = 0;
        click = 1;
    }
})
page.addEventListener("dblclick",function()
{
    if(click == 1)
    {
        img3.style.opacity = 0;
     click = 2;
    }
})
page.addEventListener("tplclick",function()
{
    if(click == 2)
    {
        img2.style.opacity = 0;
        click = 0;
    }
    
})
}
function smoothscroll()
{
    
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function cursor()
{   
    var page = document.querySelector(".page1")  
    page.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
            x:dets.x-70,
            y:dets.y-190,
        })
    })
    page.addEventListener("mouseleave",function(dets){
        cursor.style.opacity = 0
    })
}
function ani()
{
    // var logo = document.querySelector(".nav-menu");
    // var nav = document.querySelector(".nav-menu");
    // var page = document.querySelector(".container");
    gsap.from(".nav-menu",{
        y:-200,
        x:20,
        duration:2,
        stagger:1
    })
    gsap.from(".navh1",{
        x:-500,
        duration:1,
        stagger:4
    })
   
}
click();
smoothscroll();
cursor();
ani();