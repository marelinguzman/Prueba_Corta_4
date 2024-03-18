document.addEventListener("DOMContentLoaded", function() {
    const main = document.querySelector('.cronometro');
    
    const createTimer = (minutes, seconds) => {
        const timerDisplay = document.createElement('div');
        timerDisplay.classList.add('timer');

        const formatTime = (time) => {
            return time < 10 ? `0${time}` : time;
        };

        const updateDisplay = () => {
            timerDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
        };

        updateDisplay();
        main.appendChild(timerDisplay);

        const timerInterval = setInterval(() => {
            seconds--;
            if (seconds < 0) {
                if (minutes === 0) {
                    clearInterval(timerInterval);
                    timerDisplay.textContent = "00:00";
                    return;
                }
                minutes--;
                seconds = 59;
            }
            updateDisplay();
        }, 1000);
    };

    const createForm = () => {
        const form = document.createElement('form');
        form.classList.add('timer-form');

        const minutesInput = document.createElement('input');
        minutesInput.type = 'number';
        minutesInput.min = 0;
        minutesInput.placeholder = 'Min';
        minutesInput.required = true;
        form.appendChild(minutesInput);

        const secondsInput = document.createElement('input');
        secondsInput.type = 'number';
        secondsInput.min = 0;
        secondsInput.max = 59;
        secondsInput.placeholder = 'Seg';
        secondsInput.required = true;
        form.appendChild(secondsInput);

        const startButton = document.createElement('button');
        startButton.textContent = 'Iniciar';
        startButton.type = 'submit';
        form.appendChild(startButton);

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const minutes = parseInt(minutesInput.value);
            const seconds = parseInt(secondsInput.value);
            createTimer(minutes, seconds);
            form.reset();
        });

        main.appendChild(form);
    };

    createForm();
});