





var callbackArguments = [];
var argument1 = function (choice) {
 callbackArguments.push(arguments) 

    return choice.indexOf(query) != -1;
};
var argument2 = function (i, elem) {
 callbackArguments.push(arguments) 

    return !jQuery('a', elem).length;
};
var argument3 = function (tut) {
 callbackArguments.push(arguments) 

    return tut != name;
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var base_0 = ["vx;^","*8","qcr"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["vx;^","*8","qcr"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["vx;^","*8","qcr"]
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["vx;^","*8","qcr"]
var r_3= undefined
try {
r_3 = base_3.filter(argument4)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test402.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)