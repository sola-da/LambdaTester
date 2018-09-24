





var callbackArguments = [];
var argument1 = function (packageJson) {
 callbackArguments.push(arguments) 

    return !filterRegEx || filterRegEx.test(packageJson.name);
};
var argument2 = {"627":714,"893":"","8.028223200280866e+307":5e-324,"p":"","G":"","":""};
var argument3 = {"":"","V#":"","1.7976931348623157e+308":"#U","1.0221361535808346e+308":-1};
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    var source = e[vars.edges.source][vars.id.value], target = e[vars.edges.target][vars.id.value];
    if (source === target) {
        var str = vars.format.locale.value.dev.sameEdge;
        d3plus.console.warning(d3plus.string.format(str, '"' + source + '"'), 'edges');
        return false;
    } else {
        return true;
    }
};
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    return !!item;
};
var argument6 = null;
var argument7 = null;
var argument8 = function () {
 callbackArguments.push(arguments) 

    var conn = this.getAttributeNS(se_ns, 'connector');
    if (conn == conn_str || conn == alt_str)
        return true;
};
var argument9 = 1.5779821323449826e+308;
var base_0 = ["Dk","Wy","q8D:","(#","u","?8JQwt","$#",">","z;","I*"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Dk","Wy","q8D:","(#","u","?8JQwt","$#",">","z;","I*"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Dk","Wy","q8D:","(#","u","?8JQwt","$#",">","z;","I*"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test714.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)