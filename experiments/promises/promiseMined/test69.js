/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    /permission/i.test(err.message).should.be.true;
};
var argument2 = [100,242,157,893,59,0,100,100,213];
var argument3 = true;
var argument4 = function (data) {
 callbackArguments.push(arguments) 

    $rootScope.$emit('reloadListView', {});
    if (parrentFolderID == null)
        $location.url('/folder/');
    else
        $location.url('/folder/' + parrentFolderID);
};
var argument5 = r_1;
var argument6 = true;
var argument7 = p2;
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    item.foo.should.equal('bar');
};
var argument9 = function setWebsiteToInvalid() {
 callbackArguments.push(arguments) 

    this.fillSelectors('form.user-profile', { '#user-website': 'notaurl' });
};
var argument10 = "";
var argument11 = true;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
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
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test69.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)