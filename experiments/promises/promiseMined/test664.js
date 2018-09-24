/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (users) {
 callbackArguments.push(arguments) 

    users.length.should.be.above(0);
};
var argument2 = true;
var argument3 = {"25":1.8440685894947903e+307,"157":"#","607":783,"783":242,"":1.7018527294435368e+308,"2.179317288159317e+307":"y","1.7976931348623157e+308":1.3203768818514431e+308,"1.0926725297658841e+307":"tK","1.6810309921699507e+308":460};
var argument4 = function (response) {
 callbackArguments.push(arguments) 

    if (response.status === 422 && response.data && _this.parseModelErrors) {
        _this.clearModelErrors();
        _this.addModelErrors(_this.parseModelErrors(response.data));
    }
    return $q.reject(response);
};
var argument5 = {"1":655,"122":"EYR","-100":823,"":1.442850986196257e+308,"1.0263236799540323e+308":"","1.4592881572758609e+308":"","7.342422763890615e+307":1.758836627906837e+308,"K":")","%R":"6","1.6315857684708044e+308":"TPfG(R%-+B"};
var argument6 = function (err) {
 callbackArguments.push(arguments) 

    done();
};
var argument7 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument8 = p2;
var argument9 = "9";
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument6)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test664.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)