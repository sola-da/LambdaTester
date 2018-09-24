/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    appSettings.loadSettings().then(function (result) {
        appSettings.set({ token: $scope.manualToken });
        ghAPI.setToken($scope.manualToken);
        $location.url('/');
    });
};
var argument3 = {"n":"$"};
var argument4 = 5.941675866458566e+307;
var argument5 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument6 = r_1;
var argument7 = "d";
var argument8 = null;
var argument9 = function (res) {
 callbackArguments.push(arguments) 

    assert.equal(res.body, 'OK');
    return httpGet('/test');
};
var argument10 = {"618":"L","Z":9.146594384120814e+307,"U":9.333540681575306e+307,"":">","2.497385861660227e+307":1.2368015593403405e+308,"k]2Y":25,"5.877434930285495e+307":607,">":1.1554427590343538e+308};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument2,argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test859.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)