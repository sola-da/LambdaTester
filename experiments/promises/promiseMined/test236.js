/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = true;
var argument2 = function (data) {
 callbackArguments.push(arguments) 

    $scope.titletext = data.message;
    $scope.featuredplaylists = data.playlists.items;
    $scope.headerplaylist = data.playlists.items[Math.floor(Math.random() * data.playlists.items.length)];
    loadHeaderPlaylistTracks();
};
var argument3 = function load_success(text) {
 callbackArguments.push(arguments) 

    self.source = text;
};
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    done();
};
var argument5 = true;
var argument6 = true;
var argument7 = [627,"N",1.7976931348623157e+308];
var argument8 = function () {
 callbackArguments.push(arguments) 

    assert.ok($('#fxa-signup-header').length);
    assert.isTrue(TestHelpers.isEventLogged(metrics, 'screen.signin'));
    assert.isTrue(TestHelpers.isEventLogged(metrics, 'screen.signup'));
};
var argument9 = "";
var base_0 = p1
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
r_1 = base_1.then(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument4,argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test236.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)