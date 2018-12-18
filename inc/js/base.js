$(function(){
	$('select').select2({
		containerCssClass:'selection-theme',
	});

	function openPopup(btn,target){
		$(btn).each(function(){
			$(btn).on('click',function(){
				$('.overlay').fadeIn(200);
				$(target).fadeIn(200);
			});
		});
	}
	openPopup('.more', '.popup');

	function closePopup(btn, target) {
		$(btn).each(function(){
			$(btn).on('click',function() {
				$('.overlay').fadeOut(200);
				$(target).fadeOut(200);
			})
		});
		$('.overlay').on('click',function(){
			$(target).fadeOut(200);
			$(this).fadeOut(200);
		});
	}
	closePopup('.close', '.popup');

});


//快速選擇地圖


function mapActive(th){
	const selectedArea=document.querySelector('.select-area.active');

	selectedArea.classList.remove('active');
	th.classList.add('active');

	areaText.textContent=th.dataset.text;
}

//議題至多5個
function maxIssue(th,evt){
	const checkedIssue=document.querySelectorAll('.checkbox-issue input:checked');
    if(checkedIssue.length>5){
    	th.checked=false;
    }
}

const trophyPathRoute='M3.84615385,7.53232523e-05 C3.5687416,-0.00374986189 3.31070664,0.138355638 3.1708556,0.371976848 C3.03100456,0.605598058 3.03100456,0.894540035 3.1708556,1.12816124 C3.31070664,1.36178245 3.5687416,1.50388795 3.84615385,1.50006277 L3.84615385,3.27983305 C3.50746577,3.11107254 3.12766754,3.00005022 2.69230769,3.00005022 C1.21447054,3.00005022 0,4.18414908 0,5.62502825 C0,6.63841226 0.677835308,7.42642392 1.48137015,8.07276176 C2.28490508,8.7190996 3.29024708,9.26300255 4.28485577,9.72362694 C5.16673623,10.1320443 6.01814708,10.4575416 6.72175462,10.7094584 C7.65524,11.9440269 8.46153846,12.7499686 8.46153846,12.7499686 L10,12.7499686 L11.5384615,12.7499686 C11.5384615,12.7499686 12.34476,11.9440269 13.2782454,10.7094584 C13.9818531,10.4575416 14.8332638,10.1320443 15.7151446,9.72362694 C16.7097531,9.26300255 17.7150946,8.7190996 18.51863,8.07276176 C19.3221646,7.42642392 20,6.63841226 20,5.62502825 C20,4.18414908 18.7855292,3.00005022 17.3076923,3.00005022 C16.8723323,3.00005022 16.4925346,3.11107254 16.1538462,3.27983305 L16.1538462,1.50006277 C16.4312584,1.50388795 16.6892934,1.36178245 16.8291444,1.12816124 C16.9689954,0.894540035 16.9689954,0.605598058 16.8291444,0.371976848 C16.6892934,0.138355638 16.4312584,-0.00374986189 16.1538462,7.53232523e-05 L3.84615385,7.53232523e-05 Z M2.69230769,4.50003766 C3.24358977,4.50003766 3.71653438,4.97116092 4.08954323,5.61770381 C4.09584408,5.62862522 4.09988162,5.63900063 4.10606969,5.64993029 C4.36180892,6.65382839 4.78235654,7.62463301 5.27193508,8.50928136 C5.16145831,8.46024602 5.05663277,8.42139859 4.94591346,8.37012227 C4.01744523,7.94012912 3.09971031,7.4293534 2.46093754,6.9155447 C1.82216469,6.401736 1.53846154,5.92413324 1.53846154,5.62502825 C1.53846154,4.99442475 2.04552946,4.50003766 2.69230769,4.50003766 Z M17.3076923,4.50003766 C17.9544708,4.50003766 18.4615385,4.99442475 18.4615385,5.62502825 C18.4615385,5.92413324 18.1778354,6.401736 17.5390623,6.9155447 C16.90029,7.4293534 15.9825546,7.94012912 15.0540862,8.37012227 C14.9433669,8.42139859 14.8385415,8.46024602 14.7280646,8.50928136 C15.2176438,7.62463301 15.6381908,6.65382839 15.89393,5.64993029 C15.9001185,5.63900063 15.9041562,5.62862522 15.9104569,5.61770381 C16.2834654,4.97116092 16.75641,4.50003766 17.3076923,4.50003766 Z M7.69230769,14.2499561 C6.84230769,14.2499561 6.15384615,14.9212004 6.15384615,15.7499435 L6.15384615,16.4999372 C5.87643391,16.496112 5.61839895,16.6382175 5.47854791,16.8718388 C5.33869686,17.10546 5.33869686,17.3944019 5.47854791,17.6280232 C5.61839895,17.8616444 5.87643391,18.0037499 6.15384615,17.9999247 L13.8461538,17.9999247 C14.1235661,18.0037499 14.381601,17.8616444 14.5214521,17.6280232 C14.6613031,17.3944019 14.6613031,17.10546 14.5214521,16.8718388 C14.381601,16.6382175 14.1235661,16.496112 13.8461538,16.4999372 L13.8461538,15.7499435 C13.8461538,14.9212004 13.1576923,14.2499561 12.3076923,14.2499561 L7.69230769,14.2499561 Z';



