

//VERDE

var lrosa = 0.09;

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);



var c0 = BEZIER(S0)([[3.19, 5.95,-0.8], [3.98, 5.87,0], [2.19, 4.34,0], [2.32, 4.07,0]]);
var c1 = BEZIER(S0)([[3.19, 5.95,-0.8], [3.98, 5.87,0], [2.19, 4.34,0], [2.32, 4.07,0]]);
var c2 = BEZIER(S0)([[3.19, 5.95,-0.8], [3.98, 5.87,0], [3.53, 4.61,0], [3.58, 3.64,0]]);



var out = MAP(BEZIER(S1)([c0,c1,c2]))(domain);


var c0p = BEZIER(S0)([[3.19, 5.95,-0.8-lrosa], [3.98, 5.87,0-lrosa], [2.19, 4.34,0-lrosa], [2.32, 4.07,0-lrosa]]);
var c1p = BEZIER(S0)([[3.19, 5.95,-0.8-lrosa], [3.98, 5.87,0-lrosa], [2.19, 4.34,0-lrosa], [2.32, 4.07,0-lrosa]]);
var c2p = BEZIER(S0)([[3.19, 5.95,-0.8-lrosa], [3.98, 5.87,0-lrosa], [3.53, 4.61,0-lrosa], [3.58, 3.64,0-lrosa]]);


var outp = MAP(BEZIER(S1)([c0p,c1p,c2p]))(domain);


var lat0 = MAP(BEZIER(S1)([c0,c0p]))(domain2);

var lat1 = MAP(BEZIER(S1)([c1,c1p]))(domain2);

var lat2 = MAP(BEZIER(S1)([c2,c2p]))(domain2);


var tot = STRUCT([lat0,lat1,lat2, out, outp])

tot = T([0,1,2])([-5,-5,0])(tot);



tot1 = ROTATE([0,1])(PI/2)(tot);

tot1 = T([0,1,2])([-3,1,0])(tot1);

tot2 = ROTATE([0,1])(PI/2)(tot1);

tot2 = T([0,1,2])([-3,1,0])(tot2);

tot3 = ROTATE([0,1])(PI/2)(tot2);

tot3 = T([0,1,2])([-3,1,0])(tot3);


tot0= STRUCT([tot,tot1,tot2,tot3])

tot0= ROTATE([0,2])(PI/2)(tot0);

tot0=SCALE([0,1,2])([2,2,2])(tot0)

tot0= COLOR([0,1,0,1])(tot0)

tot0 = T([0,1,2])([1.35,1,-4])(tot0);

tot0= ROTATE([1,0])(PI/4)(tot0);

tot0= ROTATE([0,1])(-PI/3.6)(tot0);

tot0 = T([0,1,2])([-0.06,1,-0.1])(tot0);

//DRAW(tot0);






//PETALI CENTRO


var lrosa = 0.05;

var domain = PROD1x1([INTERVALS(1)(50),INTERVALS(1)(50)]);
var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);



var c0 = BEZIER(S0)([[3.2, 3.08,0], [1.4, 4,0.7], [4.4, 4,0.7], [4.45, 3.21,0]]);
var c1 = BEZIER(S0)([[1.73, 2.66,0], [2.88, 2.49,1.5], [3.74, 2.67,1.5], [4.18, 2.77,0]]);
var c2 = BEZIER(S0)([[2.42, 1.63,0], [2.68, 1.43,1.5], [3.18, 1.37,1.5], [3.52, 1.7,0]]);
var c3 = BEZIER(S0)([[2.2, 2.13,0], [2.75, 1.88,0], [3.19, 1.9,0], [3.71, 2.23,0]]);


var out = MAP(BEZIER(S1)([c0,c1,c2,c3]))(domain);



var c0p = BEZIER(S0)([[3.2, 3.08,0-lrosa], [1.4, 4,0.7-lrosa-0.1], [4.4, 4,0.7-lrosa-0.1], [4.45, 3.21,0-lrosa]]);
var c1p = BEZIER(S0)([[1.73, 2.66,0-lrosa], [2.88, 2.49,1.5-lrosa], [3.74, 2.67,1.5-lrosa], [4.18, 2.77,0-lrosa]]);
var c2p = BEZIER(S0)([[2.42, 1.63,0-lrosa], [2.68, 1.43,1.5-lrosa], [3.18, 1.37,1.5-lrosa], [3.52, 1.7,0-lrosa]]);
var c3p = BEZIER(S0)([[2.2, 2.13,0-lrosa], [2.75, 1.88,0-lrosa], [3.19, 1.9,0-lrosa], [3.71, 2.23,0-lrosa]]);



