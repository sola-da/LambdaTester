





var callbackArguments = [];
var argument1 = function (dep) {
 callbackArguments.push(arguments) 

    pjson.dependencies[dep] = '*';
};
var argument2 = null;
var argument3 = 122;
var argument4 = function (file) {
 callbackArguments.push(arguments) 

    expanded.push(file);
};
var argument5 = ["Ja","{Ig",627,"o"," ",126,"%^"];
var argument6 = {"122":627,"126":"","783":"","":"","1.2370065553296267e+307":3.7668525981726295e+307};
var argument7 = function (m) {
 callbackArguments.push(arguments) 

    $.fn[m] = function (callback) {
        return this.bind(m, callback);
    };
};
var argument8 = r_1;
var argument9 = function (item) {
 callbackArguments.push(arguments) 

    slots.push(me.createSlot(item, days, months, years));
};
var argument10 = r_3;
var base_0 = [-1,460,460,59,823,627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,460,460,59,823,627]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,460,460,59,823,627]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,460,460,59,823,627]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test16.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)