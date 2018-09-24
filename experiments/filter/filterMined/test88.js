





var callbackArguments = [];
var argument1 = function (o, i) {
 callbackArguments.push(arguments) 

    passedValues[i] = o;
    return true;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (value, index, list) {
 callbackArguments.push(arguments) 

    return !iterator.call(context, value, index, list);
};
var argument5 = {"G":0,"1.7932094780111085e+307":"0,1"};
var argument6 = null;
var argument7 = function () {
 callbackArguments.push(arguments) 

    return $(this).attr('tabIndex') === 0;
};
var argument8 = false;
var argument9 = function () {
 callbackArguments.push(arguments) 

    return $(this).contents().eq(0).text() === opt.peoplePickerDisplayName;
};
var argument10 = false;
var base_0 = [82,607,49]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,607,49]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,607,49]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,607,49]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test88.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)