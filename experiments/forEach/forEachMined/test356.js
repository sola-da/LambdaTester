





var callbackArguments = [];
var argument1 = function (child) {
 callbackArguments.push(arguments) 

    var childClone = child.clone();
    childClone.setParent(clone);
    cloneChilds.push(childClone);
};
var argument2 = {"t<":"","<":122,"?":1.0199452216939506e+308,"-100":"","6.630074096917343e+307":"","":783,"U6":1.1474307925861408e+308,"Q":1.504355873316396e+308,"1.9469066781251785e+307":"e"};
var argument3 = function (code) {
 callbackArguments.push(arguments) 

    binops[code] = new Function('x', 'y', 'return x ' + definitions.tokens[code] + ' y;');
};
var argument4 = null;
var argument5 = true;
var argument6 = function (link) {
 callbackArguments.push(arguments) 

    var value = traverse.get(args, link.from);
    traverse.set(args, link.to, value);
};
var argument7 = null;
var argument8 = function (name) {
 callbackArguments.push(arguments) 

    var method = map[name];
    defineProperty(object, name, method, false);
};
var base_0 = ["(rSW","N","Y"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(rSW","N","Y"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(rSW","N","Y"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(rSW","N","Y"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test356.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)