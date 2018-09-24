





var callbackArguments = [];
var argument1 = function (option) {
 callbackArguments.push(arguments) 

    return option.selected;
};
var argument2 = true;
var argument3 = function () {
 callbackArguments.push(arguments) 

    return /(relative|absolute|fixed)/.test($.css(this, 'position')) && /(auto|scroll)/.test($.css(this, 'overflow') + $.css(this, 'overflow-y') + $.css(this, 'overflow-x'));
};
var argument4 = {"59":460,"460":"Ys","823":"J$o6","893":"T2","":"","1.3814779480608363e+308":4.176186536135523e+307,"j1":1.276088902711043e+308};
var argument5 = "m";
var argument6 = function () {
 callbackArguments.push(arguments) 

    var m = this.slice(0, parts[i].length), p = parts[i].slice(0, m.length);
    return m == p;
};
var argument7 = function (item) {
 callbackArguments.push(arguments) 

    return new RegExp('^' + weekday, 'i').test(item);
};
var argument8 = r_2;
var base_0 = [-1,893,25,714,969,100,-1,893]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/filter/filterMined/test831.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)