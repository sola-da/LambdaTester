





var callbackArguments = [];
var argument1 = function (incompatibleOpt) {
 callbackArguments.push(arguments) 

    return incompatibleOpt in opts;
};
var argument2 = null;
var argument3 = {"4":"NG","126":969,"":7.608219195223742e+307,"6.231886838535118e+306":"@"};
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    return item !== void 0 && item !== null;
};
var argument5 = 49;
var argument6 = null;
var argument7 = function () {
 callbackArguments.push(arguments) 

    return this.name && !this.disabled && (this.checked || rselectTextarea.test(this.nodeName) || rinput.test(this.message));
};
var argument8 = false;
var argument9 = r_0;
var argument10 = function (c) {
 callbackArguments.push(arguments) 

    return c;
};
var base_0 = [403,783,1.7976931348623157e+308,893,607,5e-324,126,627,843]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,783,1.7976931348623157e+308,893,607,5e-324,126,627,843]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test594.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)