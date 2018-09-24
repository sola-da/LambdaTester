





var callbackArguments = [];
var argument1 = function (patch) {
 callbackArguments.push(arguments) 

    textStorage.replaceCharacters(patch.oldRange, patch.newCharacters);
};
var argument2 = true;
var argument3 = function (element) {
 callbackArguments.push(arguments) 

    map[element] = true;
};
var argument4 = true;
var argument5 = function (rect) {
 callbackArguments.push(arguments) 

    context.fillRect(rect.x, rect.y, rect.width, rect.height);
};
var argument6 = null;
var argument7 = function (sk) {
 callbackArguments.push(arguments) 

    if (sk && sk.sendmacused)
        self.oldMacKeys.push(sk.sendmac);
    if (sk && sk.rcvmacused)
        self.oldMacKeys.push(sk.rcvmac);
};
var base_0 = ["r","2","RB^eB,","B","n",">","S"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["r","2","RB^eB,","B","n",">","S"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["r","2","RB^eB,","B","n",">","S"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["r","2","RB^eB,","B","n",">","S"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test765.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)