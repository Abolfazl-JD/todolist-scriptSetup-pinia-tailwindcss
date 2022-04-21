import gsap from "gsap"

export const startPageAnimations = () => {
  const tl = gsap.timeline()
  tl.to(".heading-title", {
    duration: 1,
    opacity: 1,
    x: 0,
    ease: "easeout",
  })
  tl.from(
    ".theme-icon",
    {
      duration: 1,
      opacity: 1,
      x: 100,
      ease: "bounce.out",
    },
    "<"
  )
  tl.to(
    ".createTodo",
    {
      duration: 1,
      opacity: 1,
      scale: 1,
      ease: "bounce.out",
    },
    "<.3"
  )
  tl.to(
    ".mainbox",
    {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "easein",
    },
    "<.7"
  )
  tl.from(
    ".worksTodo",
    {
      duration: 1,
      opacity: 0,
      x: -100,
      ease: "easeout",
      stagger: 0.2,
    },
    "<.5"
  )
  tl.from(
    ".leftItems",
    {
      duration: 1,
      opacity: 0,
      x: -100,
      ease: "easeout",
    },
    "<.5"
  )
  tl.from(
    ".listOptions",
    {
      duration: 0.9,
      opacity: 0,
      y: 100,
      ease: "power1",
    },
    "<"
  )
  tl.to(".mainbox", { duration: 1.4, scrollTo: { y: "max" } }, "<.5")
}
