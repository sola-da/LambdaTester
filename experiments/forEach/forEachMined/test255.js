





var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    if (file.id === id) {
        tmp = file;
        return false;
    }
};
var argument2 = function (key, index) {
 callbackArguments.push(arguments) 

    code += 'if(s === null || s === undefined) return s;\n' + 'l=s;\n' + 's=' + (index ? 's' : '((k&&k.hasOwnProperty("' + key + '"))?k:s)') + '["' + key + '"]' + ';\n' + 'if (s && s.then) {\n' + ' if (!("$$v" in s)) {\n' + ' p=s;\n' + ' p.$$v = undefined;\n' + ' p.then(function(v) {p.$$v=v;});\n' + '}\n' + ' s=s.$$v\n' + '}\n';
};
var argument3 = null;
var argument4 = {"403":595,"":100,"2.923788569477153e+307":783,"1.7572664759159699e+308":"","bl":":I","yO":""};
var argument5 = function (marker) {
 callbackArguments.push(arguments) 

    return _this.remove(marker);
};
var argument6 = function (arg, i) {
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
var argument7 = null;
var base_0 = [714,783,-1,49,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,783,-1,49,607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,783,-1,49,607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,783,-1,49,607]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test255.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)