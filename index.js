var tl = gsap.timeline();


tl.from(".nav ,.links a ",{
    x:-400,
    duration:2,
    delay:.5,
    opacity:0,
    stagger:.3

})
tl.from(".logoimg",{
    duration:1 ,   
    opacity:0,
   scale:1
    })
   


tl.from(".main-image ,.right-section",{
opacity:0,

    scale:0,
    duration:1,

})
tl.to(".bottom-btn",{
    y:-40,
    repeat:-1,
    duration:1,
    yoyo:true

})
tl.from(".subjects",{
    x:-400,
    duration:2,
    opacity:0,
    scrollTrigger:".subjects"
})
tl.from("#b2 ,#a1",{
    x:-300,
    duration:2,
    opacity:0,
    scrollTrigger:"#a1"
})
tl.from("#algebra1",{
scale:0,
    duration:2,
    opacity:0,
    scrollTrigger:"#algebra1"
})
tl.from("#a2",{
    x:-300,
    duration:2,
    opacity:0,
    scrollTrigger:"#a1"
})
tl.from("#algebra2",{
scale:0,
    duration:2,
    opacity:0,
    scrollTrigger:"#algebra2"
})

tl.from(" #a3",{
    x:-300,
    duration:2,
    opacity:0,
    scrollTrigger:"#a1"
})
tl.from("#algebra3",{
scale:0,
    duration:2,
    opacity:0,
    scrollTrigger:"#algebra3"
})

tl.from("#link-margin ",{
    x:-400,
        duration:2,
        scrollTrigger:"#link-margin"
    })
    
tl.from(".about-quick-links ,.list-links >li ",{
    x:-400,
        duration:2,
        opacity:0,
        stagger:.3,
        scrollTrigger:".list-links >li"
    })

    
    


