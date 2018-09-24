





var callbackArguments = [];
var argument1 = function (res) {
 callbackArguments.push(arguments) 

    if (!res.ok) {
        result.doc_write_failures++;
        errors.push(new Error(res.reason || res.message || 'Unknown reason'));
    }
};
var argument2 = function (rect) {
 callbackArguments.push(arguments) 

    this.invalidateRect(adjustRect(rect));
};
var argument3 = "";
var argument4 = null;
var argument5 = function (d, i) {
 callbackArguments.push(arguments) 

    if (vars.depth.value == i) {
        var prev = m[vars.id.nesting[i - 1]];
        if (typeof prev === 'string') {
            m[d] = 'd3plus_other_' + prev;
        } else {
            m[d] = 'd3plus_other';
        }
    } else if (i > vars.depth.value) {
        delete m[d];
    }
};
var argument6 = false;
var argument7 = r_0;
var argument8 = function (stuff) {
 callbackArguments.push(arguments) 

    arrays.forEach(function (array) {
        model.compareThings(array, stuff).should.equal(-1);
        model.compareThings(stuff, array).should.equal(1);
    });
};
var base_0 = [893,607,59,655,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,607,59,655,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,607,59,655,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,607,59,655,618]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test686.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)