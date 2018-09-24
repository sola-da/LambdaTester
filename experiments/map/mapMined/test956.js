





var callbackArguments = [];
var argument1 = function (pred) {
 callbackArguments.push(arguments) 

    return pred.visit(context);
};
var argument2 = function (id) {
 callbackArguments.push(arguments) 

    return xs[id];
};
var argument3 = "S";
var argument4 = true;
var argument5 = function (obj) {
 callbackArguments.push(arguments) 

    return transform(obj.value);
};
var argument6 = ["n2N","&6","h","^A","^","m","$","T6L,>"];
var argument7 = function (result) {
 callbackArguments.push(arguments) 

    result = normalize.call(this.document, result);
    if (result == null)
        return null;
    if (!isChildNode(result))
        result = makeElement.call(this.document, childName, result);
    return result;
};
var argument8 = {"0":823,"3":843,"":"zg","x":823,"R0)":"","1.7937634293748103e+308":"","6i!|":1.3595757737181653e+308};
var argument9 = r_3;
var base_0 = [59,595,714,893,823,705,823,122,49]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,595,714,893,823,705,823,122,49]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,595,714,893,823,705,823,122,49]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,595,714,893,823,705,823,122,49]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test956.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)