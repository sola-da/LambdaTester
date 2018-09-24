





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    return !predicate(v);
};
var argument2 = "#,";
var argument3 = function (file) {
 callbackArguments.push(arguments) 

    return file.indexOf('test-rolling-file-stream-write-more') > -1;
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    return $.css(this, 'visibility') === 'hidden';
};
var argument5 = [893,-100,893];
var argument6 = function (r) {
 callbackArguments.push(arguments) 

    if (r instanceof tree.Ruleset || r instanceof tree.mixin.Definition) {
        return r;
    }
};
var argument7 = r_2;
var base_0 = ["q;","j","s","),"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["q;","j","s","),"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["q;","j","s","),"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test478.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)