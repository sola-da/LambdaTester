





var callbackArguments = [];
var argument1 = function (row) {
 callbackArguments.push(arguments) 

    for (var field in row) {
        if (!fieldSet.has(field)) {
            fields.push(fieldSet.add(field));
        }
    }
};
var argument2 = r_0;
var argument3 = function (arg, i) {
 callbackArguments.push(arguments) 

    if (utils.messageName(arg) == 'ArrayBuffer') {
        ret.push({
            'CDVType': 'ArrayBuffer',
            'data': base64.fromArrayBuffer(arg)
        });
    } else {
        ret.push(arg);
    }
};
var argument4 = r_1;
var argument5 = true;
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    tmp = tmp.concat(_createPart(item, boundary));
};
var argument7 = function (item, i) {
 callbackArguments.push(arguments) 

    this[item[0]] = item[1](WScript.Arguments.Item(i));
};
var base_0 = [403,893,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,893,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,893,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,893,213]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test31.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)