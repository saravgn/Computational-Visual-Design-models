var matrixPointsZ = {};




function DTM(ascissa,ordinata,collina,montagna,slices,verticivert) {



	var xbaselago= (ascissa/4);
	var ybaselago= (ordinata/4);

	var xbasecolle = (ascissa*(3/4));
	var ybasecolle = (ordinata*(3/4));

	var domainDTM = PROD1x1([INTERVALS(1)(50),INTERVALS(1)(50)])
	var bezierTotale = new Array();
	var lasti=0;
	for (var i=0; i<=ascissa; i=i+(ascissa/slices)) {

		if (i===0 || i===ascissa) {
			bezierTotale.push(BEZIER(S0)([[i,0,0],[i,ordinata,0]]));
		}

		else {

			var controlPointsArray = new Array();

			var lastJ = 0;
			for (var j=0; j<=ordinata; j=j+(ordinata/verticivert)) {

				if (j===0 || j===ordinata) {
					controlPointsArray.push([i,j,0]);
					matrixPointsZ[createKey(i, j)] = 0;
				}

				else {

					if (i < xbaselago&& j < ybaselago) {
						controlPointsArray.push([i,j,0]);
						matrixPointsZ[createKey(i, j)] = 0;
					}

					else if (i < xbasecolle && j < ybasecolle) {
						var z = randomHill(collina);
						controlPointsArray.push([i,j,z]);
						matrixPointsZ[createKey(i, j)] = z;
					}

					else {
						var z = randomMountain(montagna)
						controlPointsArray.push([i,j,z]);
						matrixPointsZ[createKey(i, j)] = z;
					}
				}

				lastJ += j;
			}

			if (lastJ !== ordinata) {
				controlPointsArray.push([i,ordinata,0]);
				matrixPointsZ[createKey(i, ordinata)] = 0;
			}

			bezierTotale.push(BEZIER(S0)(controlPointsArray));

		}
		lasti+=i;
	}

	if (lasti !== ascissa) {
		bezierTotale.push(BEZIER(S0)([[ascissa,0,0],[ascissa,ordinata,0]]));
	}

	color = [(210/255), (105/255), (30/255)];


//a=STRUCT([modelMontagna, modelMontagna1])


//agglomeratotraslato=T([0,1,2])([ xbaselago+4,ybaselago+3.5,collina/1.9])(agglomerato())

//agglomeratotraslato=T([0,1,2])([ -6-xbaselago,ybaselago+8,collina/1.9])(agglomerato())
//agglomeratotraslato=T([0,1,2])([0,0,0])(agglomerato())

//DRAW(agglomeratotraslato)
	return COLOR(color)(MAP(BEZIER(S1)(bezierTotale))(domainDTM));

}

function randomHill(collina) {
	return Math.random()*collina;
}

function randomMountain(montagna) {
	var rand = Math.random();
	if (rand > 0.5)
		return rand*montagna;
	return -(rand*montagna);
}

function createKey(ascissa, ordinata) {
	return (ascissa+"_"+ordinata);
}

function coordinateDaChiave(str) {
	var keys = new Array();
	keys.push(str.split("_"));
	return keys;
}

function getZonePoints(x, y, xTresholdHill, yTresholdHill, xTresholdMountain, yTresholdMountain, area) {
	var points = new Array();
	for (key in matrixPointsZ) {
		xy = coordinateDaChiave(key);
		x_coo = xy[0][0];
		y_coo = xy[0][1];
		z_coo = matrixPointsZ[key];
		var p = new Array();
		p.push(x_coo);
		p.push(y_coo);
		p.push(z_coo);
		if (area === 0) {
			if (x_coo < xTresholdHill && y_coo < yTresholdHill)
				points.push(p);
		}
		else if (area === 1) {
			if (x_coo < xTresholdMountain && y_coo < yTresholdMountain && x_coo >= xTresholdHill && y_coo >= yTresholdHill)
				points.push(p);
		}
		else if (area === 2) {
			if (x_coo >= xTresholdMountain && y_coo >= yTresholdMountain)
				points.push(p);
		}
	}

	return points;
}

function getRandomPointIndexFromZone(zone) {
	return Math.floor(Math.random()*zone.length);
}




//-------------------------------------main


modelMontagna=DTM(30,20,10,25,100,100)


