function timer(deadline) {
   
    function getDateEnd(endDate) {
        const t = Date.parse( new Date(endDate)) - new Date();
        const day = Math.floor(t / 1000 / 60 / 60 / 24);
        const hours = (Math.floor((t / 1000 / 60 / 60) % 24) - 2);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        return {
            timestamp: t,
            day,
            hours,
            minutes,
            seconds
        }
    }

    const interval = setInterval(setClock, 1000);

    setClock();

    function setClock() {
        const endTime = getDateEnd(deadline);
        const days = document.getElementById('days');
        const hours = document.getElementById('hours');
        const minutes = document.getElementById('minutes');
        const seconds = document.getElementById('seconds');
        
        if(endTime.timestamp <= 0) {
            clearInterval(interval);
        } else {
            days.innerText = getZero(endTime.day);
            hours.innerText = getZero(endTime.hours);
            minutes.innerText = getZero(endTime.minutes);
            seconds.innerText = getZero(endTime.seconds);
        }
    }

    function getZero(number) {
        if(number < 10) {
            return `0${number}`;
        } else {
            return number;
        }
    }
}

export default timer;
