





var callbackArguments = [];
var argument1 = function (hookName) {
 callbackArguments.push(arguments) 

    exports[hookName] = LoaderHooks[hookName];
};
var argument2 = false;
var argument3 = null;
var argument4 = function (scopeListener) {
 callbackArguments.push(arguments) 

    scopeListener.listener.apply(this, args);
};
var argument5 = r_1;
var argument6 = "s";
var argument7 = function (child) {
 callbackArguments.push(arguments) 

    childResults = childResults.concat(child.search(text));
};
var argument8 = function (stuff) {
 callbackArguments.push(arguments) 

    numbers.forEach(function (number) {
        model.compareThings(number, stuff).should.equal(-1);
        model.compareThings(stuff, number).should.equal(1);
    });
};
var argument9 = null;
var argument10 = ["(","m","c","s","j","$Azm","[M","07","1N"];
var base_0 = [5e-324,"<",0,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,"<",0,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,"<",0,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,"<",0,100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test129.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)