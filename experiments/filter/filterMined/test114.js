





var callbackArguments = [];
var argument1 = function (kp) {
 callbackArguments.push(arguments) 

    return kp !== null;
};
var argument2 = true;
var argument3 = 1.7976931348623157e+308;
var argument4 = function (c, i) {
 callbackArguments.push(arguments) 

    var test = d3plus.util.copy(d);
    test.geometry.coordinates = [test.geometry.coordinates[i]];
    var a = vars.path.area(test);
    if (a == areas[areas.length - 1]) {
        largest.geometry.coordinates = test.geometry.coordinates;
    }
    return a >= d3.quantile(areas, 0.9);
};
var argument5 = r_1;
var argument6 = null;
var argument7 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument8 = function (t) {
 callbackArguments.push(arguments) 

    return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i);
};
var argument9 = ["R","XR","+","A3@+2","[PbJ","e","]lsgG","O","U4"];
var argument10 = 82;
var base_0 = [403,893,-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,893,-100]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,893,-100]
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test114.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)