





var callbackArguments = [];
var argument1 = function (node) {
 callbackArguments.push(arguments) 

    if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
        ancestors.push(node);
        return node;
    }
};
var argument2 = false;
var argument3 = function (value, index) {
 callbackArguments.push(arguments) 

    return {
        v: value,
        f: labels && labels[index]
    };
};
var argument4 = 2.0669808705907619e+307;
var argument5 = true;
var argument6 = function (originalUserId) {
 callbackArguments.push(arguments) 

    if (idMappings['groups'][currentBatch][originalUserId]) {
        return idMappings['groups'][currentBatch][originalUserId].generatedId;
    } else {
        console.log('    Warning: Could not map discussions membership for group "%s"', originalUserId);
        return originalUserId;
    }
};
var argument7 = "";
var argument8 = function (obc) {
 callbackArguments.push(arguments) 

    return obc.getComparer(entityType);
};
var argument9 = {"BPu<":242,"4.512087368777301e+307":"<","+5":"","1.8775623782926713e+307":"","":4.484664877031345e+307,"KW":""};
var base_0 = [714,213]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,213]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,213]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,213]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test656.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)