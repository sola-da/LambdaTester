





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return $.css(this, 'visibility') === 'hidden';
};
var argument2 = {"59":"+","":"Z!"};
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    return isTargetToShow(d.id);
};
var argument4 = true;
var argument5 = function (a) {
 callbackArguments.push(arguments) 

    return a[vars.id.value] == n[vars.id.value];
};
var argument6 = function (comment) {
 callbackArguments.push(arguments) 

    return c.test(comment.value);
};
var argument7 = r_3;
var argument8 = r_3;
var base_0 = [595,100,969,893,242,607]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,100,969,893,242,607]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,100,969,893,242,607]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,100,969,893,242,607]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test155.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)