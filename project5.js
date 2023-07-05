

//bind() method


var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
    }
    }
    var person1 = {name: "Esha"};
    var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
    
    // Binds the displayDetails function to the person1 object
    detailsOfPerson1();
    
    
    // Returns Vivek, bike details: TS0452, Thunderbird