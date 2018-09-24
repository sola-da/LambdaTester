





var callbackArguments = [];
var argument1 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument2 = function (item) {
 callbackArguments.push(arguments) 

    return productName == item.item;
};
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument5 = null;
var argument6 = {"0":1.2686667917271384e+307,"1.0812241488040019e+308":"","":1.63539345407435e+307,"(t":1.3019588859963147e+308,"R":"t","8.372230012031263e+307":"x'"};
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return i & ret.KEY_MODS[x];
};
var argument8 = false;
var argument9 = ["]7T"," ","6>","F"];
var base_0 = [969,893,783,82,-1,242,843,714,49]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,893,783,82,-1,242,843,714,49]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,893,783,82,-1,242,843,714,49]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test890.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)