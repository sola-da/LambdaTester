





var callbackArguments = [];
var argument1 = function (child) {
 callbackArguments.push(arguments) 

    child.setProperty(childToParentNp.name, entity);
};
var argument2 = ["p?|","fo","l",";2","(k=zv","F","J","4","Nq:"];
var argument3 = function (klass) {
 callbackArguments.push(arguments) 

    if (!$(this).hasClass(klass))
        classList.push(klass);
};
var argument4 = true;
var argument5 = [607,627,"oV","19g2"];
var argument6 = function (date) {
 callbackArguments.push(arguments) 

    model.compareThings(date, stuff).should.equal(-1);
    model.compareThings(stuff, date).should.equal(1);
};
var argument7 = null;
var argument8 = function cb_forEach(pair) {
 callbackArguments.push(arguments) 

    if (pair[0] === 'Dispatcher' && pair[1] === 'http')
        found = true;
};
var argument9 = r_1;
var argument10 = false;
var base_0 = ["l","I?b"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l","I?b"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l","I?b"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l","I?b"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test574.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)