var outp = MAP(BEZIER(S1)([c0p,c1p,c2p,c3p]))(domain);


var lat0 = MAP(BEZIER(S1)([c0,c0p]))(domain2);

var tot = STRUCT([lat0, out, outp])






var tot1 = ROTATE([1,2])(PI)(tot);
tot1 = ROTATE([0,1])(PI/2.2)(tot1);
tot1 = ROTATE([0,2])(PI/3.5)(tot1);
tot1 = T([0,2])([1.32,2.5])(tot1);



tot2= STRUCT ([tot,tot1])
//tot2 = ROTATE([0,2])(-PI/5)(tot2);
tot2 = T([0,1,2])([-2,-2,-2])(tot2);
tot2 = R([1,2])(-PI/4)(tot2)
tot2 = R([0,2])(-PI/4)(tot2)

tot2= COLOR([0,0.2,1,1])(tot2)






//PETALI ESTERNI


var lrosaf = 0.25;

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(50)]);
var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);

var c0 = BEZIER(S0)([[0.06, 3.4,-1], [0.28, 3.94,-0.8], [0.97, 2.36,-1.1], [2.12, 2.56,-1.1]]);

var c1 = BEZIER(S0)([[0.18, 4.15,-2], [0.87, 4.52,0.8], [1.44, 2.9,-1.1], [2.43, 2.94,-0.5]]);

var c2 = BEZIER(S0)([[0.4, 4.71,-1], [1.22, 4.85,0.8], [1.96, 3.36,-1.1], [2.62, 3.11,-0.5]]);

var c3 = BEZIER(S0)([[1.2, 4.87,-1], [2.04, 4.64,-0.8], [2.73, 3.4,-1.1], [2.77, 3.27,-0.5]]);

var out = MAP(BEZIER(S1)([c0,c1,c2,c3]))(domain);




var c0p = BEZIER(S0)([[0.06, 3.4,-1-0.01], [0.28, 3.94,-0.8-lrosaf], [0.97, 2.36,-1.1-lrosaf], [2.12, 2.56,-1.1-0.03]]);

var c1p = BEZIER(S0)([[0.18, 4.15,-2-0.01], [0.87, 4.52,0.8-lrosaf], [1.44, 2.9,-1.1-lrosaf], [2.43, 2.94,-0.5-0.03]]);

var c2p = BEZIER(S0)([[0.4, 4.71,-1-0.01], [1.22, 4.85,0.8-lrosaf], [1.96, 3.36,-1.1-lrosaf], [2.62, 3.11,-0.5-0.03]]);

var c3p = BEZIER(S0)([[1.2, 4.87,-1-0.01], [2.04, 4.64,-0.8-lrosaf], [2.73, 3.4,-1.1-lrosaf], [2.77, 3.27,-0.5-0.03]]);

var outp = MAP(BEZIER(S1)([c0p,c1p,c2p,c3p]))(domain);



var lateral0 = BEZIER(S1)([c0,c0p]);
var lateral3 = BEZIER(S1)([c3,c3p]);


var fuse0 = MAP(lateral0)(domain2);
var fuse3 = MAP(lateral3)(domain2);


var tot = STRUCT([fuse0,fuse3, out, outp])



var tot1 = ROTATE([1,2])(PI/2)(tot);
tot1 = ROTATE([0,2])(-PI/2)(tot);
tot1 = T([0,1,2])([0.9,-3,-3])(tot1);

tot1=SCALE([0,1,2])([0.85,1.4,0.9])(tot1);

tot1 = ROTATE([1,2])(PI/6)(tot1);
tot1 = ROTATE([0,1])(PI/9)(tot1);
tot1 = ROTATE([0,1])(-PI/3)(tot1);

//secondo Petalo-------------------

tot2 = ROTATE([1,2])(PI/3)(tot1);
tot2 = T([0,1,2])([0.1,-0.8,0.8])(tot2);


//terzo //petalo------------------------


var lrosaf = 0.25;

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(50)]);
var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);

var c0a = BEZIER(S0)([[0.06, 3.4,-1], [0.28, 3.94,-0.8], [0.97, 2.36,-1.1], [2.12, 2.56,2]]);

var c1a = BEZIER(S0)([[0.18, 4.15,-2], [0.87, 4.52,0.8], [1.44, 2.9,-1.1], [2.43, 2.94,0.5]]);

