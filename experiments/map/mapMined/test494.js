





var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    return path.basename(file).replace(/\.js$/, '');
};
var argument2 = null;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument4 = null;
var argument5 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument6 = r_1;
var argument7 = true;
var argument8 = function (column, rowIndex) {
 callbackArguments.push(arguments) 

    column.columns = column.children.map(function (row, columnIndex) {
        row.gridString = rowIndex + 1 + 'x' + (columnIndex + 1);
        return row;
    });
    return column;
};
var argument9 = [157,"<",213,-100,213,"6",607,"z+Z=%","n"];
var base_0 = [157,714,5e-324,714,49,0,-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,714,5e-324,714,49,0,-100]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,714,5e-324,714,49,0,-100]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,714,5e-324,714,49,0,-100]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test494.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)