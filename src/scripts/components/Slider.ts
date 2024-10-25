class Slider {
    private galleryList: HTMLElement;
    private items: NodeListOf<HTMLElement>;
    private nextButton: HTMLElement;
    private prevButton: HTMLElement;
    private currentIndex: number;

    constructor() {
        this.galleryList = document.querySelector('.gallery__list') as HTMLElement;
        this.items = document.querySelectorAll('.gallery__item') as NodeListOf<HTMLElement>;
        this.nextButton = document.querySelector('.gallery__button--next') as HTMLElement;
        this.prevButton = document.querySelector('.gallery__button--prev') as HTMLElement;
        this.currentIndex = 0;

        this.nextButton.addEventListener('click', () => this.nextSlide());
        this.prevButton.addEventListener('click', () => this.prevSlide());

        this.updateGallery();
    }

    private nextSlide(): void {
        if (this.currentIndex < this.items.length - 1) {
            this.currentIndex++;
            this.updateGallery();
        }
    }

    private prevSlide(): void {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateGallery();
        }
    }

    private updateGallery(): void {
        const offset = -this.currentIndex * 100;
        this.galleryList.style.transform = `translateX(${offset}%)`;
    }
}

export const initSlider = () => {
    document.addEventListener('DOMContentLoaded', () => {
        new Slider();
        console.log("Create slider")
    });
};
