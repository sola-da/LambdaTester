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
var argument2 = p1;
var argument3 = function (response) {
 callbackArguments.push(arguments) 

    assert.same('http://example.com/next/next', response._links.self.href);
};
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument5 = ["0,1","-!"];
var argument6 = function () {
 callbackArguments.push(arguments) 

    return driver.executeAsyncScript(function (events, callback) {
        var result = [];
        Reanimator.replay({
            dates: [],
            events: events
        });
        setInterval(function () {
            result.push(0);
        }, 100);
        setInterval(function () {
            result.push(1);
            if (result.length >= 5) {
                Reanimator.cleanUp();
                callback(result);
            }
        }, 30);
    }, events);
};
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
r_1 = base_1.then(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument4)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.then(argument5,argument6)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test105.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)