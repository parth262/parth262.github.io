var measurementTypes = {
    weight: ["paramanu","dhavashanti","marichi","mg","gram","kg"],
    time: ["ksana","lava","nimesha","seconds","minutes","hours"],
    length: ["yavodara","angula","bitahasti","millimeter","centimeter","meter"]
};

function changeType(value) {
    if (value.length == 0) {
        document.getElementById("from_unit").innerHTML = "<option></option>";
        document.getElementById("to_unit").innerHTML = "<option></option>";
    }
    else {
        var typeOptions = "";
        for(options in measurementTypes[value]) {
            typeOptions += "<option value=" + measurementTypes[value][options] + ">" + measurementTypes[value][options] + "</option>";
        }
        document.getElementById("from_unit").innerHTML = typeOptions;
        document.getElementById("to_unit").innerHTML = typeOptions;
        toggleSidebar();
    }
    let type = "None";
    switch(value) {
        case "weight": 
            type = "Weight and Measures";
            break;
        case "time":
            type= "Time";
            break;
        case "length":
            type= "Length";
            break;
        default:
            type="None";
            break;
    }
    document.getElementById("type").innerHTML = type;
}

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("toggle");
}

function inputChanged(value) {
    console.log(value);
    let temp = value*10;
    document.getElementById("output").value = temp;
}