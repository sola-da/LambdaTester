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
var argument2 = 714;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    if (options.wait)
        _this.add(model, options);
};
var argument5 = [5e-324,59,-100,100,893,607,627,1.7976931348623157e+308];
var argument6 = p1;
var argument7 = function (rendered) {
 callbackArguments.push(arguments) 

    should.exist(rendered);
    rendered.string.should.match(/<link rel="canonical" href="http:\/\/testurl.com\/blog\/" \/>/);
    rendered.string.should.match(/<meta name="generator" content="Ghost 0.3" \/>/);
    rendered.string.should.match(/<link rel="alternate" type="application\/rss\+xml" title="Ghost" href="http:\/\/testurl.com\/blog\/rss\/" \/>/);
    done();
};
var argument8 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [{
                start: 40,
                end: 41
            }]);
    } finally {
        tearDown();
    }
};
var argument9 = true;
var argument10 = p1;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test156.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)