//T([0,1,2])([-5,-5,0])(tot);

//ROTATE([0,1])(PI/2)(tot);


modelMontagna1=ROTATE([0,1])(PI/2)(modelMontagna)

a=STRUCT([modelMontagna, modelMontagna1])

DRAW(a)





//-----lago---------------------------------------------------------------



var lago = CUBOID([49.7,33,1]);
lago=T([0,1,2])([-19.93,-3.45,-0.03])(lago);
DRAW(COLOR([(171/255), (205/255), (239/255),(0.85)])(lago))





//-albero----------------------------------------------------------------------


function albero(raggio1,h,discr) {



var raggio = 0.5;

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var domain2 = DOMAIN([[0,1],[0,1]])([discr-10,discr]);



var c0 = BEZIER(S0)([[0.09, 1.86,-0.2], [0.76, 3.54,0], [1.54, 5.33,0], [1.7, 5.85,0.4]]);
var c1 = BEZIER(S0)([[1.08, 1.53,2], [0.76, 3.54,1], [1.54, 5.33,0], [1.7, 5.85,0.4]]);
var c2 = BEZIER(S0)([[2.34, 1.53,2], [2.01, 3.36,1], [1.54, 5.33,0], [1.7, 5.85,0.4]]);
var c3 = BEZIER(S0)([[3.32, 1.85,-0.2], [2.73, 3.55,0], [1.93, 5.23,0], [1.7, 5.85,0.4]]);



var out = MAP(BEZIER(S1)([c0,c1,c2,c3]))(domain);


var c0p = BEZIER(S0)([[0.09, 1.86,0.2-raggio], [0.76, 3.54,0-raggio], [1.54, 5.33,0-raggio], [1.7, 5.85,0.4]]);
var c1p = BEZIER(S0)([[1.08, 1.53,-2-raggio], [0.76, 3.54,-1-raggio], [1.54, 5.33,0-raggio], [1.7, 5.85,0.4]]);
var c2p = BEZIER(S0)([[2.34, 1.53,-2-raggio], [2.01, 3.36,-1-raggio], [1.54, 5.33,0-raggio], [1.7, 5.85,0.4]]);
var c3p = BEZIER(S0)([[3.32, 1.85,0.2-raggio], [2.73, 3.55,0-raggio], [1.93, 5.23,0-raggio], [1.7, 5.85,0.4]]);



var outp = MAP(BEZIER(S1)([c0p,c1p,c2p,c3p]))(domain);





var lat0 = MAP(BEZIER(S1)([c0,c0p]))(domain2);


var lat3 = MAP(BEZIER(S1)([c3,c3p]))(domain2);


var tot = STRUCT([lat0,lat3 ,out, outp])


chioma= COLOR([(60/255),(179/255),(113/255)])(tot)




//base chioma--------------------------------------------------




var raggio = 0.5;

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);


var a=BEZIER(S0)([[0.09, 1.86,-0.2], [1.08, 1.53,2], [2.34, 1.53,2], [3.32, 1.85,-0.2]]);
var a1=BEZIER(S0)([[0.09, 1.86,-0.2], [1.06, 1.50,2], [2.32, 1.50,2], [3.30, 1.85,-0.2]]);


var out = MAP(BEZIER(S1)([a,a1]))(domain);

var ap=BEZIER(S0)([[0.09, 1.86,0.2-raggio], [1.08, 1.53,-2-raggio], [2.34, 1.53,-2-raggio], [3.32, 1.85,0.2-raggio]]);
var a1p=BEZIER(S0)([[0.09, 1.86,0.2-raggio], [1.06, 1.50,-2-raggio], [2.32, 1.50,-2-raggio], [3.30, 1.85,0.2-raggio]]);


var outp = MAP(BEZIER(S1)([ap,a1p]))(domain);


var lat0 = MAP(BEZIER(S1)([a1,a1p]))(domain2);


var lat3 = MAP(BEZIER(S1)([a,ap]))(domain2);


var tot = STRUCT([lat3,out, outp])


basechioma= COLOR([(60/255),(179/255),(113/255)])(tot)


chiomafinale=STRUCT([basechioma,chioma])




//-----------------------------------tronco



var raggio = 0.5;

