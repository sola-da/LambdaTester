





var callbackArguments = [];
var argument1 = function (n) {
 callbackArguments.push(arguments) 

    self.attachButtonBehavior(n, self.lastBtnClass, self.lastFunc);
};
var argument2 = true;
var argument3 = "";
var argument4 = function (index, j) {
 callbackArguments.push(arguments) 

    indexes[j] = +index;
};
var argument5 = "";
var argument6 = {"655":595,"":"?"};
var argument7 = function (methodName) {
 callbackArguments.push(arguments) 

    self[methodName] = function () {
        throw Error('Method \'' + methodName + '\' is not implemented in the TzDate mock');
    };
};
var argument8 = true;
var argument9 = function (onLoad) {
 callbackArguments.push(arguments) 

    onLoad && onLoad(module);
};
var argument10 = r_2;
var base_0 = ["d",618,595,"v`1",213,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["d",618,595,"v`1",213,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["d",618,595,"v`1",213,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["d",618,595,"v`1",213,-1]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test634.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)