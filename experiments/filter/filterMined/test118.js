





var callbackArguments = [];
var argument1 = function (docInfo) {
 callbackArguments.push(arguments) 

    return docInfo.error;
};
var argument2 = null;
var argument3 = function (r) {
 callbackArguments.push(arguments) 

    return r.rank > 1;
};
var argument4 = [595,"q",627,59,627,893,655,"I"];
var argument5 = function (scope) {
 callbackArguments.push(arguments) 

    return credentials.scopes[scope] === true;
};
var argument6 = true;
var argument7 = null;
var argument8 = function (element) {
 callbackArguments.push(arguments) 

    return this.indexOf(element) < 0;
};
var argument9 = "E";
var base_0 = [100,-100,59,126,213,607]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,-100,59,126,213,607]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test118.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)