var domain = PROD1x1([INTERVALS(1)(8),INTERVALS(1)(8)]);
var domain2 = DOMAIN([[0,1],[0,1]])([10,20]);

//c=Math.random()*3

c=0.1

var c0 = BEZIER(S0)([[2.81, 1.72,-0.2], [2.52, 5.93,-0.2], [2.34, 2.78,-0.2], [2.62, 5.48+h,-0.2]]);
var c1 = BEZIER(S0)([[3.16, 1.65, c], [2.89, 4.5,c], [3.12, 2.84,-0.1], [2.84, 5.49+h,c+c]]);
var c2 = BEZIER(S0)([[3.2, 1.66,-0.2], [3.34, 4.11,-0.2], [3.47, 1.03,-0.2], [3.22, 5.42+h,-0.2]]);


var out = MAP(BEZIER(S1)([c0,c1,c2]))(domain);

//DRAW(out)




//var out = MAP(BEZIER(S1)([c0,c1,c2]))(domain);

//DRAW(out)

var c0p = BEZIER(S0)([[2.81, 1.72,0.2-raggio], [2.52, 5.93,0.2-raggio], [2.34, 2.78,0.2-raggio], [2.62, 5.48+h,0.2-raggio]]);
var c1p = BEZIER(S0)([[3.16, 1.65,-c-raggio], [2.89, 4.5,-c-raggio], [3.12, 2.84,0.1-raggio], [2.84, 5.49+h,-c-c-raggio]]);
var c2p = BEZIER(S0)([[3.2, 1.66,0.2-raggio], [3.34, 4.11,0.2-raggio], [3.47, 1.03,0.2-raggio], [3.22, 5.42+h,0.2-raggio]]);


var outp = MAP(BEZIER(S1)([c0p,c1p,c2p]))(domain);


var lat0 = MAP(BEZIER(S1)([c0,c0p]))(domain2);


var lat3 = MAP(BEZIER(S1)([c2,c2p]))(domain2);


var tot = STRUCT([lat3,lat0, out, outp])


tronco= COLOR([(101/255),(67/255),(33/255)])(tot)



//base tronco--------------------------------------------------




var raggio = 0.5;

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);

c=0.1



var b=BEZIER(S0)([[2.62, 5.48+h,-0.2], [2.84, 5.49+h,c+c], [3.22, 5.42+h,-0.2]]);
var b1=BEZIER(S0)([[2.62, 5.48+h,-0.2], [2.82, 5.47+h,c+c], [3.20, 5.40+h,-0.2]]);



var out = MAP(BEZIER(S1)([b,b1]))(domain);


var bp=BEZIER(S0)([[2.62, 5.48+h,0.2-raggio], [2.84, 5.49+h,-c-c-raggio], [3.22, 5.42+h,0.2-raggio]]);
var b1p=BEZIER(S0)([[2.62, 5.48+h,0.2-raggio], [2.82, 5.47+h,-c-c-raggio], [3.20, 5.40+h,0.2-raggio]]);


var outp = MAP(BEZIER(S1)([b,bp]))(domain);


var lat0 = MAP(BEZIER(S1)([b1,b1p]))(domain2);

var tot = STRUCT([lat0,out, outp])


basetronco= COLOR([(60/255),(179/255),(113/255)])(tot)



fin=STRUCT([basetronco,tronco])
fin=ROTATE([1,2])(PI)(fin);
fin=T([0,1,2])([-2.3,3.5,-0.3])(fin);
fin=SCALE([0,2])([2.5,2.5])(fin);


finale=STRUCT([fin,chiomafinale])
finale=SCALE([0,1,2])([(raggio1)/4,(raggio1)/4,(raggio1)/4])(finale)


finale=R([1,2])([PI/2])(finale)

return(finale)

}

//------------------------------------------------------------------------




var zonePoints = getZonePoints(30,20,(30/4),(20/4),(30*(3/4)),(20*(3/4)), 1);

var n_alberi = 30;
for (var n=0; n<n_alberi ; n++) {
	var pointIndex = getRandomPointIndexFromZone(zonePoints);
	var point = zonePoints[pointIndex];
	

alberobello=T([0,1,2])([point[0], point[1], 5])(albero(1,0,30))


	DRAW(alberobello)
	zonePoints.splice(pointIndex, 1);
}
