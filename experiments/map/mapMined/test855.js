





var callbackArguments = [];
var argument1 = function (localizedSymbol) {
 callbackArguments.push(arguments) 

    return regexpEscape(localizedSymbol);
};
var argument2 = function (doc, i) {
 callbackArguments.push(arguments) 

    var newDoc = utils.parseDoc(doc, newEdits);
    newDoc._bulk_seq = i;
    return newDoc;
};
var argument3 = [1.7976931348623157e+308,157,705,157,627,126,82,82,627,1.7976931348623157e+308];
var argument4 = null;
var argument5 = function (depName) {
 callbackArguments.push(arguments) 

    return {
        depName: depName,
        value: data[depName]
    };
};
var argument6 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument7 = r_3;
var base_0 = [783,607,403,"h","Z","foV",126,"ZO%","8","v"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,607,403,"h","Z","foV",126,"ZO%","8","v"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,607,403,"h","Z","foV",126,"ZO%","8","v"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,607,403,"h","Z","foV",126,"ZO%","8","v"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test855.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)