





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return fetchValue(vars, d, vars.id.value) == vars.focus.value[0];
};
var argument5 = {"403":"E","":8.375772733360172e+306,"1.1592991215897863e+308":1.5098342941357004e+308};
var argument6 = null;
var argument7 = function () {
 callbackArguments.push(arguments) 

    return this.selected;
};
var argument8 = r_0;
var argument9 = function (scope) {
 callbackArguments.push(arguments) 

    return credentials.scopes[scope] === true;
};
var base_0 = [607,0,823,-1,122,157]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,0,823,-1,122,157]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,0,823,-1,122,157]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,0,823,-1,122,157]
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test263.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)