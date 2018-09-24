





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    return !predicate(v);
};
var argument2 = "*A$g";
var argument3 = r_0;
var argument4 = function (line) {
 callbackArguments.push(arguments) 

    return _.str.include(lin"Error".toLowerCase(), term.toLowerCase());
};
var argument5 = false;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
};
var argument7 = [714,-100,100,213];
var argument8 = false;
var argument9 = function (value, index, collection) {
 callbackArguments.push(arguments) 

    return !callback(value, index, collection);
};
var base_0 = [607,627,595,-100,213,49,157]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,627,595,-100,213,49,157]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,627,595,-100,213,49,157]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,627,595,-100,213,49,157]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test344.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)