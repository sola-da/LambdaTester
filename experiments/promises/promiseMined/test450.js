/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument2 = true;
var argument3 = function (error) {
 callbackArguments.push(arguments) 

    error.stack = error.stack + self.stack.replace(/^[^\n]+/, '');
    throw error;
};
var argument4 = "";
var argument5 = null;
var argument6 = function (response) {
 callbackArguments.push(arguments) 

    if (response.status === 422 && response.data && _this.parseModelErrors) {
        _this.clearModelErrors();
        _this.addModelErrors(_this.parseModelErrors(response.data));
    }
    return $q.reject(response);
};
var argument7 = p2;
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    item.foo.should.equal('bar');
};
var argument9 = p1;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.catch(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test450.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)