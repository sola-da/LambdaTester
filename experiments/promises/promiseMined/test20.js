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
var argument3 = {"1.1124322077573265e+308":1.3697700927298416e+308};
var argument4 = [893,460,-100];
var argument5 = function () {
 callbackArguments.push(arguments) 

    throw new Error('At least one Bespin failed to launch!');
};
var argument6 = function checkCharacterCount() {
 callbackArguments.push(arguments) 

    test.assert(getRemainingBioCharacterCount() === '200', 'Bio remaining characters is 200');
};
var argument7 = function (data) {
 callbackArguments.push(arguments) 

    $scope.titletext = data.message;
    $scope.featuredplaylists = data.playlists.items;
    $scope.headerplaylist = data.playlists.items[Math.floor(Math.random() * data.playlists.items.length)];
    loadHeaderPlaylistTracks();
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
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
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test20.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)