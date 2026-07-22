// scroll Animation
document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll(".section");

	window.addEventListener("scroll", function () {
		const scrollPosition = window.scrollY;

		sections.forEach(function (section) {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;

			if (
				scrollPosition >= sectionTop - sectionHeight / 1.5 &&
				scrollPosition < sectionTop + sectionHeight / 1.5
			) {
				section.classList.add("active");
			} else {
				section.classList.remove("active");
			}
		});
	});
});

//nav hovering effect
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById(".categories");
    const nav = document.querySelector(".sub-menu");

    menuBtn.addEventListener("click", function () {
        nav.classList.toggle("show");
    });
});

function showSubmenu(submenuId) {
    const submenus = document.querySelectorAll(".submenu");
    
    submenus.forEach(submenu => {
        submenu.style.display = "none";
    });

    const selectedSubmenu = document.getElementById(submenuId);
    selectedSubmenu.style.display = "block";
}


// home carousel
document.addEventListener("DOMContentLoaded", function () {
	const carousel = document.querySelector(".carousel");
	const prevButton = document.querySelector(".prev");
	const nextButton = document.querySelector(".next");
	const dotsContainer = document.querySelector(".dots");

	const slides = document.querySelectorAll(".slide");
	const totalSlides = slides.length;
	let currentIndex = 0;

	// Add dots based on the number of slides
	for (let i = 0; i < totalSlides; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dotsContainer.appendChild(dot);
		dot.addEventListener("click", () => goToSlide(i));
	}

	const dots = document.querySelectorAll(".dot");

	function updateDots() {
		dots.forEach((dot, i) => {
			dot.classList.toggle("active", i === currentIndex);
		});
	}

	function goToSlide(index) {
		currentIndex = index;
		updateDots();
		const translateValue = -index * 100 + "%";
		carousel.style.transform = "translateX(" + translateValue + ")";
	}

	function nextSlide() {
		currentIndex = (currentIndex + 1) % totalSlides;
		goToSlide(currentIndex);
	}

	function prevSlide() {
		currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
		goToSlide(currentIndex);
	}

	// Event listeners for next and previous buttons
	nextButton.addEventListener("click", nextSlide);
	prevButton.addEventListener("click", prevSlide);

	// Initial setup
	updateDots();
});
