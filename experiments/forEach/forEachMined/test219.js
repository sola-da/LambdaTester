





var callbackArguments = [];
var argument1 = function (prop) {
 callbackArguments.push(arguments) 

    prop._walk(visitor);
};
var argument2 = null;
var argument3 = null;
var argument4 = function (property) {
 callbackArguments.push(arguments) 

    var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
    if (element !== undef) {
        results.push(quote(property) + ':' + (whitespace ? ' ' : '') + element);
    }
};
var argument5 = function (w) {
 callbackArguments.push(arguments) 

    w && this.removeLineWidget(w);
};
var argument6 = function (hookName) {
 callbackArguments.push(arguments) 

    exports[hookName] = LoaderHooks[hookName];
};
var argument7 = true;
var argument8 = true;
var base_0 = [823,893,"<",403,",|dG=","E&",1.7976931348623157e+308,157]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,893,"<",403,",|dG=","E&",1.7976931348623157e+308,157]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,893,"<",403,",|dG=","E&",1.7976931348623157e+308,157]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,893,"<",403,",|dG=","E&",1.7976931348623157e+308,157]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test219.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)