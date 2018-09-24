





var callbackArguments = [];
var argument1 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument2 = 25;
var argument3 = "Qx";
var argument4 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument5 = "(m";
var argument6 = {"242":"W%","627":1.680555240321841e+308,",v":-100,"":"","1.3581196784202991e+308":""};
var argument7 = function (child) {
 callbackArguments.push(arguments) 

    return child.gWin;
};
var argument8 = r_2;
var argument9 = function (result) {
 callbackArguments.push(arguments) 

    result = normalize.call(this.document, result);
    if (result == null)
        return null;
    if (!isChildNode(result))
        result = makeElement.call(this.document, childName, result);
    return result;
};
var argument10 = null;
var base_0 = [893,607,25,126,213,49,893,82,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,607,25,126,213,49,893,82,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,607,25,126,213,49,893,82,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test334.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)