





var callbackArguments = [];
var argument1 = function (co) {
 callbackArguments.push(arguments) 

    clearAspect(co, that);
};
var argument2 = false;
var argument3 = true;
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    acc.push(this.node);
};
var argument5 = r_0;
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    stack.push(value);
    send(callback());
    stack.pop();
};
var argument7 = r_0;
var argument8 = "IV";
var argument9 = function (child) {
 callbackArguments.push(arguments) 

    var s = child.domStyles;
    s['-webkit-box-sizing'] = 'border-box';
    s.margin = 0;
    s.position = 'absolute';
    if (child.size !== undefined) {
        s.height = child.size + 'px';
    }
};
var argument10 = r_1;
var argument11 = null;
var base_0 = [705,655,969]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,655,969]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,655,969]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,655,969]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test236.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)