var c2a = BEZIER(S0)([[0.4, 4.71,-1], [1.22, 4.85,0.8], [1.96, 3.36,-1.1], [2.62, 3.11,0.5]]);

var c3a = BEZIER(S0)([[1.2, 4.87,-1], [2.04, 4.64,-0.8], [2.73, 3.4,-1.1], [2.77, 3.27,0.5]]);

var outa = MAP(BEZIER(S1)([c0a,c1a,c2a,c3a]))(domain);




var c0pa = BEZIER(S0)([[0.06, 3.4,-1-0.01], [0.28, 3.94,-0.8-lrosaf], [0.97, 2.36,-1.1-lrosaf], [2.12, 2.56,2-0.03]]);

var c1pa = BEZIER(S0)([[0.18, 4.15,-2-0.01], [0.87, 4.52,0.8-lrosaf], [1.44, 2.9,-1.1-lrosaf], [2.43, 2.94,0.5-0.03]]);

var c2pa = BEZIER(S0)([[0.4, 4.71,-1-0.01], [1.22, 4.85,0.8-lrosaf], [1.96, 3.36,-1.1-lrosaf], [2.62, 3.11,0.5-0.03]]);

var c3pa = BEZIER(S0)([[1.2, 4.87,-1-0.01], [2.04, 4.64,-0.8-lrosaf], [2.73, 3.4,-1.1-lrosaf], [2.77, 3.27,0.5-0.03]]);

var outpa = MAP(BEZIER(S1)([c0pa,c1pa,c2pa,c3pa]))(domain);



var lateral0a = BEZIER(S1)([c0a,c0pa]);
var lateral3a = BEZIER(S1)([c3a,c3pa]);


var fuse0a = MAP(lateral0a)(domain2);
var fuse3a = MAP(lateral3a)(domain2);


var tota = STRUCT([fuse0a,fuse3a, outa, outpa])



var tot1a = ROTATE([1,2])(PI/2)(tota);
tot1a = ROTATE([0,2])(-PI/2)(tota);
tot1a = T([0,1,2])([0.9,-3,-3])(tot1a);

tot1a=SCALE([0,1,2])([0.85,1.4,0.9])(tot1a);

tot1a = ROTATE([1,2])(PI/6)(tot1a);
tot1a = ROTATE([0,1])(PI/9)(tot1a);
tot1a = ROTATE([0,1])(-PI/3)(tot1a);


tot2a = ROTATE([1,2])(PI/3)(tot1a);
tot2a = T([0,1,2])([0.1,-0.8,0.8])(tot2a);

tot3a = ROTATE([0,1])(PI*1.1)(tot2a)
tot3a = ROTATE([1,2])(-PI/9)(tot3a);
tot3a = ROTATE([1,2])(PI/3)(tot3a);
tot3a = ROTATE([1,2])(-PI/3)(tot3a);
tot3a= ROTATE([1,2])(-PI/3)(tot3a);
tot3a = ROTATE([0,2])(PI/3)(tot3a);
tot3a = ROTATE([0,1])(-PI/3)(tot3a);
tot3a = ROTATE([1,2])(PI/9)(tot3a);

tot3a = T([0,1,2])([1.2,-1,-1])(tot3a);
tot3a = ROTATE([1,2])(PI/9)(tot3a);




tot20= STRUCT ([tot1,tot2,tot3a])

tot20a=ROTATE([1,2])(PI)(tot20);

tot20a = T([0,1,2])([-1,-1,-1])(tot20a);

tot20a=ROTATE([0,1])(-PI/17)(tot20);

tot20a=ROTATE([1,2])(-PI/4)(tot20);


tot20b= STRUCT ([tot20,tot20a])



tot20n= ROTATE([1,2])(PI/2)(tot20b); 



tot20q= STRUCT ([tot20b,tot20n])

tot20q= COLOR([0,0,1,1])(tot20q)

//DRAW(tot20q);

//--------------------------------------------------



var lrosa = 0.03;

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);



var c0 = BEZIER(S0)([[3.19, 5.95,-0.8], [3.98, 5.87,0], [2.19, 4.34,0], [2.32, 4.07,0]]);
var c1 = BEZIER(S0)([[3.19, 5.95,-0.8], [3.98, 5.87,0], [2.19, 4.34,0], [2.32, 4.07,0]]);
var c2 = BEZIER(S0)([[3.19, 5.95,-0.8], [3.98, 5.87,0], [3.53, 4.61,0], [3.58, 3.64,0]]);



var out = MAP(BEZIER(S1)([c0,c1,c2]))(domain);


