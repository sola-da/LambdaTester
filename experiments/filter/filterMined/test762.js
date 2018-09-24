





var callbackArguments = [];
var argument1 = function (match) {
 callbackArguments.push(arguments) 

    return !hasMatch(nextMatches, match);
};
var argument2 = function (option) {
 callbackArguments.push(arguments) 

    return option.selected;
};
var argument3 = null;
var argument4 = [122,242,607,213,82,100,627,714,100];
var argument5 = function (d, i) {
 callbackArguments.push(arguments) 

    return i === 0;
};
var argument6 = 3.5666296680868445e+307;
var argument7 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < l; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument8 = r_1;
var base_0 = [-100,655,-100,-1]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,655,-100,-1]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,655,-100,-1]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test762.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)