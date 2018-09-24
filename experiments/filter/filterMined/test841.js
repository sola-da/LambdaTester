





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return !this.requiresMap.hasOwnProperty(item);
};
var argument2 = false;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    return !isNaN(d);
};
var argument4 = false;
var argument5 = {"705":"7","969":25,"":893,"V":"l"};
var argument6 = function () {
 callbackArguments.push(arguments) 

    return $(this).attr('for') == name;
};
var argument7 = "";
var argument8 = null;
var argument9 = function (t) {
 callbackArguments.push(arguments) 

    return t <= range[1] && t >= range[0];
};
var argument10 = false;
var base_0 = [122,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,595]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
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
var base_3 = [122,595]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test841.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)