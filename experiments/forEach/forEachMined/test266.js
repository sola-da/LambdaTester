





var callbackArguments = [];
var argument1 = function (prop) {
 callbackArguments.push(arguments) 

    webshims.defineNodeNamesProperty(nodeNames, prop, {
        prop: {
            set: function (val) {
                $.attr(this, prop, val);
            },
            get: function () {
                return $.attr(this, prop) || '';
            }
        }
    });
};
var argument2 = null;
var argument3 = false;
var argument4 = function (r) {
 callbackArguments.push(arguments) 

    if (!window[r])
        missing.push('"' + r + '"');
};
var argument5 = false;
var argument6 = function (item, index) {
 callbackArguments.push(arguments) 

    array[index] = {};
    array[index][key] = item;
};
var argument7 = null;
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    d.task = db[d.name].apply(null, d.parameters);
};
var argument9 = null;
var argument10 = r_1;
var base_0 = ["#","@","T","X|","l","]=G"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#","@","T","X|","l","]=G"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#","@","T","X|","l","]=G"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#","@","T","X|","l","]=G"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test266.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)