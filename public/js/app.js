const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const slocation = search.value;
    document.querySelector('form button').style.animation = "buttonAnimation 1s infinite ease-out"
    document.querySelector(`#message-1`).innerHTML = 'Loading...';
    document.querySelector(`#message-2`).innerHTML = '';
    document.querySelector(`#message-3`).innerHTML = '';
    document.querySelector(`#message-4`).innerHTML = '';
    document.querySelector(`#message-5`).innerHTML = '';
    document.querySelector(`#message-6`).innerHTML = '';
    fetch(`/weather?address=${slocation}`).then((res) => {
        res.json().then((data) => {

            document.querySelector('form button').style.animation = "none"
            if (data.error) {
                return document.querySelector(`#message-1`).innerHTML = data.error;
            } else {
                const {
                    location,
                    tempData,
                    precipProb,
                    sum,
                    hourlySum,
                    ozone,
                    pressure,
                    humidity,
                    windSpeed,
                } = data
                document.querySelector(`#message-1`).innerHTML = location;
                document.querySelector(`#message-2`).innerHTML = sum;
                document.querySelector(`#message-3`).innerHTML = tempData;
                document.querySelector(`#message-4`).innerHTML = precipProb;
                document.querySelector(`#message-5`).innerHTML = hourlySum;
                document.querySelector(`#message-6`).innerHTML = `Ozon qatı : ${ozone} Dobson`;
                document.querySelector(`#message-7`).innerHTML = `Təyziq : ${pressure} Pa`;
                document.querySelector(`#message-8`).innerHTML = `Rütubət : ${humidity * 100}%`;
                document.querySelector(`#message-9`).innerHTML = `Küləyin ortalama sürəti : ${windSpeed} m/san`
            }
        })
    })
})