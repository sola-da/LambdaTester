





var callbackArguments = [];
var argument1 = function (ch) {
 callbackArguments.push(arguments) 

    return ch.charCodeAt(0);
};
var argument2 = function (x) {
 callbackArguments.push(arguments) 

    if (x == '\n')
        return x + indentString;
    if (typeof x == 'string')
        return x.replace(/\t/g, tabString);
    return x;
};
var argument3 = function (v) {
 callbackArguments.push(arguments) 

    return Math.atan2(v[0] - cx, v[1] - cy);
};
var argument4 = null;
var argument5 = [126,213,242,783,618,403,82,893];
var argument6 = function (r) {
 callbackArguments.push(arguments) 

    r.objectId = r._id;
    _.omit(r, '_id');
    return r;
};
var base_0 = [714,49,242,460,655,25]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,49,242,460,655,25]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,49,242,460,655,25]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test166.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)