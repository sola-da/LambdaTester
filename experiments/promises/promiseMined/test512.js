/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function resolveError(reason) {
 callbackArguments.push(arguments) 

    modalResultDeferred.reject(reason);
};
var argument2 = {"25":242,"G8":"T","l":3.0734261973946973e+307,"":714,"1.387843420622056e+308":"","[;":595};
var argument3 = true;
var argument4 = function () {
 callbackArguments.push(arguments) 

    var newPrevious = _.clone(PREVIOUS);
    newPrevious.shift();
    expect(event.get('previousVideoEmbeds')).to.eql(newPrevious);
};
var argument5 = {"242":1.4448343605685094e+308,"783":"","1.4063349426725128e+308":"6k2","":59,">":1.2979519088717899e+308,"1.5813000618784656e+308":25};
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    observer.onNext(value);
    observer.onCompleted();
};
var argument7 = p1;
var argument8 = function (connection) {
 callbackArguments.push(arguments) 

    expect(conn.threadId).to.not.be.equal(connection.threadId);
    expect(cm.validate(conn)).to.not.be.ok;
    return cm.releaseConnection(connection);
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test512.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)