document.querySelectorAll('input[type=radio][name=rate]').forEach(radio => {
    radio.addEventListener('click',  (evt) => {
        document.getElementById("rated").innerText = evt.target.value
    })
})

document.getElementById("btn-submit").addEventListener('click', function () {
    document.getElementById("rate").style.display = 'none'
    document.getElementById("thank-you-container").style.display = 'block'
})