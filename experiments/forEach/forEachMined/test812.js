





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    result[key] = this.getOption(key);
};
var argument2 = function (ln) {
 callbackArguments.push(arguments) 

    keys[getKey(ln)] = true;
};
var argument3 = function (side) {
 callbackArguments.push(arguments) 

    filtered.set(side, paddings[side]);
};
var argument4 = r_2;
var argument5 = false;
var argument6 = function (singleLine) {
 callbackArguments.push(arguments) 

    console.log(singleLine);
};
var base_0 = [100,49,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,49,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,49,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,49,100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test812.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)