





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    return [
        r.id,
        r.ip,
        r.name,
        r.bannedby,
        r.reason
    ];
};
var argument2 = "{";
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    var h = {
            label: key,
            units: data[key]
        };
    return h;
};
var argument4 = false;
var argument5 = ["B","?_","gP","(C","?","V"];
var argument6 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstChild && elem.firstChild.nodeType === 1) {
        elem = elem.firstChild;
    }
    return elem;
};
var argument7 = r_1;
var base_0 = [157,242,49,1.7976931348623157e+308,122]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,242,49,1.7976931348623157e+308,122]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
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
require("fs").writeFileSync("./experiments/map/mapMined/test411.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2]),"returnObjects":serialize([r_0,r_1,r_2]),"callbackArgs":callbackArguments}))
},300)