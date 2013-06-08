

FV = [[5,6,7,8],
[0,5,8],
[0,4,5],
[1,2,4,5],
[2,3,5,6],
[0,8,7], [3,6,7], [1,2,3], [0,1,4]
]


//matrice v
V = [[0,6],
[0,0],
[3,0],
[6,0],
[0,3],
[3,3],
[6,3],
[6,6],
[3,6]]

var x = [V,FV]
var obj = lar_to_obj(larModel);



//---------------------------------

function Objlar(x){

//inizializzare le variabili
	var V = x[0];
	var FV = larModel[1];
	var vertices = V.length;
// istanziare le faces
	var faces = FV.length;
	var objResult = "";
	for (var i = 0; i < vertices; i++){
		objResult = objResult + "V ";
		if (V[i][2] !== undefined)
			objResult = objResult + V[i][0]+" "+V[i][1]+" "+V[i][2];
		else
			objResult = objResult + V[i][0]+" "+V[i][1]+" 0"; 
		objResult+="\n";
	}


//inizio ciclo for
	objResult+="\n";
	for (var i = 0; i < faces; i++){
		objResult = objResult + "F ";
		for (var j = 0; j < FV[i].length; j++) {
			objResult = objResult + FV[i][j] + " ";
		};
		objResult+="\n";
	}

//restituisce l'oggetto desiderato
	return objResult;
}


