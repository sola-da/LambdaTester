





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return item['cols'];
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return !this.form;
};
var argument3 = null;
var argument4 = "O";
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    return item['rows'];
};
var argument6 = null;
var argument7 = false;
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    return fetchValue(vars, d, vars.id.value) == vars.focus.value[0];
};
var argument9 = 893;
var argument10 = null;
var base_0 = ["[#","+",969,607,"}"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[#","+",969,607,"}"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/filter/filterMined/test450.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)