





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    found = found || d.databaseid == 'ls150';
};
var argument2 = function (rule) {
 callbackArguments.push(arguments) 

    rule.splitRegex = this.createSplitterRegexp(rule.regex, flag);
};
var argument3 = function (n) {
 callbackArguments.push(arguments) 

    addExtension(exts[n], n);
};
var argument4 = null;
var argument5 = function (name) {
 callbackArguments.push(arguments) 

    var file = files[name];
    length += 46 + file.filename.length + file.comment.length;
};
var base_0 = [122,"e#","1B(gl"," 97",705,"vl",-100,"|"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"e#","1B(gl"," 97",705,"vl",-100,"|"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"e#","1B(gl"," 97",705,"vl",-100,"|"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"e#","1B(gl"," 97",705,"vl",-100,"|"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test902.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)