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





modelMontagna=DTM(30,20,10,25,100,100)


//T([0,1,2])([-5,-5,0])(tot);

//ROTATE([0,1])(PI/2)(tot);




modelMontagna1=ROTATE([0,1])(PI/2)(modelMontagna)





a=STRUCT([modelMontagna, modelMontagna1])

DRAW(a)


//---------------------------------------------------------------------------------------------



var lago = CUBOID([49.7,33,1]);
lago=T([0,1,2])([-19.93,-3.45,-0.03])(lago);
DRAW(COLOR([(171/255), (205/255), (239/255),(0.85)])(lago))















