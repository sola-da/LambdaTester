





var callbackArguments = [];
var argument1 = function (value, key) {
 callbackArguments.push(arguments) 

    locals[key] = angular.isString(value) ? $injector.get(value) : $injector.invoke(value);
};
var argument2 = "*A$g";
var argument3 = r_0;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    Traverse[key] = function (obj) {
        var args = [].slice.call(arguments, 1);
        var t = Traverse(obj);
        return t[key].apply(t, args);
    };
};
var argument5 = false;
var argument6 = function (i) {
 callbackArguments.push(arguments) 

    Mousetrap.unbind([i.toString()], function () {
        return _this.seek(i * 10);
    });
};
var argument7 = [714,-100,100,213];
var argument8 = false;
var argument9 = function (o, i) {
 callbackArguments.push(arguments) 

    testAL[i] = o;
};
var base_0 = [607,627,595,-100,213,49,157]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,627,595,-100,213,49,157]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,627,595,-100,213,49,157]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,627,595,-100,213,49,157]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test344.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)