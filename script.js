Math.random();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

async function fetchData() {
    const options = {
        method: 'GET',
        headers: {'X-Api-Key': 'jFiKbOhS5PcjOOLWWMTwhg==TPKz5cxMmZSsYm5n'},
        contentType: "application/json",

}

    const res = await fetch('https://api.api-ninjas.com/v1/historicalevents?text=roman empire', options)
    const record = await res.json()

    const num = getRandomInt(0,record.length-1)
    document.getElementById("year").innerHTML = `<li>on the year: ${record[num].year}</li>`;
    document.getElementById("fact").innerHTML = `<li>${record[num].event}</li>`;
}

fetchData(); 