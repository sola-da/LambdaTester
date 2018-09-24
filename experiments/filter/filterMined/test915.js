





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i);
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    var first_match = nest_check(d[vars.edges.source]), second_match = nest_check(d[vars.edges.target]);
    return first_match && second_match;
};
var argument3 = null;
var argument4 = true;
var argument5 = function (o, i) {
 callbackArguments.push(arguments) 

    this[i] = o;
    return true;
};
var argument6 = 0;
var argument7 = function (c) {
 callbackArguments.push(arguments) 

    return cl.indexOf(c) === -1;
};
var argument8 = r_1;
var argument9 = true;
var base_0 = ["b","S:","JUg","B","I","d}","_","Br","z"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["b","S:","JUg","B","I","d}","_","Br","z"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["b","S:","JUg","B","I","d}","_","Br","z"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test915.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)