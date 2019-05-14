var pdfUtil = require('pdf-to-text');
var pdf_path = ("./pdf4.pdf");
var keywords = ['goal', 'sales', 'revenue', 'relationships', 'growth', 'advertising', 'campaign', 'OTT', 'programmatic', 'forecasting', 'digital', 'service']

pdfUtil.pdfToText(pdf_path, function(err, data) {
  if (err) throw(err);
  //split data on spaces to get individual words
  var splitData = data.split(' ');
  var results = [];

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
  	if (results[k] == results[k+1]){
  		results.splice(k+1, 1)
  	}
  }

  console.log(results);
});