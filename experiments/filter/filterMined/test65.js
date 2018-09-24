





var callbackArguments = [];
var argument1 = function (match) {
 callbackArguments.push(arguments) 

    return previousMatches.indexOf(match) !== -1;
};
var argument2 = false;
var argument3 = true;
var argument4 = function (kp) {
 callbackArguments.push(arguments) 

    return kp !== null;
};
var argument5 = true;
var argument6 = function (elem, i) {
 callbackArguments.push(arguments) 

    if (elem.message == 'ImportStatement') {
        _imports_positions.push(i);
        return true;
    }
    return false;
};
var argument7 = null;
var argument8 = r_2;
var argument9 = function (element) {
 callbackArguments.push(arguments) 

    return new RegExp('^' + _this.cookieNamePrefix).test(element);
};
var base_0 = ["d$;","R"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["d$;","R"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["d$;","R"]
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test65.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)