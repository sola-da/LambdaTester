





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    return d[t] >= filter[t].min && d[t] <= filter[t].max;
};
var argument2 = function (element) {
 callbackArguments.push(arguments) 

    return this.indexOf(element) >= 0;
};
var argument3 = ["m",":aawm=l","A","p_k","%a","B","*%L"];
var argument4 = true;
var argument5 = function (r) {
 callbackArguments.push(arguments) 

    return !r || r === 'linked' || /^https?:\/\//.test(r) || /^gh:/.test(r) || /^github:/.test(r) || semver.satisfies(version, r);
};
var argument6 = null;
var argument7 = " ";
var argument8 = function (element) {
 callbackArguments.push(arguments) 

    return this.indexOf(element) >= 0;
};
var argument9 = true;
var base_0 = [213,213,595,843,49]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,213,595,843,49]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,213,595,843,49]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,213,595,843,49]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyMined/test384.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)