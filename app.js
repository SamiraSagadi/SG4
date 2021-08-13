var modal = document.getElementById("myModal");

// Get the button that opens the modal
var buttonn = document.getElementById("button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
button.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*var quotes = [
    "Store-bought bottled water has nearly 1,150 times the emissions attached to it than a glass poured from the tap.",
    "A 500-millilitre (one-pint) bottle is responsible for 160 gCO2e compared to 0.14 gCO2e for tap water.",
    "Plastic grocery bags each have a carbon footprint of 10 gCO2e, but the paper ones are even worse at 40 gCO2e each.",
    "A large cappuccino comes with a footprint of 235 gCO2e, partly because of the emissions from raising the cow which produced the milk. For a cup of home-made black tea or coffee for which just enough water was boiled, the figure is 21 gCO2e.",
    "A mile of cycling fuelled by a meal of bananas would be responsible for 65 gCO2e, compared to 260 gCO2e for a mile powered by cheeseburgers.",
    "The global carbon footprint from spam annually is equivalent to the greenhouse gases pumped out by 3.1 million passenger cars using 7.6 billion litres (two billion gallons) of gasoline in a year."
  ];

  function newQuote(){
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quote-display').innerHTML = quotes[randomNumber];
  }; */

const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inbox = parseInt(document.querySelector('#inbox').value);
    const spam = parseInt(document.querySelector('#spam').value);
    const results = document.querySelector('#results');

    if((inbox === '') || (inbox < 0) || (isNaN(inbox))){
        //NaN !== NaN
        results.innerHTML = "Please provide a valid number of emails in the inbox folder";
        
    } else if (spam === '' || spam < 0 || isNaN(spam)){
        results.innerHTML = "Please provide a valid number of emails in the spam folder (This can be zero!)";
    } else {
    //calculate CO2 emission
    const CO2 = ((inbox*4) + (spam*0.3))
    const Netflix = Math.round(CO2/36) 

    //display the results
    results.innerHTML = "This is your CO2 emission : " + CO2 + "g. This is equivalent to watching " + Netflix + " hours of Netflix!"  }
});