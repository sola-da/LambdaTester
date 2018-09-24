





var callbackArguments = [];
var argument1 = function (pp) {
 callbackArguments.push(arguments) 

    return new OrderByItem(pp, isDesc);
};
var argument2 = null;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var argument4 = true;
var argument5 = null;
var argument6 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument7 = null;
var argument8 = false;
var argument9 = function (dimName) {
 callbackArguments.push(arguments) 

    return atoms[dimName].key;
};
var argument10 = 1.430963878341383e+308;
var base_0 = ["N*rz","M","W",":Ep`",",","J(b","m","$mP"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N*rz","M","W",":Ep`",",","J(b","m","$mP"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N*rz","M","W",":Ep`",",","J(b","m","$mP"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N*rz","M","W",":Ep`",",","J(b","m","$mP"]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test798.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)