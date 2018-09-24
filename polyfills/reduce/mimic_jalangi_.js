J$.iids = {"8":[7,13,7,15],"9":[2,1,2,6],"10":[5,21,5,27],"16":[5,21,5,27],"17":[2,1,2,16],"18":[5,34,5,35],"25":[3,18,3,22],"26":[6,18,6,27],"33":[3,18,3,22],"41":[3,18,3,22],"49":[4,14,4,18],"57":[4,14,4,25],"65":[4,14,4,25],"73":[4,14,4,25],"81":[5,18,5,19],"89":[5,18,5,19],"97":[5,18,5,19],"105":[5,21,5,22],"113":[5,25,5,27],"121":[5,34,5,35],"129":[5,29,5,30],"137":[5,29,5,35],"145":[6,18,6,19],"153":[6,23,6,27],"161":[6,18,6,27],"169":[6,18,6,27],"177":[7,13,7,15],"185":[8,22,8,26],"193":[8,27,8,28],"201":[8,22,8,29],"209":[8,22,8,29],"217":[8,22,8,29],"225":[9,22,9,26],"233":[9,32,9,41],"241":[9,43,9,49],"249":[9,51,9,53],"257":[9,55,9,56],"265":[9,58,9,62],"273":[9,22,9,63],"275":[9,22,9,31],"281":[9,22,9,63],"289":[9,22,9,63],"297":[10,22,10,24],"305":[10,22,10,24],"313":[10,13,10,24],"321":[13,12,13,18],"329":[13,12,13,18],"337":[13,5,13,18],"345":[2,26,14,2],"353":[2,26,14,2],"361":[2,26,14,2],"369":[2,26,14,2],"377":[2,26,14,2],"385":[2,26,14,2],"393":[2,26,14,2],"401":[2,26,14,2],"409":[2,26,14,2],"417":[2,26,14,2],"425":[2,26,14,2],"433":[2,26,14,2],"441":[2,1,14,2],"449":[2,1,14,2],"457":[1,1,14,2],"465":[7,9,11,10],"473":[5,5,12,6],"481":[5,5,12,6],"489":[2,26,14,2],"497":[2,26,14,2],"505":[1,1,14,2],"513":[1,1,14,2],"nBranches":4,"originalCodeFileName":"/home/lambdatester/Desktop/lambdaTester/polyfills/reduce/mimic.js","instrumentedCodeFileName":"/home/lambdatester/Desktop/lambdaTester/polyfills/reduce/mimic_jalangi_.js","code":"\nArray.prototype.reduce = function reduce(arg1, arg2) {\n    var result = arg2\n    var n0 = this.length\n    for (var i = 0; i < n0; i += 1) {\n        var n1 = i in this\n        if (n1) {\n            var n2 = this[i]\n            var n3 = arg1.call(undefined, result, n2, i, this)\n            result = n3\n        }\n    }\n    return result\n}"};
jalangiLabel6:
    while (true) {
        try {
            J$.Se(457, '/home/lambdatester/Desktop/lambdaTester/polyfills/reduce/mimic_jalangi_.js', '/home/lambdatester/Desktop/lambdaTester/polyfills/reduce/mimic.js');
            J$.X1(449, J$.P(441, J$.G(17, J$.R(9, 'Array', Array, 2), 'prototype', 0), 'reduce', J$.T(433, function reduce(arg1, arg2) {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(345, arguments.callee, this, arguments);
                            arguments = J$.N(353, 'arguments', arguments, 4);
                            reduce = J$.N(361, 'reduce', reduce, 0);
                            arg1 = J$.N(369, 'arg1', arg1, 4);
                            arg2 = J$.N(377, 'arg2', arg2, 4);
                            J$.N(385, 'result', result, 0);
                            J$.N(393, 'n0', n0, 0);
                            J$.N(401, 'i', i, 0);
                            J$.N(409, 'n1', n1, 0);
                            J$.N(417, 'n2', n2, 0);
                            J$.N(425, 'n3', n3, 0);
                            var result = J$.X1(41, J$.W(33, 'result', J$.R(25, 'arg2', arg2, 0), result, 1));
                            var n0 = J$.X1(73, J$.W(65, 'n0', J$.G(57, J$.R(49, 'this', this, 0), 'length', 0), n0, 1));
                            for (var i = J$.X1(97, J$.W(89, 'i', J$.T(81, 0, 22, false), i, 1)); J$.X1(473, J$.C(16, J$.B(10, '<', J$.R(105, 'i', i, 0), J$.R(113, 'n0', n0, 0), 0))); J$.X1(481, i = J$.W(137, 'i', J$.B(18, '+', J$.R(129, 'i', i, 0), J$.T(121, 1, 22, false), 0), i, 0))) {
                                var n1 = J$.X1(169, J$.W(161, 'n1', J$.B(26, 'in', J$.R(145, 'i', i, 0), J$.R(153, 'this', this, 0), 0), n1, 1));
                                if (J$.X1(465, J$.C(8, J$.R(177, 'n1', n1, 0)))) {
                                    var n2 = J$.X1(217, J$.W(209, 'n2', J$.G(201, J$.R(185, 'this', this, 0), J$.R(193, 'i', i, 0), 4), n2, 1));
                                    var n3 = J$.X1(289, J$.W(281, 'n3', J$.M(273, J$.R(225, 'arg1', arg1, 0), 'call', 0)(J$.T(233, undefined, 24, false), J$.R(241, 'result', result, 0), J$.R(249, 'n2', n2, 0), J$.R(257, 'i', i, 0), J$.R(265, 'this', this, 0)), n3, 1));
                                    J$.X1(313, result = J$.W(305, 'result', J$.R(297, 'n3', n3, 0), result, 0));
                                }
                            }
                            return J$.X1(337, J$.Rt(329, J$.R(321, 'result', result, 0)));
                        } catch (J$e) {
                            J$.Ex(489, J$e);
                        } finally {
                            if (J$.Fr(497))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 345), 0));
        } catch (J$e) {
            J$.Ex(505, J$e);
        } finally {
            if (J$.Sr(513)) {
                J$.L();
                continue jalangiLabel6;
            } else {
                J$.L();
                break jalangiLabel6;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
