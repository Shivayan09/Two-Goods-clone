const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function navAnimation() {
    gsap.from('.navbar', {
        y:100, scale: 1, opacity: 0, delay: 0, duration: 1.5, stagger: 0.2
    })
}
navAnimation()

function videoconAnimation () {
    var videocon = document.querySelector('#video-container')
    var playbtn = document.querySelector('#play')
    videocon.addEventListener("mouseenter", function() {
        gsap.to(playbtn, {
            scale: 1, opacity: 0.8
        })
    })
    videocon.addEventListener("mouseleave", function() {
        gsap.to(playbtn, {
            scale: 0, opacity: 0
        })
    })
    videocon.addEventListener("mousemove", function(dets) {
        gsap.to(playbtn, {
            left: dets.x-50, top: dets.y-60
        })
    })
}
videoconAnimation()

function loadingAnimation() {
    gsap.from("#page1 h1", {
        y:100, opacity: 0, delay: 0.5, duration: 0.9, stagger: 0.2
    })
    gsap.from("#page1 #video-container", {
        scale: 0.9, opacity: 0, delay: 1.5, duration: 0.5
    })
}
loadingAnimation()

function detsAnimation() {
    var allDets = document.querySelectorAll('.dets')
    var allDets2 = document.querySelectorAll('.dets2')

    allDets.forEach(function(dets, index) {
        dets.addEventListener("mouseenter", function() {
            allDets2[index].style.height = '230px'
        })
        dets.addEventListener("mouseleave", function() {
            allDets2[index].style.height = '50px'
        })
    })
}
detsAnimation()

document.addEventListener('mousemove', function(dets) {
    gsap.to('#cursor', {
        left: dets.x, top: dets.y
    })
})

document.querySelectorAll('#child1').addEventListener("mouseenter", function() {
    gsap.to('#cursor', {
        transform: 'translate(-50%, -50%) scale(1)'
    })
})

document.querrySelector('.navbar')
