





var callbackArguments = [];
var argument1 = function (val, key) {
 callbackArguments.push(arguments) 

    return operators[key] + field.format.convert(val);
};
var argument2 = function (val, i) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val
    };
};
var argument3 = function (t, e) {
 callbackArguments.push(arguments) 

    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + '%'), t;
};
var argument4 = "(";
var argument5 = function (node) {
 callbackArguments.push(arguments) 

    return node.addr;
};
var argument6 = null;
var argument7 = {};
var base_0 = [618,"5",157]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,"5",157]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,"5",157]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,"5",157]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test85.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)