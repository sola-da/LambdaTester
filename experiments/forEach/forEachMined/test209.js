





var callbackArguments = [];
var argument1 = function (name) {
 callbackArguments.push(arguments) 

    map[name] = getOwnPropertyDescriptor(obj, name);
};
var argument2 = {"9":"","82":"","1.2046085457251676e+308":25,"*":"","":607,"1.6976496892495883e+308":460};
var argument3 = "}W1";
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    child[key] = parent[key];
};
var argument5 = function (edge) {
 callbackArguments.push(arguments) 

    if (height[edge.from] === undefined) {
        height[edge.from] = 1 + height[edge.to];
    } else {
        height[edge.from] = Math.min(height[edge.from], 1 + height[edge.to]);
    }
};
var argument6 = true;
var argument7 = {"627":"Dlbb","4.797078780672375e+307":8.925090471369404e+307,"1.6753396615867485e+308":607};
var argument8 = function (v) {
 callbackArguments.push(arguments) 

    ys[t.id].push(v.value);
};
var argument9 = {"595":460,"1.515232526865775e+308":1.1568746137956219e+308,"":"D,","1.7976931348623157e+308":"8(","-1":1.448283032768923e+307,"1.671259945975452e+307":1.0209502036371767e+308,"&)":157,"1.119015953434026e+308":"","5.380163642292243e+307":"s","1.3049539094462105e+308":82};
var base_0 = [714,655,1.7976931348623157e+308,714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,655,1.7976931348623157e+308,714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,655,1.7976931348623157e+308,714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,655,1.7976931348623157e+308,714]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test209.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)