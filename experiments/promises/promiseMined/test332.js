/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (response) {
 callbackArguments.push(arguments) 

    return response.data;
};
var argument2 = true;
var argument3 = false;
var argument4 = function (contents) {
 callbackArguments.push(arguments) 

    self._model.value = contents;
};
var argument5 = false;
var argument6 = true;
var argument7 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var argument8 = [607,242,-1,607];
var argument9 = r_2;
var argument10 = function (rendered) {
 callbackArguments.push(arguments) 

    should.exist(rendered);
    rendered.string.should.not.match(/<meta property="og:description" \/>/);
    rendered.string.should.not.match(/<meta name="twitter:description"\/>/);
    rendered.string.should.not.match(/"description":/);
    done();
};
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
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test332.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)