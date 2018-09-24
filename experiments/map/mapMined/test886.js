





var callbackArguments = [];
var argument1 = function (atom) {
 callbackArguments.push(arguments) 

    return atom.value;
};
var argument2 = [460,403,122];
var argument3 = null;
var argument4 = function (p) {
 callbackArguments.push(arguments) 

    p = p.trim();
    if (p.match(/^org.couchdb.user/)) {
        return p.replace(/\//g, encodeURIComponent('/'));
    }
    return encodeURIComponent(p);
};
var argument5 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument6 = false;
var argument7 = function (v, i) {
 callbackArguments.push(arguments) 

    return v == null ? i > 2 ? 1 : 0 : v;
};
var argument8 = {"823":"","J":"","S":"?","":""};
var base_0 = [1.7976931348623157e+308,783,0,823]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test886.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)