





var callbackArguments = [];
var argument1 = function (result) {
 callbackArguments.push(arguments) 

    return Highlight.allFold(result.text, [query], { startsWith: true });
};
var argument2 = function (v) {
 callbackArguments.push(arguments) 

    return v.eval(env);
};
var argument3 = function (c) {
 callbackArguments.push(arguments) 

    c = clamp(Math.round(c), 255);
    return (c < 16 ? '0' : '') + c.toString(16);
};
var argument4 = 893;
var argument5 = function (entry) {
 callbackArguments.push(arguments) 

    return 2 === entry.length ? entry : [
        entry,
        entry
    ].flatten();
};
var base_0 = ["*"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*"]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*"]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*"]
var r_3= undefined
try {
r_3 = base_3.map(argument5)
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
require("fs").writeFileSync("./experiments/map/mapMined/test543.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)