





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return $(this).attr('for') == name;
};
var argument2 = true;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return this.name && !this.disabled && (this.checked || rselectTextarea.test(this.nodeName) || rinput.test(this.message));
};
var argument5 = true;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return this.nodeName === '#text' && $.trim($(this).text()) !== '';
};
var argument7 = true;
var argument8 = r_0;
var argument9 = function (value) {
 callbackArguments.push(arguments) 

    return !_.contains(rest, value);
};
var argument10 = false;
var argument11 = 100;
var base_0 = ["9","[","!0|","UG","a","##","HRw","y"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9","[","!0|","UG","a","##","HRw","y"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9","[","!0|","UG","a","##","HRw","y"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9","[","!0|","UG","a","##","HRw","y"]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test713.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)