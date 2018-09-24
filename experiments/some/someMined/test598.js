





var callbackArguments = [];
var argument1 = function cb_some(r) {
 callbackArguments.push(arguments) 

    return deepEqual(r, rule);
};
var argument2 = "";
var argument3 = true;
var argument4 = function (a) {
 callbackArguments.push(arguments) 

    i++;
    arr.push(a + 3);
    return i > 3;
};
var argument5 = null;
var argument6 = r_0;
var argument7 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 2 && el.char === 'B';
};
var argument8 = true;
var argument9 = r_0;
var argument10 = function (v) {
 callbackArguments.push(arguments) 

    return v2(v);
};
var argument11 = {"49":"2d=","403":"",";":460,"D":714,"1.69498175792665e+308":"","":627,"W":9.565898340562453e+306,"}t":9.533671009479324e+307,"L":607};
var argument12 = r_3;
var base_0 = ["h",">&ZkP","4","Qt","0","b9"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h",">&ZkP","4","Qt","0","b9"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h",">&ZkP","4","Qt","0","b9"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h",">&ZkP","4","Qt","0","b9"]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/some/someMined/test598.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)