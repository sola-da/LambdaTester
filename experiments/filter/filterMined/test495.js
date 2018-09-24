





var callbackArguments = [];
var argument1 = function (n) {
 callbackArguments.push(arguments) 

    return vars.size.value in n;
};
var argument2 = 1.6976781688847605e+308;
var argument3 = ["_",607,705,705,"60","{","r","H+e"];
var argument4 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument5 = r_1;
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    return !(v instanceof Comment);
};
var argument7 = true;
var argument8 = true;
var argument9 = function (prop) {
 callbackArguments.push(arguments) 

    return !/^\$/.test(prop);
};
var argument10 = null;
var base_0 = [122,460,0,213,893,783,49]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,460,0,213,893,783,49]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,460,0,213,893,783,49]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,460,0,213,893,783,49]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test495.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)