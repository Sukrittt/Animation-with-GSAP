const timelineOne = gsap.timeline({
  defaults: { duration: 0.7, ease: Back.easeOut.config(2), opacity: 1 },
});
const timelineTwo = gsap.timeline({
  defaults: { duration: 1.5, delay: 1 },
});
const timelineThree = gsap.timeline({
  defaults: { duration: 1.5 },
});

// Animating each element of the card
timelineOne
  .from(
    ".card-bg", // card body
    { delay: 1, scale: 0.2, transformOrigin: "center" },
    "=.2"
  )
  .from(
    ".card-top", // header of the card
    { scaleY: 0, transformOrigin: "top" },
    "=.2"
  )
  .from(
    ".icon", // the gallery icon in the header of the card
    { scale: 0.2, transformOrigin: "center" },
    "-=.7"
  )
  // Animation the small rectangles in the card
  // Each rectangle has a width of 0 in x-axis and then they return to their original width
  // Each rectangle has been given an offset which tells them when that animation should begin
  .from(".blip1", { scaleX: 0 })
  .from(".blip2", { scaleX: 0 }, "-=.2")
  .from(".blip3", { scaleX: 0 }, "-=.3")
  .from(".blip4", { scaleX: 0 }, "-=.5")
  .from(".blip5", { scaleX: 0 }, "-=.7");

// Animating the whole card as group
// It will move the card up and down on y-axis by 10px for an infinite time period
timelineTwo.to(".whole-card", { y: 10, repeat: -1, yoyo: true });

// To animate the hero text
timelineThree.from(".main-content", { opacity: 0, y: 40, stagger: 0.3 });
