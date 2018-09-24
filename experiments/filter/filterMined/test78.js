





var callbackArguments = [];
var argument1 = function (n) {
 callbackArguments.push(arguments) 

    return n[vars.id.value] == edge[node][vars.id.value];
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument3 = {"0":"","6":"$","595":"","7.830455573726529e+307":"","f":1.7976931348623157e+308,"g%":"","0+z":"","Xjb":122,"":-1};
var argument4 = null;
var argument5 = function (e) {
 callbackArguments.push(arguments) 

    return !_isNamedBlankNode(e);
};
var argument6 = function (className) {
 callbackArguments.push(arguments) 

    return classNames[className];
};
var base_0 = ["z]7","IjdqRe",49,"M",49,714,59,"-{"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z]7","IjdqRe",49,"M",49,714,59,"-{"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z]7","IjdqRe",49,"M",49,714,59,"-{"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z]7","IjdqRe",49,"M",49,714,59,"-{"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test78.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)