function searchAyat() {
   
    let input = document.getElementById('searchInput').value.toLowerCase();
   
    let ayatContainer = document.getElementById('ayatContainer');
    let cards = ayatContainer.getElementsByClassName('card-body');

    
    for (let i = 0; i < cards.length; i++) {
        let ayatText = cards[i].innerText.toLowerCase();

        if (ayatText.includes(input)) {
            cards[i].parentElement.parentElement.style.display = "";
        } else {
            cards[i].parentElement.parentElement.style.display = "none";
        }
    }
}
