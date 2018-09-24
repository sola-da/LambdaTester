





var callbackArguments = [];
var argument1 = function (max, depName) {
 callbackArguments.push(arguments) 

    return data[depName] > max ? data[depName] : max;
};
var argument2 = function (count, i) {
 callbackArguments.push(arguments) 

    return count + calls[i];
};
var argument3 = false;
var argument4 = 618;
var argument5 = function (result, child, idx) {
 callbackArguments.push(arguments) 

    var name = child.getKey(idx);
    result[name] = child;
    return result;
};
var argument6 = null;
var argument7 = function (m, item) {
 callbackArguments.push(arguments) 

    var itemName = item.path.split('/').slice(-1)[0] + (item.is_dir ? '/' : '');
    if (item.is_dir) {
        m[itemName] = revCache.get(path + itemName);
    } else {
        m[itemName] = item.rev;
    }
    return m;
};
var argument8 = r_2;
var base_0 = [-1,25,714,82,627,-1,595,705,893,655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,25,714,82,627,-1,595,705,893,655]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,25,714,82,627,-1,595,705,893,655]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,25,714,82,627,-1,595,705,893,655]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test462.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)