





var callbackArguments = [];
var argument1 = function (part) {
 callbackArguments.push(arguments) 

    part = part.split('=');
    var key = part.shift().toLowerCase();
    var value = part.join('=').trim();
    if (key === 'user') {
        username = value;
    } else if (key === 'auth') {
        value = value.split(/\s+/);
        if (value.shift().toLowerCase() === 'bearer') {
            accessToken = value.join(' ');
        }
    }
};
var argument2 = null;
var argument3 = null;
var argument4 = function (np) {
 callbackArguments.push(arguments) 

    var nodeContext = {
            nodeType: 'navProp',
            navigationProperty: np
        };
    visitNode(node[np.nameOnServer], mc, nodeContext, result, np.name);
};
var argument5 = {"705":"","":"zy(","6.214080546459266e+307":"","5.798188633052839e+307":157,"Zcvu#":595,"1.3853159234701984e+308":"Yq{"};
var argument6 = function (choice) {
 callbackArguments.push(arguments) 

    if (this.opt.default.indexOf(choice.value) >= 0) {
        choice.checked = true;
    }
};
var argument7 = 157;
var argument8 = null;
var argument9 = function (state) {
 callbackArguments.push(arguments) 

    if (state.children.length)
        addRoutes(state.children);
    else
        addRouteForLeafState(state);
};
var base_0 = ["C4","*"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C4","*"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C4","*"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C4","*"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test175.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)