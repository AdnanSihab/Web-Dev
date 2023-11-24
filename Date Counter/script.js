function updateCountdown(targetDate, countdownId) {
    const targetTime = new Date(targetDate).getTime();

    function calculateTimeRemaining() {
        const currentTime = new Date().getTime();
        const timeRemaining = targetTime - currentTime;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById(countdownId).innerHTML = `
            <div class="countdown-item">
                <span>${days}</span>
                <span>Days</span>
            </div>
            <div class="countdown-item">
                <span>${hours}</span>
                <span>Hours</span>
            </div>
            <div class="countdown-item">
                <span>${minutes}</span>
                <span>Minutes</span>
            </div>
            <div class="countdown-item">
                <span>${seconds}</span>
                <span>Seconds</span>
            </div>
        `;
    }

    // Initial update
    calculateTimeRemaining();

    // Update the countdown every second
    setInterval(calculateTimeRemaining, 1000);
}

// Set target dates for each countdown timer
updateCountdown("2023-10-19T01:17:30", "countdown1");
updateCountdown("2023-12-31T23:59:59", "countdown2");
