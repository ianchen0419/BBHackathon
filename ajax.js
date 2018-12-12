function send(th, e){
	e.preventDefault();


	var checkedBox=myForm.querySelectorAll('input[type="checkbox"]:checked');
	var checkedCount=checkedBox.length.toString();

	var checkedArr=[];

	for(i=0;i<checkedBox.length;i++){
		var innerobj={tag: checkedBox[i].name};
		checkedArr.push(innerobj);

	}

	var checkedJSON={
		iary_cnt: checkedCount,
		iary: checkedArr
	}

	console.log(checkedJSON);

	var xmlhttp=new XMLHttpRequest();
	/*test.php請換成後端接收的檔案*/

	xmlhttp.open('POST', 'http://9.102.60.125:5000/api/bbinqcan', true);
	
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.onreadystatechange=function(){

		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			// console.log(xmlhttp.responseText);
			// console.log(checkCount);
			res.textContent=xmlhttp.responseText;

		}
	};

	xmlhttp.send(
		// JSON.stringify({
		// 	"eqpt_id": "EQP11"
		// })

		// JSON.stringify(
		// 	{
		// 		iary_cnt: checkedCount,
		// 		iary: arr
		// 	}
		// )

		JSON.stringify(checkedJSON)

		
	)

}

