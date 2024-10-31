// import gsap from 'gasp';

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for elements with data-animate attribute
    document.querySelectorAll("[data-animate]").forEach((elem) => {
        let animationType = elem.getAttribute("data-animate");

        gsap.fromTo(
            elem,
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%", // Trigger when element is 85% in view
                    toggleActions: "play none none none",
                },
                ease: "power2.out"
            }
        );

        // Add additional animations based on type
        if (animationType === "slide") {
            gsap.from(elem, {
                x: -100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                ease: "power2.out"
            });
        } else if (animationType === "zoom") {
            gsap.from(elem, {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                ease: "power2.out"
            });
        }
    });
});
