const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
    const index = this.dinosaurs.indexOf(dinosaur)
    this.dinosaurs.splice(index, 1);
}

Park.prototype.mostPopularDinosaur = function(){
    let mostPopular = this.dinosaurs[0];
    for (currentDinosaur of this.dinosaurs){
        if (currentDinosaur.guestsAttractedPerDay >= mostPopular.guestsAttractedPerDay){
            mostPopular = currentDinosaur;
        };
    };
    return mostPopular;
};

Park.prototype.findBySpecies = function(species){
    let dinosaursOfSpecies = [];
    for (currentDinosaur of this.dinosaurs){
        if (currentDinosaur.species === species){
            dinosaursOfSpecies.push(currentDinosaur);
        };
    };
    return dinosaursOfSpecies;
};

Park.prototype.visitorsPerDay = function(){
    let visitorsPerDay = 0;
    for (currentDinosaur of this.dinosaurs){
        visitorsPerDay += currentDinosaur.guestsAttractedPerDay;
    };
    return visitorsPerDay;
};

Park.prototype.visitorsPerYear = function(){
    return this.visitorsPerDay() * 365;
}

Park.prototype.revenuePerYear = function(){
    return this.visitorsPerYear() * this.ticketPrice;
};

module.exports = Park;