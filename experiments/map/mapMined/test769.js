





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return item[methodName].apply(item, args);
};
var argument2 = null;
var argument3 = true;
var argument4 = function (stx) {
 callbackArguments.push(arguments) 

    if (stx.token.inner) {
        stx.token.inner = syntaxToTokens(stx.token.inner);
    }
    return stx.token;
};
var argument5 = true;
var argument6 = false;
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return x.charCodeAt(0);
};
var argument8 = "";
var argument9 = {"_":"","":1.3894763341357139e+308};
var argument10 = function (g) {
 callbackArguments.push(arguments) 

    return _this.scope.markerModels[g.key].model;
};
var base_0 = [242,82,157,-1,823,5e-324,969]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,82,157,-1,823,5e-324,969]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,82,157,-1,823,5e-324,969]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,82,157,-1,823,5e-324,969]
var r_3= undefined
try {
r_3 = base_3.map(argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test769.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)