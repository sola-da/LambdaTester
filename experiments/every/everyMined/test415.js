





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return true;
};
var argument2 = true;
var argument3 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var argument4 = function (other) {
 callbackArguments.push(arguments) 

    return _.indexOf(other, item) >= 0;
};
var argument5 = function (t) {
 callbackArguments.push(arguments) 

    return d[t] >= filter[t].min && d[t] <= filter[t].max;
};
var argument6 = null;
var argument7 = true;
var base_0 = ["l","dgE?","52_","W","L4I"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l","dgE?","52_","W","L4I"]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l","dgE?","52_","W","L4I"]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l","dgE?","52_","W","L4I"]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyMined/test415.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)