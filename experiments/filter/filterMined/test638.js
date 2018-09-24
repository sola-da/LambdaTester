





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    return [
        'string',
        'number'
    ].indexOf(typeof t) >= 0;
};
var argument2 = [157,122,595,126];
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    return !d.disabled;
};
var argument4 = "34kdK";
var argument5 = function (d, i) {
 callbackArguments.push(arguments) 

    return i === 0;
};
var argument6 = function () {
 callbackArguments.push(arguments) 

    context = this;
};
var base_0 = [969,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,618]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,618]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test638.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)