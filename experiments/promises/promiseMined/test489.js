/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return lawnchairDao.read(key);
};
var argument2 = true;
var argument3 = null;
var argument4 = function (lastSeqDoc) {
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
var argument5 = p2;
var argument6 = p1;
var argument7 = function (ex) {
 callbackArguments.push(arguments) 

    promise.reject(ex);
};
var argument8 = "d|";
var argument9 = r_2;
var argument10 = function (err) {
 callbackArguments.push(arguments) 

    /permission/i.test(err.message).should.be.true;
};
var argument11 = {"100":9.580961166800025e+307,"1.5314336445272145e+308":9.406512019037022e+306,"3.294657973746234e+307":"","Y":"","1.0845948229705667e+308":714,"":"","q":1.5472632292957326e+308,"6.108083771579453e+307":"uX","8.749676224902249e+307":""};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test489.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)