const george={  
		   "transaction":{  
		      "trx_id":"BBINQCAN",
		      "type_id":"O",
		      "rtn_code":"0000000",
		      "oary_cnt":"04",
		      "oary":[  
		         {  
		            "cand_name":"王芝安",
		            "party":"party-orange",
		            "platform_cnt":"06",
		            "fan_page": "https://www.facebook.com/moko.beauty.dog/",
		            "voice": '-42',
		            "oary2":[  
		               {  
		                  "platform":"推動傳統市場打造成觀光夜市。"
		               },
		               {  
		                  "platform":"爭取七星公園泡腳池。"
		               },
		               {  
		                  "platform":"爭取公立幼稚園增加招生名額，造福百姓需要。"
		               },
		               {  
		                  "platform":"爭取地熱谷溫泉煮蛋區。"
		               },
		               {  
		                  "platform":"爭取復興公園游泳池改建為新北投運動中心(含老人福利中心及日間照顧、地下停車場)。"
		               },
		               {  
		                  "platform":"爭取新北投捷運站直通象山站。(不用到北投站上下樓梯轉乘)"
		               }
		            ],
		            "tag_cnt":"03",
		            "oary3":[  
		               {  
		                  "tag":"建設",
		                  "value": 5
		               },
		               {  
		                  "tag":"育兒",
		                  "value": 3.2
		               },
		               {  
		                  "tag":"觀光",
		                  "value": 2.4
		               },
		               {  
		                  "tag":"寵物",
		                  "value": 4.5
		               },
		               {  
		                  "tag":"產業",
		                  "value": 1.2
		               }
		            ]
		         },
		         {  
		            "cand_name":"陳建銘",
		            "party":"party-blue",
		            "platform_cnt":"10",
		            "fan_page": "https://www.facebook.com/moko.beauty.dog/",
		            "voice": '-2',
		            "oary2":[  
		               {  
		                  "platform":"「加油站」遠離「住宅區」及「故宮博物館歷史觀光區」, 並實現「大故宮綠色休閒觀光歷史文化區計畫」"
		               },
		               {  
		                  "platform":"保護校園—不讓毒品、黑道介入, 讓學童享有安全學習教育區"
		               },
		               {  
		                  "platform":"建立台北市「藍色公路」網並媲美「歐洲」如荷蘭自行車全市走道網狀區"
		               },
		               {  
		                  "platform":"強力監督各級政府清廉執政, 以防止一切弊案發生, 如有弊案發生, 將不畏權勢, 強力揭發"
		               },
		               {  
		                  "platform":"成立「婦幼保護中心」以防止家暴、性侵等發生"
		               },
		               {  
		                  "platform":"成立「榮民安養就醫」服務諮詢中心"
		               },
		               {  
		                  "platform":"矢志慈心濟弱, 人間菩薩行"
		               },
		               {  
		                  "platform":"積極督促市府推動「老人安養各項福利及設施」, 以應付台灣高齡化之趨勢"
		               },
		               {  
		                  "platform":"繼續推動「關渡平原」開發, 使北投、士林成為現代化「環保」「人文」「綠色科技」及「水岸」之國際城市"
		               },
		               {  
		                  "platform":"繼續整治「淡水河」、「基隆河」流域, 並嚴查廢土倒棄河內, 以保護自然生態, 尊重生命"
		               }
		            ],
		            "tag_cnt":"04",
		            "oary3":[  
		               {  
		                  "tag":"建設",
		                  "value": 1
		               },
		               {  
		                  "tag":"環保",
		                  "value": 3
		               },
		               {  
		                  "tag":"觀光",
		                  "value": 4
		               },
		               {  
		                  "tag":"長照",
		                  "value": 5
		               },
		               {  
		                  "tag":"育兒",
		                  "value": 2
		               }
		            ]
		         },
		         {  
		            "cand_name":"李美津",
		            "party":"party-none",
		            "platform_cnt":"18",
		            "fan_page": "javascript:;",
		            "voice": '14',
		            "oary2":[  
		               {  
		                  "platform":"任內關心「公辦民營老人安養護中心照護不周」、「獨老送餐缺失」等問題，未來將朝健全長者照顧網絡邁進。"
		               },
		               {  
		                  "platform":"增設公幼，擴充幼兒就讀機會。"
		               },
		               {  
		                  "platform":"多方傾聽，推動教育改革，消弭升學壓力！"
		               },
		               {  
		                  "platform":"多語學習結合E化教育，學習成效最大化！"
		               },
		               {  
		                  "platform":"打造「臺北科技走廊─ ─北投士林科技園區」，成為北市接軌國際要角。"
		               },
		               {  
		                  "platform":"打造文創、藝術、觀光雲端運用平台。"
		               },
		               {  
		                  "platform":"持續推動社子島開發計畫，打造永續、安全都市環境。"
		               },
		               {  
		                  "platform":"持續要求AED建置及登錄效率。"
		               },
		               {  
		                  "platform":"推動光纖網路建設，提升寬頻上網品質。"
		               },
		               {  
		                  "platform":"推動市政服務上雲端。"
		               },
		               {  
		                  "platform":"推廣「臺北市青年職涯發展方案」，協助青年適性就業。"
		               },
		               {  
		                  "platform":"曾針對「家托人數過少，媒合不易」、「樂活補給站一市多制」提出問題，未來將持續關心各項身障者支持服務。"
		               },
		               {  
		                  "platform":"發展創業募資平台，扶植青年創業。"
		               },
		               {  
		                  "platform":"監督市府建置錄影監視系統第二期，強化犯罪偵防。"
		               },
		               {  
		                  "platform":"監督關渡水岸環境再造工程，營造優質觀光特色。"
		               },
		               {  
		                  "platform":"要求優先辦理災害應變中心資訊系統汰換，優化防災作業。"
		               },
		               {  
		                  "platform":"關心健康、食安議題，如：「一、二代市民健康卡問題多」、「市售中藥養身飲品糖分偏高」、「市售清潔用品三氯沙超標」、「擴大辦理65歲以上免費施打肺炎鏈球菌疫苗」等，未來將持續把關，讓台北市民健康再進化！"
		               },
		               {  
		                  "platform":"青年購屋不易，給予更多優惠！"
		               }
		            ],
		            "tag_cnt":"08",
		            "oary3":[  
		               {  
		                  "tag":"關懷",
		                  "value": 1
		               },
		               {  
		                  "tag":"治安",
		                  "value": 5
		               },
		               {  
		                  "tag":"產業",
		                  "value": 4
		               },
		               {  
		                  "tag":"市容",
		                  "value": 2
		               },
		               {  
		                  "tag":"育兒",
		                  "value": 1
		               }
		            ]
		         },
		         {  
		            "cand_name":"謝維洲",
		            "party":"party-green",
		            "platform_cnt":"08",
		            "fan_page": "javascript:;",
		            "voice": '44',
		            "oary2":[  
		               {  
		                  "platform":"延續謝長廷、高建智、莊瑞雄在士林北投服務處的奉獻傳統，以「維骨力」的精神，加強服務。"
		               },
		               {  
		                  "platform":"推動國中小學營養午餐的定期檢驗，落實食安管控。"
		               },
		               {  
		                  "platform":"推動士林北投(1)老舊社區更新(2)觀光產業(3)規劃士林、天母、石牌商圈，促進地方繁榮。"
		               },
		               {  
		                  "platform":"支持柯文哲擔任台北市長，改變藍綠對立的文化，提升生活品質，再創首都領導地位，恢復市民光榮感。"
		               },
		               {  
		                  "platform":"改善士林北投偏遠山區及郊外地方的交通，教育，就業環境的問題。"
		               },
		               {  
		                  "platform":"服務處提供免費法律諮詢，保障基本人權，解決民眾困難，並定期舉辦市政座談，邀請市民參與，落實公民審議精神。"
		               },
		               {  
		                  "platform":"爭取婦女就業機會，推動日照，減輕家庭負擔，鼓勵老人社會參與，解決青年就業問題。"
		               },
		               {  
		                  "platform":"督促市府盡快落實開發社子島，關渡平原的承諾。"
		               }
		            ],
		            "tag_cnt":"04",
		            "oary3":[  
		               {  
		                  "tag":"產業",
		                  "value": 3
		               },
		               {  
		                  "tag":"市容",
		                  "value": 5
		               },
		               {  
		                  "tag":"觀光",
		                  "value": 4
		               },
		               {  
		                  "tag":"食安",
		                  "value": 1
		               },
		               {  
		                  "tag":"寵物",
		                  "value": 4
		               }
		            ]
		         }
		      ]
		   }
		}; 

		
		


		

