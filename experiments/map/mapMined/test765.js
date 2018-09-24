





var callbackArguments = [];
var argument1 = function (i) {
 callbackArguments.push(arguments) 

    return 'this._shape' + i;
};
var argument2 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument3 = null;
var argument4 = null;
var argument5 = function (model) {
 callbackArguments.push(arguments) 

    return model.toJSON(options);
};
var argument6 = null;
var argument7 = null;
var argument8 = function (column, rowIndex) {
 callbackArguments.push(arguments) 

    column.columns = column.children.map(function (row, columnIndex) {
        row.gridString = rowIndex + 1 + 'x' + (columnIndex + 1);
        return row;
    });
    return column;
};
var base_0 = ["IT",":","_T","f","na",");<%e","R","L","JG"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test765.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)