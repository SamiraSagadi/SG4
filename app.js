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

    //display the results
    results.innerHTML = "This is your CO2 emission : " + CO2 + "g"  }
});