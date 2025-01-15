document.addEventListener("DOMContentLoaded", function() {
    const scrollElements = document.querySelectorAll(".scroll-animation");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const elementOutOfView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop > (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
        element.classList.remove("hidden");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("visible");
        element.classList.add("hidden");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else if (elementOutOfView(el)) {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

    // Initial check to show elements already in view on page load
    handleScrollAnimation();

    // Event listener for project cards on click for mobile devices
    const projectCards = document.querySelectorAll(".project-cards .card");

    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const description = card.querySelector(".description");
            const isVisible = card.classList.contains("show-description");
            if (!isVisible) {
                // Show description
                card.classList.add("show-description");
                card.classList.remove("hide-description");
            } else {
                // Hide description
                card.classList.add("hide-description");
                setTimeout(() => {
                    card.classList.remove("show-description");
                    card.classList.remove("hide-description");
                }, 500); // Delay to match transition
            }
        });
    });
});
