





var callbackArguments = [];
var argument1 = function (s) {
 callbackArguments.push(arguments) 

    return s ? s.replace('.', '').toLowerCase() : s;
};
var argument2 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument3 = "-";
var argument4 = function (p) {
 callbackArguments.push(arguments) 

    return Math.abs(p - median);
};
var argument5 = true;
var argument6 = function (column, rowIndex) {
 callbackArguments.push(arguments) 

    column.columns = column.children.map(function (row, columnIndex) {
        row.gridString = rowIndex + 1 + 'x' + (columnIndex + 1);
        return row;
    });
    return column;
};
var argument7 = null;
var argument8 = r_3;
var base_0 = [100,157,25,-100,823,1.7976931348623157e+308,-1,25]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,157,25,-100,823,1.7976931348623157e+308,-1,25]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,157,25,-100,823,1.7976931348623157e+308,-1,25]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,157,25,-100,823,1.7976931348623157e+308,-1,25]
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
require("fs").writeFileSync("./experiments/map/mapMined/test833.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)