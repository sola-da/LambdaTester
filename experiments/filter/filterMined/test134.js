





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    return t.id === targetId;
};
var argument2 = true;
var argument3 = function (edge) {
 callbackArguments.push(arguments) 

    return _isBlankNodeIri(edge.s);
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument5 = {"607":705,"YN":"Ck","1.1858882449484907e+308":"2","":"+","p":6.04633110614551e+307};
var argument6 = r_2;
var argument7 = function (v) {
 callbackArguments.push(arguments) 

    return exports.satisfiesAll(v, ranges);
};
var argument8 = true;
var base_0 = ["}Xm","}",460,"ll",25]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["}Xm","}",460,"ll",25]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["}Xm","}",460,"ll",25]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["}Xm","}",460,"ll",25]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test134.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)