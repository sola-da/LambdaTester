





var callbackArguments = [];
var argument1 = function (val, key) {
 callbackArguments.push(arguments) 

    delete angular.callbacks[key];
};
var argument2 = function (ps) {
 callbackArguments.push(arguments) 

    ps = ps instanceof Array ? ps : [
        ps,
        ps
    ];
    pvc_installLog(pvc, ps[0], ps[1], '[pvChart]');
};
var argument3 = function (range, row, offset) {
 callbackArguments.push(arguments) 

    if (!range.start) {
        var column = range.offset + (offset || 0);
        firstRange = new Range(row, column, row, column + range.length);
    } else
        firstRange = range;
    return true;
};
var argument4 = function (fn) {
 callbackArguments.push(arguments) 

    data = fn(data, headers);
};
var argument5 = r_3;
var argument6 = r_1;
var base_0 = [403,25,0,460,705,705,403,49,893,714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,25,0,460,705,705,403,49,893,714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,25,0,460,705,705,403,49,893,714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,25,0,460,705,705,403,49,893,714]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test283.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)