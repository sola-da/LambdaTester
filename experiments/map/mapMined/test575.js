





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    return t.values.map(function (v) {
        return v.x;
    });
};
var argument2 = true;
var argument3 = function (v, i) {
 callbackArguments.push(arguments) 

    return [
        x.call(stack, v, i),
        y.call(stack, v, i)
    ];
};
var argument4 = null;
var argument5 = function (fkName) {
 callbackArguments.push(arguments) 

    return entity.getProperty(fkName);
};
var argument6 = true;
var argument7 = function (originalGroupId) {
 callbackArguments.push(arguments) 

    return idMappings['groups'][currentBatch][originalGroupId].generatedId;
};
var argument8 = null;
var argument9 = r_1;
var base_0 = ["kyu6R",893,"YC",893,59,655,"h"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["kyu6R",893,"YC",893,59,655,"h"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["kyu6R",893,"YC",893,59,655,"h"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["kyu6R",893,"YC",893,59,655,"h"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test575.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)