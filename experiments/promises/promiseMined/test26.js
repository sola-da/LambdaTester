/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 12,
                end: 14
            },
            {
                start: 33,
                end: 35
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument2 = false;
var argument3 = p1;
var argument4 = function (res) {
 callbackArguments.push(arguments) 

    assert.equal(res.statusCode, 404);
    done();
};
var argument5 = null;
var argument6 = "";
var argument7 = function () {
 callbackArguments.push(arguments) 

    var a1 = new wd.TouchAction().tap({
            x: 100,
            y: 200
        });
    var a2 = new wd.TouchAction().tap({
            x: 50,
            y: 25
        });
    var ma = new wd.MultiAction().add(a1, a2);
    return browser.performMultiAction(el, ma);
};
var argument8 = {"100":"M","823":126,"?dO_":"","{":"","t":"","1.5767673710574408e+307":242,"":1.5535970379771984e+307};
var argument9 = r_1;
var argument10 = function (err) {
 callbackArguments.push(arguments) 

    /permission/i.test(err.message).should.be.true;
};
var argument11 = [595,-100,59,5e-324];
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
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test26.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)