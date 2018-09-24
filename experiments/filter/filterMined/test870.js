





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument2 = false;
var argument3 = function () {
 callbackArguments.push(arguments) 

    return this.selected;
};
var argument4 = [618,1.7976931348623157e+308,607,25];
var argument5 = {"3":157,"25":969,"t7":"T","^":1.5129359166913438e+308};
var argument6 = function () {
 callbackArguments.push(arguments) 

    return !jQuery('a', this).length;
};
var argument7 = function (item) {
 callbackArguments.push(arguments) 

    return value !== item;
};
var argument8 = [403,969,122,"W9v!",714,627,"S","GJP","oh"];
var base_0 = ["Kl`",">Rx","Ay","V?"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Kl`",">Rx","Ay","V?"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Kl`",">Rx","Ay","V?"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Kl`",">Rx","Ay","V?"]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test870.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)