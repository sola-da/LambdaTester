





var callbackArguments = [];
var argument1 = function (marker) {
 callbackArguments.push(arguments) 

    return _this.remove(marker);
};
var argument2 = null;
var argument3 = ["B&",893,"o",82,"]N#:","p",627];
var argument4 = function (et) {
 callbackArguments.push(arguments) 

    _run(et);
};
var argument5 = 607;
var argument6 = false;
var argument7 = function (property) {
 callbackArguments.push(arguments) 

    structuralType._updateNames(property);
    if (!property.isUnmapped) {
        structuralType._mappedPropertiesCount++;
    }
};
var argument8 = function (i) {
 callbackArguments.push(arguments) 

    var n = fetchValue(vars, i, t, key);
    if (n) {
        if (n instanceof Array && d3plus.object.validate(n[0])) {
            n = d3plus.util.uniques(n, t);
        }
        name = name.concat(n);
    }
};
var argument9 = {"":5.491558326533119e+307};
var argument10 = null;
var base_0 = [595,122,82,893,618,783]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,122,82,893,618,783]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,122,82,893,618,783]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,122,82,893,618,783]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/forEach/forEachMined/test755.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)