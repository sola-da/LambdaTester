/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = "CmI";
var argument2 = function (count) {
 callbackArguments.push(arguments) 

    expect(count).to.equal(1);
    spy();
    return self.sequelize.Promise.delay(1000).then(function () {
        return User.count().then(function (count) {
            expect(count).to.equal(1);
            spy();
            if (!spy.calledTwice) {
                throw new Error('Spy was not called twice');
            }
        });
    });
};
var argument3 = r_0;
var argument4 = function (elements) {
 callbackArguments.push(arguments) 

    assert.lengthOf(elements, 1, 'Expected to load page 1');
};
var argument5 = {"627":"","1.4861325865313525e+308":"","":6.828802070389855e+307};
var argument6 = function (resolved) {
 callbackArguments.push(arguments) 

    var objs = makeArray(arguments), renderer = objs.pop(), result;
    if (can.isDeferred(data)) {
        dataCopy = usefulPart(resolved);
    } else {
        for (var prop in data) {
            if (can.isDeferred(data[prop])) {
                dataCopy[prop] = usefulPart(objs.shift());
            }
        }
    }
    result = renderer(dataCopy, helpers);
    deferred.resolve(result, dataCopy);
    callback && callback(result, dataCopy);
};
var argument7 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument8 = true;
var argument9 = true;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.catch(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test432.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)