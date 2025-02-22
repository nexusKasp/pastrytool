document.addEventListener("DOMContentLoaded", function () {
    console.log("Страница загружена!");

    if (typeof Swiper === "undefined") {
        console.error("Ошибка: Swiper.js не загружен!");
        return;
    }

    let swiperContainer = document.querySelector(".swiper");
    if (!swiperContainer) {
        console.error("Ошибка: контейнер .swiper не найден!");
        return;
    }
    let swiper = new Swiper(".swiper", {
        loop: false,
        speed: 600,
        slidesPerView: 1,
        slidesPerGroup: 1,
        pagination: { el: ".swiper-pagination", clickable: true },
    });

    console.log("Swiper успешно инициализирован!", swiper);

    document.querySelectorAll(".category-button").forEach((button) => {
        button.addEventListener("click", function () {
            let index = parseInt(button.getAttribute("data-index"));
            console.log("Клик по кнопке! Индекс:", index);

            document.querySelectorAll(".category-button").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            swiper.slideTo(index);
            console.log("Переключено на страницу:", index);
        });
    });
});