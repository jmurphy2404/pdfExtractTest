var pdfUtil = require('pdf-to-text');
var pdf_path = ("./pdf9.pdf");
var keywords = ['brand partnership',
'advertising',
'sales',
'client relationship',
'agency relationship',
'advertiser',
'pipeline',
'revenue',
'goal',
'RFP',
'selling',
'client',
'digital media',
'quota',
'branding',
'content marketing',
'online media',
'programmatic',
'solution selling']

const results = [];


pdfUtil.info(pdf_path, function(err, info){
	if(info.tagged == "yes"){
		pdfUtil.pdfToText(pdf_path, function(err, data) {
		  if (err) throw(err);
		  //split data on spaces to get individual words
		  var splitData = data.split(' ');
		  

		  //loop through keywords comparing to split resume
		  for(let i=0; i < keywords.length; i++){
		  	for(let j=0; j < splitData.length; j++){
		  		console.log(keywords[i]);
		  		console.log(splitData[j]);

		  		//if keyword is found, push it into results
		  		if (keywords[i] == splitData[j]){
		  			results.push(keywords[i]);
		  		} 
		  	}
		  }

		  //eliminate duplicates in results
		  for(let k=0; k<results.length; k++){
		  	for(let l=1; l<results.length-1; l++)
		  	if (results[k] == results[l]){
		  		results.splice(l, 1)
		  	}
		  }

		  console.log(results);
		});
	} else {
		console.log("manual review");
	}
});