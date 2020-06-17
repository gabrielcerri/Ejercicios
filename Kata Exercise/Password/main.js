function maskify (cc) {

	 return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
	
} 
console.log(maskify('123456789')  )