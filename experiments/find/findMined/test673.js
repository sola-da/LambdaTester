





var callbackArguments = [];
var argument1 = function (frame) {
 callbackArguments.push(arguments) 

    if (v = frame.variable(name)) {
        return v.value.eval(env);
    }
};
var argument2 = null;
var argument3 = null;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc2._id;
};
var argument5 = r_0;
var argument6 = r_0;
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return me.getListItemValue(x) === value;
};
var argument8 = 823;
var argument9 = {"-1":""};
var argument10 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same([1], ids, 'Defining an endpoint failed.');
    t.done();
};
var argument11 = false;
var argument12 = null;
var base_0 = ["d6","#","gn","!f","Y:=","g_dW","t","t",")","nOq"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["d6","#","gn","!f","Y:=","g_dW","t","t",")","nOq"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["d6","#","gn","!f","Y:=","g_dW","t","t",")","nOq"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["d6","#","gn","!f","Y:=","g_dW","t","t",")","nOq"]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/find/findMined/test673.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)