





var callbackArguments = [];
var argument1 = function (p) {
 callbackArguments.push(arguments) 

    if (p.previousSibling && (p.previousSibling.nodeName == 'P' || dojo.style(p.previousSibling, 'display') != 'block')) {
        var newP = p.parentNode.insertBefore(this.document.createElement('p'), p);
        newP.innerHTML = noWhiteSpaceInEmptyP ? '' : '&nbsp;';
    }
    splitP(p);
};
var argument2 = {"607":" F","1.7976931348623157e+308":"0","1.5720410617623581e+308":"","":""};
var argument3 = function (def) {
 callbackArguments.push(arguments) 

    vars.set(def.name.name, def);
    ++vars_found;
};
var argument4 = {"0":"","242":"{[*a ","403":714,"1.2756361078288924e+308":"%","":"D'F:S","1.7976931348623157e+308":"","`{":""};
var argument5 = r_0;
var argument6 = function (w) {
 callbackArguments.push(arguments) 

    if (w && w.el && w.el.parentNode) {
        w._inDocument = false;
        w.el.parentNode.removeChild(w.el);
    }
};
var argument7 = {"9":5.967415330871946e+307,"126":7.802659908182823e+307,"460":"%","":1.6977214650074408e+308,"1.1906829607605013e+308":6.618851702148747e+307,"@":"","2.1869172855352885e+307":595,"2.277641977158732e+307":")","z":8.979613759924138e+307};
var argument8 = function (r) {
 callbackArguments.push(arguments) 

    r.entityAspect && r.entityAspect.validateEntity();
};
var argument9 = false;
var base_0 = ["v","O^*9","8HV","]","a",",5r","zFvyo<","i","("]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v","O^*9","8HV","]","a",",5r","zFvyo<","i","("]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v","O^*9","8HV","]","a",",5r","zFvyo<","i","("]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["v","O^*9","8HV","]","a",",5r","zFvyo<","i","("]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test526.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)