elem = document.querySelectorAll(".elem")



elem.forEach(function(e){
    var imgs = e.childNodes[1]

    console.log(imgs)
    e.addEventListener("mousemove", function(dets){
        gsap.to(imgs , {
            left : dets.x,
            // top : dets.y
        })
    })

    e.addEventListener("mouseenter", function(){
        gsap.to(imgs , {
            opacity: 1,
            transform: "translatex(-50%) scale(1)",
        })
    })

    e.addEventListener("mouseleave", function(){
        gsap.to(imgs , {
            opacity: 0,
            transform: "translatex(-50%) scale(0)",
        })
    })
})