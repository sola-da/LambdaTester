





var callbackArguments = [];
var argument1 = function (pvalues, pname) {
 callbackArguments.push(arguments) 

    var result = StringMatch.stringMatch(pname, needle, stringMatcherOptions);
    if (result) {
        return result;
    }
};
var argument2 = "JqT";
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var argument5 = "r";
var argument6 = false;
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return !!d.disabled;
};
var argument8 = r_0;
var argument9 = function (match) {
 callbackArguments.push(arguments) 

    return match.route;
};
var base_0 = [714,783,82]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,783,82]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test986.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)