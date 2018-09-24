





var callbackArguments = [];
var argument1 = function (bench) {
 callbackArguments.push(arguments) 

    return result[0].compare(bench) == 0;
};
var argument2 = null;
var argument3 = false;
var argument4 = function (n) {
 callbackArguments.push(arguments) 

    return !!n;
};
var argument5 = 157;
var argument6 = function (t) {
 callbackArguments.push(arguments) 

    return isTargetToShow(t.id);
};
var argument7 = false;
var argument8 = false;
var argument9 = function (e) {
 callbackArguments.push(arguments) 

    return e.indexOf('Error') !== 0 && e.indexOf('d3plus.js:') < 0 && e.indexOf('d3plus.min.js:') < 0;
};
var argument10 = r_0;
var base_0 = ["z","9","pve0","F!","|+,","`","om","G+P","C","m|B^"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z","9","pve0","F!","|+,","`","om","G+P","C","m|B^"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z","9","pve0","F!","|+,","`","om","G+P","C","m|B^"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z","9","pve0","F!","|+,","`","om","G+P","C","m|B^"]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test608.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)