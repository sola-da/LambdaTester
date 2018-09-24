





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return firstOnly(x);
};
var argument2 = {"8.746279461342109e+307":82,"N2":"z"};
var argument3 = {"100":"w","126":"","655":"F","H":""};
var argument4 = function (delta) {
 callbackArguments.push(arguments) 

    return _.reduce(delta.ops, function (count, op) {
        if (op.value != null) {
            count += op.value.length;
        }
        return count;
    }, 0);
};
var argument5 = function (a) {
 callbackArguments.push(arguments) 

    return a.toCSS();
};
var argument6 = false;
var argument7 = r_0;
var argument8 = function (e) {
 callbackArguments.push(arguments) 

    return e ? e[2] : null;
};
var argument9 = r_2;
var base_0 = ["gj","x",157,"=|2H",783,"1aq",-1,"_FR",893,"D"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["gj","x",157,"=|2H",783,"1aq",-1,"_FR",893,"D"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["gj","x",157,"=|2H",783,"1aq",-1,"_FR",893,"D"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["gj","x",157,"=|2H",783,"1aq",-1,"_FR",893,"D"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test994.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)