let sportsOne : string[] = ['golf', "cricket", "tennis", "swimming"];

for (let i=0; i< sportsOne.length; i++){
    console.log(sportsOne[i])
}


for (let tempSport of sportsOne){

    if (tempSport == "cricket"){
        console.log("this is my favorite sport "  + tempSport)
    } else {
        console.log("update " + tempSport)

    }
}