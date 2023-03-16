document.addEventListener('DOMContentLoaded', () => {

     gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
     ScrollSmoother.create({
          wrapper: '.wrapper',
          content: '.content'
     })

     window.addEventListener('scroll', e => {
          document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
     })


})