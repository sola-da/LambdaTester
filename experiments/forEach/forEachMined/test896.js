





var callbackArguments = [];
var argument1 = function (nodeName) {
 callbackArguments.push(arguments) 

    retDesc[nodeName] = webshims[baseMethod](nodeName, a, b, c);
};
var argument2 = function (key) {
 callbackArguments.push(arguments) 

    cli.log('                             ' + util.pad(key, 10) + '   ' + pbjs.targets[key].description);
};
var argument3 = [122,705,893,843,25,714,618,25];
var argument4 = function (k) {
 callbackArguments.push(arguments) 

    if (k.match(/^\!/)) {
        outgoing[k] = r.property[k];
    } else {
        incoming[k] = r.property[k];
    }
};
var argument5 = function (c) {
 callbackArguments.push(arguments) 

    var method = c.method;
    delete c.method;
    changesObject[method] = c;
};
var argument6 = {"8.835708849218787e+307":655,"ea":"","-100":""};
var argument7 = true;
var base_0 = [59,969,655,823,403,25,655,49,595,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,969,655,823,403,25,655,49,595,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,969,655,823,403,25,655,49,595,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,969,655,823,403,25,655,49,595,82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test896.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)