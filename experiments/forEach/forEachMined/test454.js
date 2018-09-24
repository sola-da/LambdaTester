





var callbackArguments = [];
var argument1 = function (type) {
 callbackArguments.push(arguments) 

    if (domain.hidden)
        type.hidden = true;
    api[domain.domain + '.' + (type.name || type.id)] = type;
};
var argument2 = null;
var argument3 = false;
var argument4 = function (i) {
 callbackArguments.push(arguments) 

    Mousetrap.bind([i.toString()], function () {
        return _this.seek(i * 10);
    });
};
var argument5 = null;
var argument6 = function (k) {
 callbackArguments.push(arguments) 

    self[k] = 0;
};
var argument7 = [25,82,783,595,-100,595,122,0,25,100];
var argument8 = {"0":"","59":"","242":1.5578072586887977e+308,"705":"","":"q","1.311163076234906e+308":"","1.1501150183513307e+307":""};
var argument9 = function (item) {
 callbackArguments.push(arguments) 

    item.clear();
};
var argument10 = null;
var base_0 = [595,893,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,893,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,893,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,893,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test454.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)