





var callbackArguments = [];
var argument1 = function (key, item) {
 callbackArguments.push(arguments) 

    this.assertEquals(this._storage.getItem(key), item);
    i++;
};
var argument2 = null;
var argument3 = function (exp, i) {
 callbackArguments.push(arguments) 

    if (i)
        output.comma();
    exp.print(output);
    if (i === len - 1 && exp instanceof AST_Hole)
        output.comma();
};
var argument4 = "9";
var argument5 = null;
var argument6 = function (c) {
 callbackArguments.push(arguments) 

    arr.push(fetchValue(vars, n, c));
};
var argument7 = null;
var argument8 = function (asserterName) {
 callbackArguments.push(arguments) 

    var pd = Object.getOwnPropertyDescriptor(ctx, asserterName), functionProtoPD = Object.getOwnPropertyDescriptor(Function.prototype, asserterName);
    if (functionProtoPD && !functionProtoPD.configurable)
        return;
    if (asserterName === 'arguments')
        return;
    Object.defineProperty(assert, asserterName, pd);
};
var argument9 = true;
var argument10 = 9.692723397746089e+306;
var base_0 = ["3","<","]_^","N",")","M,Zg","pB`","x9^","9j","("]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3","<","]_^","N",")","M,Zg","pB`","x9^","9j","("]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3","<","]_^","N",")","M,Zg","pB`","x9^","9j","("]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3","<","]_^","N",")","M,Zg","pB`","x9^","9j","("]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test682.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)