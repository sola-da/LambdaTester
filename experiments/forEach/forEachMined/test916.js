





var callbackArguments = [];
var argument1 = function (child) {
 callbackArguments.push(arguments) 

    childResults = childResults.concat(child.search(text));
};
var argument2 = function (mapping, name) {
 callbackArguments.push(arguments) 

    mapping.name = name;
    maps.push(mapping);
};
var argument3 = function (rev) {
 callbackArguments.push(arguments) 

    if (height[rev] > max_height) {
        candidates.push(rev);
    }
};
var argument4 = function (value, key) {
 callbackArguments.push(arguments) 

    if (!dst.hasOwnProperty(key))
        dst[key] = value;
};
var argument5 = r_2;
var argument6 = null;
var base_0 = ["f",893,893,122,714,"(","$#","[@"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["f",893,893,122,714,"(","$#","[@"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["f",893,893,122,714,"(","$#","[@"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["f",893,893,122,714,"(","$#","[@"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test916.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)