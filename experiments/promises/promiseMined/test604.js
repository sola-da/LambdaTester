/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    refute.called(forEachSpy);
};
var argument2 = null;
var argument3 = function (rendered) {
 callbackArguments.push(arguments) 

    should.exist(rendered);
    rendered.string.should.match(/<link rel="canonical" href="http:\/\/testurl.com\/blog\/" \/>/);
    rendered.string.should.match(/<meta name="generator" content="Ghost 0.3" \/>/);
    rendered.string.should.match(/<link rel="alternate" type="application\/rss\+xml" title="Ghost" href="http:\/\/testurl.com\/blog\/rss\/" \/>/);
    done();
};
var argument4 = r_1;
var argument5 = true;
var argument6 = function (dropdowns) {
 callbackArguments.push(arguments) 

    expect(dropdowns).to.have.length(3, 'There should be 3 dropdown menus rendered, found: ' + dropdowns.length);
};
var argument7 = null;
var argument8 = function () {
 callbackArguments.push(arguments) 

    throw new Error('At least one Bespin failed to launch!');
};
var argument9 = r_2;
var argument10 = false;
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
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test604.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)