function showCards(){

	// JSON.parse(localStorage['george']).transaction.oary.forEach((item, index) => {
	george.transaction.oary.forEach((item, index) => {
		var clone = document.importNode(cardTemp.content, true);
		//assign spider id
		clone.querySelector('.spider').id=`spider${index+1}`;
		//assign number
		clone.querySelector('.card-info .number').textContent=item.platform_cnt;
		//assign name
		clone.querySelector('.card-info .name').textContent=item.cand_name;
		clone.querySelector('.card-info .party').src=`inc/img/${item.party}.png`;
		clone.querySelector('.card-info .photo').src=`inc/img/${item.cand_name}.jpg`;

		/*******popup area*****/
		clone.querySelector('.popup-header .photo').src=`inc/img/${item.cand_name}.jpg`;
		clone.querySelector('.popup-header .number').textContent=item.platform_cnt;
		clone.querySelector('.popup-header .name').textContent=item.cand_name;
		clone.querySelector('.popup-header .party').src=`inc/img/${item.party}.png`;
		clone.querySelector('.popup-spider').id=`popSpider${index+1}`;
		clone.querySelector('.popup-content-main .list').innerHTML=item.oary2.map((el) => `<li>${el.platform}</li>`).join('');
		clone.querySelector('.fb-button').href=item.fan_page;

		/***voice area***/
		clone.querySelector('.speed').id=`speed${index+1}`;
		/*voice parameter*/
		let voiceArr=[];
		voiceArr.push(parseInt(item.voice));

		cardWrapper.appendChild(clone);

		var maxValue=Math.max(...item.oary3.map(el => parseFloat(el.value)));
			
		var spiderSettings={

			chart: {
				polar: true,
				type: 'line',
		   		margin: [40, 20, 20, 20],
		   		height: 200,
		   		events: {
		   			load: function(){
		   					const crowns=document.querySelectorAll('.crown');

		   					crowns.forEach(item => {
		   						const crownTextElement=item.parentElement;
								const crownLabelGroup=item.parentElement.parentElement;

								let pathElement=document.createElementNS("http://www.w3.org/2000/svg", "path");
								pathElement.setAttributeNS(null, 'd', trophyPathRoute);
								pathElement.setAttributeNS(null, 'fill', '#0BD1EA');
								const crownTextElementX=crownTextElement.getAttributeNS(null,'x');
								const crownTextElementY=crownTextElement.getAttributeNS(null,'y');
								const crownTextAnchor=crownTextElement.getAttributeNS(null,'text-anchor');

								if(crownTextAnchor=='start'){
									pathElement.setAttributeNS(null, 'transform', `translate(${crownTextElementX-20}, ${crownTextElementY-11})`);
								}else if(crownTextAnchor=='middle'){
									pathElement.setAttributeNS(null, 'transform', `translate(${crownTextElementX-35}, ${crownTextElementY-11})`);
								}else if(crownTextAnchor=='end'){
									pathElement.setAttributeNS(null, 'transform', `translate(${crownTextElementX-45}, ${crownTextElementY-11})`);
								}
								
								crownLabelGroup.prepend(pathElement);
		   					})

							
						}
		   		}
		    },


		    credits: {
		   		enabled: false
		    },

		    title: {
		   		text: '政見五角圖',
		   		align: 'left',
		   		style: {
		   			'fontSize': '14px',
		   			'color': '#666'
		   		}
		    },

		    pane: {
		   		size: '100%'
		    },

		    exporting: { 
		   		enabled: false 
		    },

		    xAxis: {
			   	categories: item.oary3.map((el) => {
			   		if(parseFloat(el.value)===maxValue){
			   			return `
			   				<tspan class="crown">${el.tag}<tspan>
			   				`;
			   		}else{
			   			return el.tag;
			   		}
				}),
				labels: {
					style: {
						fontSize: '11px',
					}
				},
		   		tickmarkPlacement: 'on',
		   		lineWidth: 0,
		    },

		    yAxis: {
			   	gridLineInterpolation: 'polygon',
			   	lineWidth: 0,
			   	min: 0,
			   	tickPositions: [0, 1, 2, 3, 4, 5],
			   	endOnTick: true,
		    },

		    tooltip: {
		   		enabled: false,
		    },

		    series: [{
			   	showInLegend: false,
			   	data: item.oary3.map(el => parseFloat(el.value)),
			   	pointPlacement: 'on',
			   	color: '#0BD1EA',
		    }]

		};

		var speedSettings={

	 		chart: {
		        type: 'gauge',
		        plotBackgroundColor: null,
		        plotBackgroundImage: null,
		        plotBorderWidth: 0,
		        plotShadow: false,
		        margin: [40, 20, 0, 20],
		        height: 200
		    },
		    
		    title: {
		        text: '網路聲量',
		        align: 'left',
		   		style: {
		   			'fontSize': '14px',
		   			'color': '#666'
		   		}
		    },
	      
		    
		    pane: {
		        startAngle: -90,
		        endAngle: 90,
	         	background: null
		    },
	      
	      	exporting: { 
	        	enabled: false 
	      	},
	      
	      	credits: {
	        	enabled: false
	      	},
	        
	        plotOptions: {
	            gauge: {
	                dataLabels: {
	                    borderColor: "none",
	                    useHTML: true,
	                    style: {
	                    	fontSize: "20px",
	                    }
	             	},
	                dial: {
	                    baseLength: '0%',
	                    baseWidth: 10,
	                    radius: '100%',
	                    rearLength: '0%',
	                    topWidth: 1
	                }
	            }
	        },
		       
		    yAxis: {
	            labels: {
	                y: 10
	            },
	            tickPositions: [-50, 0, 50],
	            minorTickLength: 0,
		        min: -50,
		        max: 50,
	        	plotBands: [{
	          		from: -50,
		         	to: 50,
		        	color: {
			        	linearGradient: { x1: 0, x2: 1, y1: 0, y2: 0 },
			        	stops: [
				          [0.2, '#C00000'],
				          [0.5, '#FFC000'],
				          [0.7, '#9BBB59'],
			        	]
		        	},
		        	thickness: '50%'
	        	}]
		    },
		
		    series: [{
		        name: 'Speed',
		        data: voiceArr,
	         	dataLabels: {
	           	formatter: function(){
	            	let badge='';
	            	switch(true) {
	             		case (this.y<-34):
		                	//-35 -36 -37
		                 	badge='<span class="badge verybad">非常負面</span>';
		                 	break;
	             		case (this.y<-4):
	                 		//-34 -33 -32 ... -5
	                 		badge='<span class="badge bad">較負面</span>';
	                 		break;
	             		case (this.y<5):
		                	//-4 -3 ... 3 4
		                	badge='<span class="badge neutral">中立</span>';
		                	break;
	            		case (this.y<35):
	                 		//5 6 ... 33 34
	                 		badge='<span class="badge good">較正面</span>';
	                 		break;
	             		case (this.y<50):
	                		badge='<span class="badge verygood">非常正面</span>';
	            		}
	            
	              		return `<span class="voice-num">${this.y}分 </span>${badge}`
	        		}
	         	}
		    }],
	 
	 		tooltip: {
			   	enabled: false,
			},
 
		};

	    Highcharts.chart(`spider${index+1}`, spiderSettings);
	    Highcharts.chart(`popSpider${index+1}`, spiderSettings);
	    Highcharts.chart(`speed${index+1}`, speedSettings);




	});

}


