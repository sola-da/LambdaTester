





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return $(this).button('widget')[0];
};
var argument2 = function (ch) {
 callbackArguments.push(arguments) 

    return ch.charCodeAt(0);
};
var argument3 = 5.341720909123559e+307;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this;
};
var argument5 = true;
var argument6 = false;
var argument7 = function () {
 callbackArguments.push(arguments) 

    return this.contentDocument || a.call(this.childNodes);
};
var base_0 = ["R","%","JB1","nm",">","1","="]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["R","%","JB1","nm",">","1","="]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["R","%","JB1","nm",">","1","="]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test457.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)