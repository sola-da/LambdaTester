/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    done();
};
var argument2 = -1;
var argument3 = p2;
var argument4 = function () {
 callbackArguments.push(arguments) 

    refute.called(forEachSpy);
};
var argument5 = true;
var argument6 = function (sourceDoc) {
 callbackArguments.push(arguments) 

    if (targetDoc.last_seq === sourceDoc.last_seq) {
        return sourceDoc.last_seq;
    }
    return 0;
};
var argument7 = function (response) {
 callbackArguments.push(arguments) 

    if (response.status === 422 && response.data && _this.parseModelErrors) {
        _this.clearModelErrors();
        _this.addModelErrors(_this.parseModelErrors(response.data));
    }
    return $q.reject(response);
};
var argument8 = "";
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test557.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)