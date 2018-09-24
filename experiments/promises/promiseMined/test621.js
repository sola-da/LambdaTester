/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (el) {
 callbackArguments.push(arguments) 

    el.value.should.equal('0');
};
var argument2 = false;
var argument3 = null;
var argument4 = p2;
var argument5 = function (s) {
 callbackArguments.push(arguments) 

    stream = s;
    Room.init(stream);
    stream = URL.createObjectURL(stream);
    if (!$routeParams.roomId) {
        Room.createRoom().then(function (roomId) {
            $location.path('/room/' + roomId);
        });
    } else {
        Room.joinRoom($routeParams.roomId);
    }
};
var argument6 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var argument7 = null;
var argument8 = function (res) {
 callbackArguments.push(arguments) 

    assert.equal(res.body, 'OK');
    return httpGet('/test');
};
var argument9 = "";
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test621.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)