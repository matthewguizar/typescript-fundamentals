var sportsOne = ['golf', "cricket", "tennis", "swimming"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "cricket") {
        console.log("this is my favorite sport" + tempSport);
    }
    else {
        console.log("update " + tempSport);
    }
}
