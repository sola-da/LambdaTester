





var callbackArguments = [];
var argument1 = function (triple) {
 callbackArguments.push(arguments) 

    query = query + that._nodeToQuery(triple.subject) + that._nodeToQuery(triple.predicate) + that._nodeToQuery(triple.object) + '.';
};
var argument2 = null;
var argument3 = function (ts) {
 callbackArguments.push(arguments) 

    ts.length = 0;
};
var argument4 = true;
var argument5 = "m";
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    if (d !== e) {
        assert.ok(spec.metric(d, e) > spec.clusterDistance);
    }
};
var argument7 = function (oneAnswer) {
 callbackArguments.push(arguments) 

    answer = {
        name: hostname,
        type: question.message,
        class: question.class,
        data: oneAnswer.address,
        ttl: oneAnswer.ttl
    };
    res.answer.push(answer);
};
var argument8 = r_3;
var base_0 = ["rY","b","2","sGm","gn"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["rY","b","2","sGm","gn"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["rY","b","2","sGm","gn"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["rY","b","2","sGm","gn"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test604.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)