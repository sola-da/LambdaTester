





var callbackArguments = [];
var argument1 = function (obj) {
 callbackArguments.push(arguments) 

    srcFiles = srcFiles.concat(obj.srcFiles);
};
var argument2 = false;
var argument3 = null;
var argument4 = function (callback) {
 callbackArguments.push(arguments) 

    callback();
};
var argument5 = false;
var argument6 = function (child) {
 callbackArguments.push(arguments) 

    if (index) {
        element.insertBefore(child, index);
    } else {
        element.appendChild(child);
        index = child;
    }
};
var argument7 = null;
var argument8 = {"460":"","893":0,"k":"","`J":"","1.2932175504087319e+308":"","":""};
var argument9 = function (port) {
 callbackArguments.push(arguments) 

    portsSelect.appendChild(utils.createElement('option', {
        innerText: port,
        value: port,
        selected: currentPort === port
    }));
};
var base_0 = [714,242,49,618,157,213,460,-1,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,242,49,618,157,213,460,-1,607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,242,49,618,157,213,460,-1,607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,242,49,618,157,213,460,-1,607]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test330.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)