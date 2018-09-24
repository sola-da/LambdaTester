





var callbackArguments = [];
var argument1 = function (p) {
 callbackArguments.push(arguments) 

    this[p] = value;
};
var argument2 = false;
var argument3 = true;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    if (availableKeys.indexOf(vars[key].value) >= 0) {
        data = data.filter(function (d) {
            var val = fetchValue(vars, d, vars[key].value);
            if (key === 'size') {
                return typeof val === 'number';
            } else {
                return val !== null;
            }
        });
    }
};
var argument5 = null;
var argument6 = r_1;
var argument7 = function (ch) {
 callbackArguments.push(arguments) 

    frequency[ch] = 0;
};
var argument8 = null;
var argument9 = function (rev) {
 callbackArguments.push(arguments) 

    if (height[rev] > max_height) {
        candidates.push(rev);
    }
};
var base_0 = [403,714,705,213,655,714,25,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,714,705,213,655,714,25,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,714,705,213,655,714,25,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,714,705,213,655,714,25,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test818.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)