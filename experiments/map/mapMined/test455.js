





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return require(x);
};
var argument2 = null;
var argument3 = true;
var argument4 = function (r) {
 callbackArguments.push(arguments) 

    if (r.rank === 10) {
        r.rank = 5;
    } else if (r.rank > 3 && r.rank < 10) {
        r.rank = 4;
    }
    return [
        r.name,
        r.rank
    ];
};
var argument5 = function (extend) {
 callbackArguments.push(arguments) 

    return extend.eval(env);
};
var argument6 = 1.6605621947933377e+307;
var argument7 = function (v) {
 callbackArguments.push(arguments) 

    return mc(v);
};
var argument8 = null;
var base_0 = ["B"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test455.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)