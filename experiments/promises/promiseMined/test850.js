/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (res) {
 callbackArguments.push(arguments) 

    assert.equal(res.body, 'OK');
    return httpGet('/test');
};
var argument2 = p2;
var argument3 = ["pve0","F!","|+,"];
var argument4 = 1.6301765998871592e+308;
var argument5 = function (articlesResponse) {
 callbackArguments.push(arguments) 

    $scope.articles = articlesResponse.data;
};
var argument6 = {"+P":"Qm|B^","":-1,"$|":1.0924236125852001e+307};
var argument7 = function (err) {
 callbackArguments.push(arguments) 

    /permission/i.test(err.message).should.be.true;
};
var argument8 = null;
var argument9 = function (data) {
 callbackArguments.push(arguments) 

    $scope.titletext = data.message;
    $scope.featuredplaylists = data.playlists.items;
    $scope.headerplaylist = data.playlists.items[Math.floor(Math.random() * data.playlists.items.length)];
    loadHeaderPlaylistTracks();
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test850.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)