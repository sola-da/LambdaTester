





var callbackArguments = [];
var argument1 = function (prop) {
 callbackArguments.push(arguments) 

    return prop.nameOnServer;
};
var argument2 = ["0"];
var argument3 = ["r","H+e","O=H",843,705];
var argument4 = function (pp) {
 callbackArguments.push(arguments) 

    return new OrderByItem(pp, isDesc);
};
var argument5 = false;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return [];
};
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return d.labels;
};
var argument8 = [655,627,460,82,25,157];
var argument9 = r_0;
var base_0 = [705,-1,607,460,705]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,-1,607,460,705]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test526.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)