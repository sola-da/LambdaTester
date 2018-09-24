





var callbackArguments = [];
var argument1 = function (hit) {
 callbackArguments.push(arguments) 

    return hit._source;
};
var argument2 = null;
var argument3 = [607];
var argument4 = function (field) {
 callbackArguments.push(arguments) 

    var term = {};
    term[field] = filters[field];
    return { term: term };
};
var argument5 = true;
var argument6 = ["f_",122,618,242,"T",403];
var argument7 = function (val, i) {
 callbackArguments.push(arguments) 

    if (val[sParam]) {
        a.push(i);
    }
};
var argument8 = {"655":242,"":1.5115811229310145e+308,"R!":1.3012111342136087e+308,"1.2238933131852547e+308":"","3.6321782039462993e+307":"l-","P":"","^":"1!","b":627,"`":1.745375785783004e+308};
var argument9 = function (val) {
 callbackArguments.push(arguments) 

    return keyMap[val];
};
var argument10 = null;
var base_0 = [126,1.7976931348623157e+308,25,59,893,100,714]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,1.7976931348623157e+308,25,59,893,100,714]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,1.7976931348623157e+308,25,59,893,100,714]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test336.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)