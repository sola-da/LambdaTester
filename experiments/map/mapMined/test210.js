





var callbackArguments = [];
var argument1 = function (col) {
 callbackArguments.push(arguments) 

    return {
        sortCol: columns[getColumnIndex(col.columnId)],
        sortAsc: col.sortAsc
    };
};
var argument2 = true;
var argument3 = "OG";
var argument4 = function (index, element) {
 callbackArguments.push(arguments) 

    return element.form == form && element.name == name && element || null;
};
var argument5 = true;
var argument6 = function (r) {
 callbackArguments.push(arguments) 

    var failText = 'OOM';
    if (r.data.timeout)
        failText = 'T/O';
    return [
        path.basename(r.file),
        r.data.mem != null ? r.data.time : failText,
        r.data.mem != null ? r.data.mem.toFixed(2) : failText
    ];
};
var argument7 = 1.1593468529213355e+308;
var argument8 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var base_0 = [82,49,-1,893,59,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,49,-1,893,59,893]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,49,-1,893,59,893]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,49,-1,893,59,893]
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
require("fs").writeFileSync("./experiments/map/mapMined/test210.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)