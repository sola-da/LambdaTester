





var callbackArguments = [];
var argument1 = function (doclet) {
 callbackArguments.push(arguments) 

    return !isModuleFunction(doclet);
};
var argument2 = ";";
var argument3 = null;
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    return item.blockID !== block.blockID;
};
var argument5 = ["evT>$","(d","n","2","<","c",")","(","@"];
var argument6 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument7 = function (item) {
 callbackArguments.push(arguments) 

    return productName == item.item;
};
var argument8 = ["M","I","W","$[","|","<",":","0","[W-"];
var argument9 = r_3;
var base_0 = [213,242,655,783,157,403,655]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,242,655,783,157,403,655]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,242,655,783,157,403,655]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,242,655,783,157,403,655]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test586.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)