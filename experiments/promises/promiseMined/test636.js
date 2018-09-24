/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    destination.requireDestinationTag = false;
    destination.balance = 0;
    return destination;
};
var argument2 = function (error) {
 callbackArguments.push(arguments) 

    console.error(error);
};
var argument3 = {"1.0761710453918136e+308":969,"wIs":783,"":1.2908849489421809e+308,"(q]:":"","-Dv^":"","1.2390797318031166e+308":"A"};
var argument4 = 627;
var argument5 = function (lastSeqDoc) {
 callbackArguments.push(arguments) 

    view.seq = lastSeqDoc ? lastSeqDoc.seq : 0;
    if (!temporary) {
        sourceDB._cachedViews = sourceDB._cachedViews || {};
        sourceDB._cachedViews[viewSignature] = view;
        view.db.on('destroyed', function () {
            delete sourceDB._cachedViews[viewSignature];
        });
    }
    return view;
};
var argument6 = r_2;
var argument7 = function (error) {
 callbackArguments.push(arguments) 

    error.stack = error.stack + self.stack.replace(/^[^\n]+/, '');
    throw error;
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument2,argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument7)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test636.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)