function aux (cc) {
	let result = ''

	for (let i=0; i<(cc.length-4); i++) {
			
		result = result + '#'
	}

	return result
}




function maskify (cc) {
	let hid = ''

    vis  = cc.substring(cc.length - 4)
    console.log(vis)
    if (cc.length<=4){

    		return cc
	} else{

		 for (let i=0; i<(cc.length-4)  ; i++) {
		 pass = cc[i]  
		 pass = pass.replace(pass, aux(cc))
			
		}

	return pass +  vis
	}

	
		 
	
} 
const hidden = console.log(maskify('qcxn')  )