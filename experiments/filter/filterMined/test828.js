





var callbackArguments = [];
var argument1 = function (choice) {
 callbackArguments.push(arguments) 

    return choice.indexOf(query) != -1;
};
var argument2 = null;
var argument3 = function () {
 callbackArguments.push(arguments) 

    return this.name && !this.disabled && (this.checked || rselectTextarea.test(this.nodeName) || rinput.test(this.message));
};
var argument4 = true;
var argument5 = function (file) {
 callbackArguments.push(arguments) 

    return file.indexOf('test-rolling-file-stream-write-more') > -1;
};
var argument6 = null;
var argument7 = function (value) {
 callbackArguments.push(arguments) 

    return !!value;
};
var argument8 = 1.7700036361861486e+308;
var base_0 = ["7",242,"{"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7",242,"{"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7",242,"{"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test828.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)