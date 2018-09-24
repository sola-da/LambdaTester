





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    if (typeof x == 'string')
        this.exec(x, editor);
    else
        this.exec(x[0], editor, x[1]);
};
var argument2 = function (e) {
 callbackArguments.push(arguments) 

    var n = 'on' + e;
    var m = obs[n];
    if (m)
        withDefaults[n] = function () {
            m.apply(obs, arguments);
        };
    else
        withDefaults[n] = function () {
        };
};
var argument3 = [100,122];
var argument4 = null;
var argument5 = function (field) {
 callbackArguments.push(arguments) 

    field.setDisabled(newDisabled);
};
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    $(item).appendTo($('#userlist'));
};
var base_0 = ["{","W","oO","2","-"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["{","W","oO","2","-"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["{","W","oO","2","-"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["{","W","oO","2","-"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test820.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)