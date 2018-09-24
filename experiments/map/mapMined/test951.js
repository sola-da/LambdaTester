





var callbackArguments = [];
var argument1 = function (localizedDigit) {
 callbackArguments.push(arguments) 

    return regexpEscape(localizedDigit);
};
var argument2 = function (part) {
 callbackArguments.push(arguments) 

    if (part) {
        return part;
    }
};
var argument3 = {"82":705,"*9B":"","6.343238964264347e+307":"97","":"=J","-100":1.278007455719262e+308,"1.0586273388386606e+308":"","1.0230890806496375e+308":"yK","{z":"A*K!","1.4457469990960225e+308":6.281132745235113e+307,"z":""};
var argument4 = null;
var argument5 = function (p, i) {
 callbackArguments.push(arguments) 

    return [
        i,
        Math.abs(p - median) / mad
    ];
};
var argument6 = "X-";
var argument7 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var argument8 = ["HM","7N",126,"!`rIn9KP",0,"Z","z*:","wc",893,"e"];
var argument9 = null;
var base_0 = [0,122,783,0]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,122,783,0]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,122,783,0]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test951.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)