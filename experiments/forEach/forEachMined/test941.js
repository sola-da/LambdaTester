





var callbackArguments = [];
var argument1 = function (dp) {
 callbackArguments.push(arguments) 

    var newDp = new DataProperty(dp);
    newDp.validators = [];
    newDp.baseProperty = dp;
    this._addPropertyCore(newDp);
};
var argument2 = [783,-100];
var argument3 = null;
var argument4 = function (option) {
 callbackArguments.push(arguments) 

    if (value == option) {
        match = true;
    }
};
var argument5 = {"9":"","2.054280853230646e+307":705,"1.092055920184184e+308":"9","D*":"_,","-1":"","1.5006173041072314e+308":1.17688893626583e+308,"3.89396742965358e+307":""};
var argument6 = function (route, path) {
 callbackArguments.push(arguments) 

    if (!match && (params = switchRouteMatcher($location.path(), path, route))) {
        match = inherit(route, {
            params: extend({}, $location.search(), params),
            pathParams: params
        });
        match.$$route = route;
    }
};
var argument7 = 618;
var argument8 = r_0;
var argument9 = function (t) {
 callbackArguments.push(arguments) 

    n(this).hasClass(t) || i.push(t);
};
var argument10 = r_0;
var base_0 = [25,242,655,823,82,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,242,655,823,82,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,242,655,823,82,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,242,655,823,82,100]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test941.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)