var c0p = BEZIER(S0)([[3.19, 5.95,-0.8-lrosa], [3.98, 5.87,0-lrosa], [2.19, 4.34,0-lrosa], [2.32, 4.07,0-lrosa]]);
var c1p = BEZIER(S0)([[3.19, 5.95,-0.8-lrosa], [3.98, 5.87,0-lrosa], [2.19, 4.34,0-lrosa], [2.32, 4.07,0-lrosa]]);
var c2p = BEZIER(S0)([[3.19, 5.95,-0.8-lrosa], [3.98, 5.87,0-lrosa], [3.53, 4.61,0-lrosa], [3.58, 3.64,0-lrosa]]);


var outp = MAP(BEZIER(S1)([c0p,c1p,c2p]))(domain);


var lat0 = MAP(BEZIER(S1)([c0,c0p]))(domain2);

var lat1 = MAP(BEZIER(S1)([c1,c1p]))(domain2);

var lat2 = MAP(BEZIER(S1)([c2,c2p]))(domain2);


var tot = STRUCT([lat0,lat1,lat2, out, outp])

tot = T([0,1,2])([-5,-5,0])(tot);

tot = R([0,2])([PI/2])(tot);

tot = R([1,2])([PI/3])(tot);

tot=SCALE([0,1,2])([1.5,1.5,2])(tot)

tot = R([0,2])([PI/14])(tot);

tot = T([0,1,2])([1.25,4.25,-0.45])(tot);
tot= COLOR([0,1,0,1])(tot)







//tavolo------------------------------------



var lrosa = 0.5;

var domain = PROD1x1([INTERVALS(1)(50),INTERVALS(1)(50)]);
var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);



var c0 = BEZIER(S0)([[1, 3.45, -1], [0.58, 2.28,-4], [3.08, 4.14,-2], [5.46, 2.72,1]]);
var c1 = BEZIER(S0)([[1, 3.45, -1], [0.58, 2.28,2], [3.07, 2.64,2], [5.46, 2.72,1]]);
var c2 = BEZIER(S0)([[1, 3.45, -1], [0.32, 2.31,2], [2.02, 0.9,2], [5.46, 2.72,1]]);



var out = MAP(BEZIER(S1)([c0,c1,c2]))(domain);





var c0p = BEZIER(S0)([[1, 3.45, -1], [0.58, 2.28,-4-lrosa], [3.08, 4.14,-2-lrosa], [5.46, 2.72,1]])
var c1p = BEZIER(S0)([[1, 3.45, -1], [0.58, 2.28,2-lrosa], [3.07, 2.64,2-lrosa], [5.46, 2.72,1]]);
var c2p = BEZIER(S0)([[1, 3.45, -1], [0.32, 2.31,2-lrosa], [2.02, 0.9,2-lrosa], [5.46, 2.72,1]]);


var outp = MAP(BEZIER(S1)([c0p,c1p,c2p]))(domain);


var lat0 = MAP(BEZIER(S1)([c0,c0p]))(domain2);


var lat1 = MAP(BEZIER(S1)([c0,c1p]))(domain2);


var lat2 = MAP(BEZIER(S1)([c2p,c2]))(domain2);


var tot = STRUCT([lat0,lat2, out, outp])
tot= COLOR([0,0,1,1])(tot)



tot = T([0,1,2])([-2,-2,3])(tot);


tot= ROTATE([1,0])(-PI/2)(tot);

tot = T([0,1,2])([-7,3,-2])(tot);
tot= ROTATE([1,2])(PI)(tot);

tot= ROTATE([1,0])(-PI/2)(tot);
tot = T([0,1,2])([3,-4.7,0])(tot);
tot=SCALE([0,1,2])([0.2,0.2,0.2])(tot)

tot = T([0,1,2])([0.5,0,0.5])(tot);

tot2= T([0,1,2])([1,0,0.7])(tot);

tot3= T([0,1,2])([0,0.7,-1])(tot);

tot3= ROTATE([1,2])(PI/3)(tot3);

tot1 = STRUCT([tot,tot2,tot3])

a=CUBOID([4,0.2,3])

a= COLOR([65/255,250/255,207/255,0.2])(a)


fin=STRUCT([tot1,a])

fin= ROTATE([1,0])(-PI/2)(fin);

fin=SCALE([0,1,2])([2.3,2.3,2.3])(fin)

fin = T([0,1,2])([-2.5,4,-2.5])(fin);

model=STRUCT([tot2,tot20q,tot,fin,tot0])

//DRAW(model)
















