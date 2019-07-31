var pdfUtil = require('pdf-to-text');
var pdf_options = ["./pdf01.pdf", "./pdf05.pdf", "./pdf06.pdf", "./pdf07.pdf", "./pdf08.pdf", "./pdf09.pdf", "./pdf10.pdf"];
// var keywords = ['brand partnership',
// 'advertising',
// 'sales',
// 'client relationship',
// 'agency relationship',
// 'advertiser',
// 'pipeline',
// 'revenue',
// 'goal',
// 'RFP',
// 'selling',
// 'client',
// 'digital media',
// 'quota',
// 'branding',
// 'content marketing',
// 'online media',
// 'programmatic',]
var keywords = ['adam compagnone']


let pdf_path = "./pdf05.pdf"

	pdfUtil.info(pdf_path, function(err, info){
		// console.log(info)
		if(info.tagged == "yes"){
			pdfUtil.pdfToText(pdf_path, function(err, data) {
			  let results = [];
			  if (err) throw(err);
			  //split data on spaces to get individual words
			  let newData = data.replace(/\n|\r/g, " ");
			  let splitData = newData.split(' ');
			  // console.log(splitData)
			  // console.log(data)

			  //loop through keywords comparing to split resume
			  for(let i=0; i < keywords.length; i++){
			  	let splitKeywords = keywords[i].split(' ')
			  	// console.log(splitKeywords.length)
			  	for(let j=0; j < splitData.length; j++){
			  		// console.log(keywords[i]);
			  		// console.log(splitData[j]);
			  		// let splitKeywords = keywords[i].split(' ')
			  		// console.log(splitKeywords.length)
			  		if(splitKeywords.length > 1 && j < splitData.length-1){
			  			if(splitKeywords[0].toLowerCase() == splitData[j].toLowerCase() && splitKeywords[1].toLowerCase() == splitData[j+1].toLowerCase()){
			  				results.push(keywords[i]);
			  				// console.log("2 word keyword")
			  				// console.log(splitKeywords)
			  				// console.log(splitData[j])
			  			}
			  		}
			  		//if keyword is found, push it into results
			  		if (keywords[i].toLowerCase() == splitData[j].toLowerCase()){
			  			results.push(keywords[i]);
			  		}
			  	}
			  }

			  //eliminate duplicates in results
				  // for(let k=0; k<results.length; k++){
				  // 	for(let l=1; l<results.length; l++)
				  // 	if (results[k] == results[l]){
				  // 		console.log(results[k])
				  // 		console.log(results[l])
				  // 		results.splice(l, 1)
				  // 	}
				  // }
			  let newSet = new Set(results)
			  let final = [...newSet]
			  console.log(final);
			});
		} else {
			console.log("manual review");
		}
	});
