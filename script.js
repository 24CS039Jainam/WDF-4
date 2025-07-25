// script.js

// Basic FAQ data
const faqs = [
    {
        question: "What is this website about?",
        answer: "This website demonstrates an FAQ section with an image slider."
    },
    {
        question: "Can I contribute?",
        answer: "Yes, feel free to suggest improvements!"
    },
    {
        question: "Is this mobile responsive?",
        answer: "With minor tweaks in CSS, yes!"
    }
];

// Load FAQ items into the page
const faqContainer = document.getElementById("faq-container");
faqs.forEach(faq => {
    const questionEl = document.createElement("h3");
    questionEl.textContent = faq.question;
    questionEl.style.cursor = "pointer";

    const answerEl = document.createElement("p");
    answerEl.textContent = faq.answer;
    answerEl.style.display = "none";

    questionEl.addEventListener("click", () => {
        answerEl.style.display = answerEl.style.display === "none" ? "block" : "none";
    });

    faqContainer.appendChild(questionEl);
    faqContainer.appendChild(answerEl);
});

// Image Slider
const images = [
    "image1.png",
    "image2.png",
    "image3.png"
];
let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Initial load
sliderImage.src = images[currentIndex];

// Event listeners
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    sliderImage.src = images[currentIndex];
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
});

// Show notification on page load
window.addEventListener("DOMContentLoaded", () => {
    const notify = document.getElementById("notify");
    const closeBtn = document.getElementById("close-btn");

    notify.style.display = "block"; // Show the notification

    // Hide when close button is clicked
    closeBtn.addEventListener("click", () => {
        notify.style.display = "none";
    });
});

