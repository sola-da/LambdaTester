





var callbackArguments = [];
var argument1 = function (x, callback) {
 callbackArguments.push(arguments) 

    iterator(x, function (v) {
        if (!v) {
            main_callback(false);
            main_callback = function () {
            };
        }
        callback();
    });
};
var argument2 = null;
var argument3 = null;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    d[vars.text.value || vars.id.value] = d[key];
};
var argument5 = {};
var argument6 = function (n) {
 callbackArguments.push(arguments) 

    dojo.toggleClass(n, 'dojoxGridSubRowAlt', alt);
    dojo.attr(n, 'dojoxTreeGridBaseClasses', n.className);
    alt = !alt;
    self.grid.rows.styleRowNode(dojo.attr(n, 'dojoxTreeGridPath'), n);
};
var argument7 = false;
var argument8 = function (sk) {
 callbackArguments.push(arguments) 

    if (sk[1] && sk[1].sendmacused)
        self.oldMacKeys.push(sk[1].sendmac);
    if (sk[1] && sk[1].rcvmacused)
        self.oldMacKeys.push(sk[1].rcvmac);
};
var argument9 = r_2;
var base_0 = [82,100,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,100,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,100,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,100,25]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test651.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)