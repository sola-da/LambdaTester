





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    if (flag.short === value) {
        found = true;
    }
};
var argument2 = null;
var argument3 = [893,595,627,122,1.7976931348623157e+308,627,157,59,618];
var argument4 = function (ref) {
 callbackArguments.push(arguments) 

    if (ref instanceof AST_Continue) {
        ref = ref.label.start;
        croak('Continue label `' + label.name + '` refers to non-IterationStatement.', ref.line, ref.col, ref.pos);
    }
};
var argument5 = null;
var argument6 = function (n) {
 callbackArguments.push(arguments) 

    B(t, n, e);
};
var argument7 = null;
var argument8 = r_2;
var argument9 = function (fn) {
 callbackArguments.push(arguments) 

    fn();
};
var argument10 = null;
var base_0 = [705,403,157,-1,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,403,157,-1,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,403,157,-1,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,403,157,-1,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test49.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)