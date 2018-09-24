





var callbackArguments = [];
var argument1 = function (ref) {
 callbackArguments.push(arguments) 

    if (ref instanceof AST_Continue) {
        ref = ref.label.start;
        croak('Continue label `' + label.name + '` refers to non-IterationStatement.', ref.line, ref.col, ref.pos);
    }
};
var argument2 = false;
var argument3 = function (optKey) {
 callbackArguments.push(arguments) 

    delete subOpts[optKey];
};
var argument4 = null;
var argument5 = function (k) {
 callbackArguments.push(arguments) 

    console.log('Style removed \'' + k + ': ' + old[k] + '\'', ev.target);
};
var argument6 = [126,1.7976931348623157e+308,705,242,-100];
var argument7 = function (cItm, idx) {
 callbackArguments.push(arguments) 

    var nToggle = tcJoin.split('|');
    nToggle.push(nToggle[nToggle.length - 1] + '-' + idx);
    iStack.push(idx);
    createRow(nextLevel, cItm, false, nToggle, iStack, parentOpen);
    iStack.pop();
};
var argument8 = {"":1.636300746978551e+308,"1.7976931348623157e+308":714,"1.2105379463527023e+308":7.995026250490616e+307,";G":6.957034319404633e+307};
var base_0 = ["1&","<","Gq","V","x","LdqM","JO<m:","izv","LI"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1&","<","Gq","V","x","LdqM","JO<m:","izv","LI"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1&","<","Gq","V","x","LdqM","JO<m:","izv","LI"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1&","<","Gq","V","x","LdqM","JO<m:","izv","LI"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test636.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)