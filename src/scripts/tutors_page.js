document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImage = document.querySelector(".modal__image");
    const modalTitle = document.querySelector(".modal__title");
    const modalExperience = document.querySelector(".modal__experience");
    const modalAge = document.querySelector(".modal__age");
    const modalSubjects = document.querySelector(".modal__subjects");
    const closeModal = document.querySelector(".modal__close");

    document.querySelectorAll(".main__card").forEach(card => {
        card.addEventListener("click", function () {
            const imageSrc = card.querySelector(".card__image img").src;
            const name = card.querySelector(".card__title").textContent;
            const experience = card.querySelector(".information-list__item:nth-child(1) .information__text").textContent;
            const age = card.querySelector(".information-list__item:nth-child(2) .information__text").textContent;
            const subjects = card.querySelector(".information-list__item:nth-child(3) .information__text").textContent;

            modalImage.src = imageSrc;
            modalTitle.textContent = name;
            modalExperience.textContent = experience;
            modalAge.textContent = age;
            modalSubjects.textContent = subjects;

            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
