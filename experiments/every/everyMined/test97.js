





var callbackArguments = [];
var argument1 = function (v, i) {
 callbackArguments.push(arguments) 

    return v === a2[i];
};
var argument2 = ["$","4","E"];
var argument3 = {"0":"",")":"","=":9.757258245623753e+307};
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument5 = null;
var argument6 = null;
var argument7 = function (key) {
 callbackArguments.push(arguments) 

    if (j1.hasOwnProperty(key)) {
        if (typeof j2[key] != 'object') {
            return false;
        }
        if (combine(j1[key], j2[key]) == null) {
            return false;
        }
    } else {
        j1[key] = j2[key];
    }
    return true;
};
var argument8 = null;
var argument9 = function (op) {
 callbackArguments.push(arguments) 

    return InsertOp.isInsert(op);
};
var argument10 = r_3;
var base_0 = ["C",-1,"H-Bh%hr","M","_z4t)","|",213,"-",157]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C",-1,"H-Bh%hr","M","_z4t)","|",213,"-",157]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C",-1,"H-Bh%hr","M","_z4t)","|",213,"-",157]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C",-1,"H-Bh%hr","M","_z4t)","|",213,"-",157]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyMined/test97.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)