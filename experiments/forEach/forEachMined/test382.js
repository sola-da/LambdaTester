





var callbackArguments = [];
var argument1 = function (item, index) {
 callbackArguments.push(arguments) 

    item.index = index;
};
var argument2 = function (state) {
 callbackArguments.push(arguments) 

    var fn = callUpdates && state.update ? 'update' : 'enter';
    promise = promise.then(call(state, fn));
};
var argument3 = "";
var argument4 = null;
var argument5 = function (child) {
 callbackArguments.push(arguments) 

    var s = child.domStyles;
    s['-webkit-box-sizing'] = 'border-box';
    s.margin = 0;
    s.position = 'absolute';
    if (child.size !== undefined) {
        s.height = child.size + 'px';
    }
};
var argument6 = r_0;
var argument7 = function (ref) {
 callbackArguments.push(arguments) 

    if (ref instanceof AST_Continue) {
        ref = ref.label.start;
        croak('Continue label `' + label.name + '` refers to non-IterationStatement.', ref.line, ref.col, ref.pos);
    }
};
var base_0 = [100,607,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,607,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,607,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,607,82]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test382.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)