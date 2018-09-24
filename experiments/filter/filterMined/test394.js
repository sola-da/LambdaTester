





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    for (var i = 0, l = targets.length; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument2 = false;
var argument3 = 59;
var argument4 = function (elem, pos, self) {
 callbackArguments.push(arguments) 

    return self.indexOf(elem) === pos;
};
var argument5 = 714;
var argument6 = function (match) {
 callbackArguments.push(arguments) 

    return !hasMatch(currentMatches, match);
};
var argument7 = [969,126,-1,25,25,893,655];
var argument8 = function (c) {
 callbackArguments.push(arguments) 

    return c !== container;
};
var argument9 = false;
var argument10 = r_3;
var base_0 = [893,595,242,714,403,627,705,25]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,595,242,714,403,627,705,25]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,595,242,714,403,627,705,25]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test394.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)