// showCards();

function saveValue(th, e){
	e.preventDefault();
	const checkedList=document.querySelectorAll('input[type="checkbox"]:checked');

	var checkedArr=[];

	for(i=0;i<checkedList.length;i++){
		var innerobj={tag: checkedList[i].value};
		checkedArr.push(innerobj);
	}

	var checkedJSON={
		district: areaText.textContent,
		iary_cnt: checkedList.length,
		iary: checkedArr
	};
	
	//ajax
	var xmlhttp=new XMLHttpRequest();
	const IPaddress=location.href.split('8080').shift();
	console.log(`${IPaddress}5000/api/bbinqcan`);

	xmlhttp.open('POST', `${IPaddress}5000/api/bbinqcan`, true);
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

	xmlhttp.send(JSON.stringify(checkedJSON));
	console.log(checkedJSON);

	xmlhttp.onreadystatechange=function(){

		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			localStorage['george']=xmlhttp.responseText;
			console.log(xmlhttp.responseText);
			location.href='main1002.html';
		}
	};


	//selected info
	localStorage['district']=areaText.innerText;
	localStorage['tags']=[...checkedList].map(item => item.value);;

	

}

function fadeInPop(th){
	const targetDialog=th.parentNode.parentNode.nextElementSibling;

	targetDialog.showModal();
	targetDialog.classList.add('in');
}

