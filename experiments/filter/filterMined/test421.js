





var callbackArguments = [];
var argument1 = function (item, i) {
 callbackArguments.push(arguments) 

    return i % 2 != 0;
};
var argument2 = null;
var argument3 = {"i@":""};
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    var val = fetchValue(vars, d, vars[key].value);
    if (key === 'size') {
        return typeof val === 'number';
    } else {
        return val !== null;
    }
};
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    return fetchValue(vars, d, vars.id.value) == vars.focus.value[0];
};
var argument6 = r_2;
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    var first_match = nest_check(d[vars.edges.source]), second_match = nest_check(d[vars.edges.target]);
    return first_match && second_match;
};
var base_0 = ["|","^h%",-1,"{$"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|","^h%",-1,"{$"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|","^h%",-1,"{$"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test421.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)