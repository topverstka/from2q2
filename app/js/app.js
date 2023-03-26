document.addEventListener('DOMContentLoaded', () => {

     gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
     ScrollSmoother.create({
          wrapper: '.wrapper',
          content: '.content'
     })

     window.addEventListener('scroll', e => {
          document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
     })

     gsap.to(".front-el__2", {
          scale: 1,
          y: 100,
          opacity: 1,
          duration: 50,
          transition: "linear",
          scrollTrigger: {
               trigger: ".front-el__2",
               start: "top 70%",
               end: "bottom 20%",
               scrub: 0,
          }

     })

     gsap.to(".front-el__1", {
          scale: 1,
          y: 100,
          opacity: 1,
          duration: 50,
          transition: "linear",
          scrollTrigger: {
               trigger: ".section__main-article",
               start: "top 70%",
               end: "bottom 20%",
               scrub: 0,
          }

     })

     gsap.to(".main-news-letter__el-4", {
          scale: 1,
          y: 50,
          opacity: 1,
          duration: 50,
          transition: "linear",
          scrollTrigger: {
               trigger: ".section__main-news-letter",
               start: "top 70%",
               end: "bottom 20%",
               scrub: 0,
               markers: true,
          }

     })

     gsap.to(".footer__el-1, .footer__el-2", {
          scale: 1,
          y: 100,
          opacity: 1,
          duration: 50,
          transition: "linear",
          scrollTrigger: {
               trigger: ".footer",
               start: "top 70%",
               end: "bottom 20%",
               scrub: 0,
               markers: true,
          }

     })


})