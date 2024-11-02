(function () {
    window.addEventListener('load', function () {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        const domContentLoadedTime = timing.domContentLoadedEventEnd - timing.navigationStart;

        const statsText = `
            Время полной загрузки страницы: ${loadTime} мс <br>
            Время до DOMContentLoaded: ${domContentLoadedTime} мс
        `;

        const statsContainer = document.getElementById('loadStats');
        if (statsContainer) {
            statsContainer.innerHTML = statsText;
        }
    });
})();