function fadeOutPop(th){
	const targetDialog=th.parentNode;

	targetDialog.classList.remove('in');
	window.setTimeout(function(){
		targetDialog.close();
	},500)
	
}

function selectedInfo(){
	selectedMap.className="selected-map";

	selectedDistrict.innerText=localStorage['district'];
	selectedTags.innerHTML=localStorage['tags'].split(',').map(item => `<label class="label orange">${item}</label>`).join('');

	if(localStorage['district']==='北投士林'){
		selectedMap.classList.add('active01');
		localStorage['districtNum']='第一選區';
	}else if(localStorage['district']==='南港內湖'){
		selectedMap.classList.add('active02');
		localStorage['districtNum']='第二選區';
	}else if(localStorage['district']==='松山信義'){
		selectedMap.classList.add('active03');
		localStorage['districtNum']='第三選區';
	}else if(localStorage['district']==='中山大同'){
		selectedMap.classList.add('active04');
		localStorage['districtNum']='第四選區';
	}else if(localStorage['district']==='中正萬華'){
		selectedMap.classList.add('active05');
		localStorage['districtNum']='第五選區';
	}else if(localStorage['district']==='大安文山'){
		selectedMap.classList.add('active06');
		localStorage['districtNum']='第六選區';
	}

	selectedDistrictNum.innerText=localStorage['districtNum'];
}
