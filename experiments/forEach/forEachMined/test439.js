





var callbackArguments = [];
var argument1 = function (viewDBName) {
 callbackArguments.push(arguments) 

    viewsToStatus[viewDBName] = viewsToStatus[viewDBName] || statusIsGood;
};
var argument2 = true;
var argument3 = true;
var argument4 = function (deregisterWatch) {
 callbackArguments.push(arguments) 

    deregisterWatch();
};
var argument5 = null;
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    customApi._getAttachment(attachments[key], {
        encode: true,
        ctx: ctx
    }, function (err, data) {
        doc._attachments[key].data = data;
        if (!--count) {
            call(callback, null, doc);
        }
    });
};
var argument7 = function (k) {
 callbackArguments.push(arguments) 

    copy[k] = obj[k];
};
var base_0 = [-1,49,893,5e-324,618,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,49,893,5e-324,618,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,49,893,5e-324,618,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,49,893,5e-324,618,49]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test439.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)