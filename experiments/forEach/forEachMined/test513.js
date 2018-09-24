





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    var val = fetchValue(vars, d, vars.size.value);
    if (val && typeof val === 'number') {
        strippedData.push({
            'd3plus': d,
            'id': d[vars.id.value],
            'value': fetchValue(vars, d, vars.size.value)
        });
    }
};
var argument2 = function (val, key) {
 callbackArguments.push(arguments) 

    delete angular.callbacks[key];
};
var argument3 = null;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    console.error(key + '\t' + js.data[key].length);
};
var argument5 = "";
var argument6 = null;
var argument7 = function (value, key) {
 callbackArguments.push(arguments) 

    if (key.charAt(0) != '$') {
        if (src[key]) {
            value += (key === 'style' ? ';' : ' ') + src[key];
        }
        dst.$set(key, value, true, srcAttr[key]);
    }
};
var argument8 = r_0;
var base_0 = [-100,157]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,157]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,157]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,157]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test513.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)