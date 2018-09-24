





var callbackArguments = [];
var argument1 = function (Plugin) {
 callbackArguments.push(arguments) 

    var options = assign(_this.options, {
            container: container,
            src: source
        });
    container.addPlugin(new Plugin(options));
};
var argument2 = true;
var argument3 = function (needle) {
 callbackArguments.push(arguments) 

    if (typeList.indexOf(needle) == -1) {
        hasType = false;
        return false;
    }
};
var argument4 = function (q) {
 callbackArguments.push(arguments) 

    if (Object.hasOwnProperty.call(vers, q))
        ver.push(vers[q]);
};
var argument5 = function (func) {
 callbackArguments.push(arguments) 

    func(api);
};
var argument6 = [714,893,705,705,126,595,893,122];
var base_0 = [100,1.7976931348623157e+308,893,403,843]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,1.7976931348623157e+308,893,403,843]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,1.7976931348623157e+308,893,403,843]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,1.7976931348623157e+308,893,403,843]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test172.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)