





var callbackArguments = [];
var argument1 = function (path) {
 callbackArguments.push(arguments) 

    var stemmed = path.ids.slice(-depth);
    return {
        pos: path.pos + (path.ids.length - stemmed.length),
        ids: pathToTree(stemmed)
    };
};
var argument2 = [655,49,460,893,460];
var argument3 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument4 = function (originalGroupId) {
 callbackArguments.push(arguments) 

    if (idMappings['groups'][currentBatch][originalGroupId]) {
        return idMappings['groups'][currentBatch][originalGroupId].generatedId;
    } else {
        console.log('    Warning: Could not map content membership for user "%s"', originalGroupId);
        return originalGroupId;
    }
};
var argument5 = r_1;
var argument6 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var argument7 = true;
var argument8 = r_1;
var base_0 = [783,"gFZfEi",595,"@","+",25,"<",-1,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,"gFZfEi",595,"@","+",25,"<",-1,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,"gFZfEi",595,"@","+",25,"<",-1,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,"gFZfEi",595,"@","+",25,"<",-1,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test387.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)