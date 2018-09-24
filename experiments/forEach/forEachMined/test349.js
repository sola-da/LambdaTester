





var callbackArguments = [];
var argument1 = function (f) {
 callbackArguments.push(arguments) 

    f(vars, nextStep);
};
var argument2 = function (dimName) {
 callbackArguments.push(arguments) 

    markDimBoundTo(dimName, role);
};
var argument3 = "d|";
var argument4 = r_1;
var argument5 = function (datum) {
 callbackArguments.push(arguments) 

    changed = !0;
    datum_deselect.call(datum);
    this._selectedNotNullDatums.rem(datum.id);
};
var argument6 = {"100":9.580961166800025e+307,"1.5314336445272145e+308":9.406512019037022e+306,"3.294657973746234e+307":"","Y":"","1.0845948229705667e+308":714,"":"","q":1.5472632292957326e+308,"6.108083771579453e+307":"uX","8.749676224902249e+307":""};
var argument7 = function (v, i) {
 callbackArguments.push(arguments) 

    ys[baseId][i] = v < 0 ? v : 0;
};
var argument8 = 5.366354475733698e+307;
var base_0 = [100,627,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,627,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,627,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,627,403]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test349.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)