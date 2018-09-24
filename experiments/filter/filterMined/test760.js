





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return 1;
};
var argument2 = [843,-100,403,5e-324,0,823,157,460,213];
var argument3 = function () {
 callbackArguments.push(arguments) 

    return this.nodeName === name;
};
var argument4 = function (id) {
 callbackArguments.push(arguments) 

    return !(id in __data_types);
};
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    return !_.contains(_.union(fatarrowparams), item[2]);
};
var argument6 = false;
var base_0 = ["g","r"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["g","r"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test760.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)