/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (userArray) {
 callbackArguments.push(arguments) 

    service.all = userArray;
    userArray.forEach(function (user) {
        if (user.username) {
            byUserName[user.username] = user;
        }
    });
};
var argument2 = 3.91720415774753e+307;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var $selects, $select, i;
    $selects = $('select[data-select-value]');
    $('select#n_val').val($('select#n_val').attr('data-select-value'));
    Rekon.capControlsSelector();
    for (i = 0; i < $selects.length; i++) {
        $select = $($selects[i]);
        $select.val($select.attr('data-select-value'));
    }
    $('select#n_val').change(Rekon.capControlsSelector);
};
var argument4 = "";
var argument5 = function () {
 callbackArguments.push(arguments) 

    searchable('#stats tbody tr');
};
var argument6 = function _step() {
 callbackArguments.push(arguments) 

    var popupPage = this.popups.find(popupInfo);
    if (!utils.isFunction(then)) {
        throw new CasperError('withPopup() requires a step function.');
    }
    this.page = popupPage;
};
var argument7 = [655,893,"Jx"];
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1)
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
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument6,argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test381.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)