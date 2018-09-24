





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    return linkto(r, htmlsafe(r), cssClass);
};
var argument2 = null;
var argument3 = function (atom) {
 callbackArguments.push(arguments) 

    return atom.value;
};
var argument4 = null;
var argument5 = "";
var argument6 = function (vi) {
 callbackArguments.push(arguments) 

    return processValue(vi, m);
};
var argument7 = ["6sG","z"];
var argument8 = ["Hj",100];
var argument9 = function (item) {
 callbackArguments.push(arguments) 

    return item.book.dayLimit;
};
var base_0 = ["x",122,"hsn",1.7976931348623157e+308,-1,"x",82,"88E","7"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["x",122,"hsn",1.7976931348623157e+308,-1,"x",82,"88E","7"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["x",122,"hsn",1.7976931348623157e+308,-1,"x",82,"88E","7"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["x",122,"hsn",1.7976931348623157e+308,-1,"x",82,"88E","7"]
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test856.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)