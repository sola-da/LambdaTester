





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    return this.dataType.fmtOData(v);
};
var argument2 = function (row, columnIndex) {
 callbackArguments.push(arguments) 

    row.gridString = rowIndex + 1 + 'x' + (columnIndex + 1);
    return row;
};
var argument3 = ["HU","t","Gwo|","t",">W","k(","B"];
var argument4 = false;
var argument5 = function (leaf) {
 callbackArguments.push(arguments) 

    return leaf.rev;
};
var argument6 = null;
var argument7 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var base_0 = [100,"@",714,"V)","v","L",157]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,"@",714,"V)","v","L",157]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,"@",714,"V)","v","L",157]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/map/mapMined/test73.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)