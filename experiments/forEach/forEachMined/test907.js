





var callbackArguments = [];
var argument1 = function (optKey) {
 callbackArguments.push(arguments) 

    delete subOpts[optKey];
};
var argument2 = false;
var argument3 = null;
var argument4 = function (e) {
 callbackArguments.push(arguments) 

    e.remove();
};
var argument5 = function (stat) {
 callbackArguments.push(arguments) 

    if (stat instanceof AST_SimpleStatement)
        seq.push(stat.body);
    else
        push_seq(), ret.push(stat);
};
var argument6 = 969;
var argument7 = ["m","$","T6L,>","6","w","S"];
var argument8 = function (cancelFn) {
 callbackArguments.push(arguments) 

    (cancelFn || noop)(true);
};
var argument9 = r_1;
var base_0 = [126,893,49,126,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,893,49,126,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,893,49,126,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,893,49,126,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test907.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)