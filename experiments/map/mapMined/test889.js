





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return [];
};
var argument2 = null;
var argument3 = function (x) {
 callbackArguments.push(arguments) 

    x = x.clone();
    if (x.start.row == oldStart.row)
        x.start.column += collDiff;
    if (x.end.row == oldStart.row)
        x.end.column += collDiff;
    x.start.row += rowDiff;
    x.end.row += rowDiff;
    return x;
};
var argument4 = null;
var argument5 = function (entry) {
 callbackArguments.push(arguments) 

    return (current.added ? '+' : '-') + entry;
};
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    return (isFunc ? method : value[method]).apply(value, args);
};
var argument7 = true;
var argument8 = {"4":705,"":"GY","$+P":705};
var base_0 = [823,25,100,595,783,1.7976931348623157e+308,783,25,403]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,25,100,595,783,1.7976931348623157e+308,783,25,403]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test889.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)