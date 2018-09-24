





var callbackArguments = [];
var argument1 = function (row) {
 callbackArguments.push(arguments) 

    return row.doc.dbname;
};
var argument2 = function (t) {
 callbackArguments.push(arguments) 

    return t.values.map(function (v) {
        return v.x;
    });
};
var argument3 = null;
var argument4 = "";
var argument5 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument6 = false;
var argument7 = false;
var argument8 = function (i, el) {
 callbackArguments.push(arguments) 

    row = el.parentNode._DT_RowIndex;
    return {
        row: row,
        column: $.inArray(el, data[row].anCells)
    };
};
var base_0 = [122]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122]
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
require("fs").writeFileSync("./experiments/map/mapMined/test481.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)