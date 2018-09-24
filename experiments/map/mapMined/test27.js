





var callbackArguments = [];
var argument1 = function (row) {
 callbackArguments.push(arguments) 

    return row.doc.dbname;
};
var argument2 = true;
var argument3 = function (element, index) {
 callbackArguments.push(arguments) 

    return util.curry(iterator, element, index);
};
var argument4 = {"":242,"?":""};
var argument5 = null;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x * OIMO.INV_SCALE;
};
var argument7 = r_0;
var argument8 = "I3";
var argument9 = function (colGroup) {
 callbackArguments.push(arguments) 

    return '' + colGroup[0].v;
};
var argument10 = "";
var argument11 = {"49":"%","C":460,"A":")1","":714};
var base_0 = ["&g","$t","T@"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&g","$t","T@"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&g","$t","T@"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&g","$t","T@"]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapMined/test27.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)