

var myObj, myJSON, text, obj;
//Retrieving company data:
text = localStorage.getItem("myJSON");
obj = JSON.parse(text);

//Storing data:
/* myObj = {
"employees":[
    { "id":"1","firstName":"ammu", "lastName":"mom" },
    {"id":"2","firstName":"chandru", "lastName":"moses" },
    { "id":"3","firstName":"fred", "lastName":"neil" }, 
	{ "id":"4","firstName":"chris", "lastName":"do" },
	{ "id":"5","firstName":"gabriel", "lastName":"moses" },
	{"id":"6","firstName":"melwyn", "lastName":"gabriel" }
],
"company":[
	{"id":"1","Name":"bmw", "type":"cars" },
	{"id":"2","Name":"benz", "type":"cars" },
    {"id":"3","Name":"apple", "type":"mobile" },
	{"id":"4","Name":"BaskinRobin's", "type":"ice cream" },
	{"id":"5","Name":"tag-heuer", "type":"watch" },
	{"id":"6","Name":"monzanto", "type":"seed" }

]

}; */







id=[];
var fname=[];
var lname=[];
var compId=[];
var name1=[];
var type=[];
var colLength=Object.keys(obj.employees[0]).length;
var collection=[];
var collection1=[];
var options;
function employees(){
		collection=[id,fname,lname];
		
		document.getElementById("empTab").style.display="block";// Showing the employee table
		document.getElementById("compTab").style.display="none";// Hiding the company table 
		document.getElementById("empAdd").style.display="block";
		document.getElementById("compAdd").style.display="none";
		document.getElementById("editRec").style.display="none";
		document.getElementById("newRec").style.display="none";
		
		var table=document.getElementById("empTab");
		/* Creating the table header*/
				table.innerHTML = '<Thead ><tr >'+
						
						'<th>ID</th>'+
						'<th>FIRST NAME</th>'+
						'<th>LAST NAME</th>'+
						'<th>OPTIONS</th>'+
						
					'</tr>	</Thead><tbody>';
					
	for(var i=1;i<obj.employees.length;i++){
		var row=table.insertRow();
			/*ENTERING THE INDIVIDUAL DATAS INTO ARRAYS*/
			id[i]=obj.employees[i].id;
			fname[i]=obj.employees[i].firstName;
			lname[i]=obj.employees[i].lastName;
			
		for(var j=0;j<colLength;j++){
							
				row.insertCell(j).innerHTML=collection[j][i];
						options=j+1;		
				}
			row.insertCell(options).innerHTML='<button onclick="editEmp('+i+')" value="EDIT">EDIT</button><button onclick="deleteEmp(this)" value="DELETE">DELETE</button>';
			
		}

};
	

function company(){
		document.getElementById("empTab").style.display="none"; // Hiding the employee table
		document.getElementById("compTab").style.display="block"; // enabling the company table 
		document.getElementById("compAdd").style.display="block";// enabling company add fields
		document.getElementById("empAdd").style.display="none";//blocking employee add fields
		document.getElementById("editRec").style.display="none";//blocking edit field area
		document.getElementById("newRec").style.display="none";//blocking new record field area
		collection1=[compId,name1,type];
	var table=document.getElementById("compTab");
		
				/* Creating the table header*/
		
				table.innerHTML ='<Thead>'+
					'<tr>'+
						
						'<th>ID</th>'+
						'<th>NAME</th>'+
						'<th>TYPE</th>'+
						'<th>OPTIONS</th>'+
					'</tr>'+
				'</Thead>';

	for(var i=0;i<obj.company.length;i++){
				var table = document.getElementById("compTab");
			
			
			var row=table.insertRow();
			/*ENTERING THE INDIVIDUAL DATAS INTO ARRAYS*/
			compId[i]=obj.company[i].id;
			name1[i]=obj.company[i].Name;
			type[i]=obj.company[i].type;
				
		for(var j=0;j<colLength;j++){
			
					
				row.insertCell(j).innerHTML=collection1[j][i];
				
				
					
				}
				
			row.insertCell(options).innerHTML='<button onclick="editComp('+i+')" value="EDIT">EDIT</button><button onclick="deleteComp(this)" value="DELETE">DELETE</button>';
		
		}
		
};
function editEmp(val){
	
	document.getElementById("editRec").style.display="block"; //enabling edit record field area
	document.getElementById("newRec").style.display="none";//blocking new record field area
	var editRec=document.getElementById("editRec");
	var id=collection[0][val];
	var fname=collection[1][val];
	var lname=collection[2][val];
	
	editRec.innerHTML='<strong>ID:</strong> <input value="'+id+'" ><strong>FIRST NAME:</strong> <input value="'+fname+'" ><strong>LAST NAME:</strong><input value="'+lname+'" ><strong> 	<button onclick="save(1,'+val+')" value="SAVE">SAVE</button><button onclick="cancel()" value="CANCEL">CANCEL</button><button onclick="reset1()" value="RESET">RESET</button></strong>';						
				
			
	
	
};
function editComp(val){
	document.getElementById("editRec").style.display="block";//enabling edit record field area
	document.getElementById("newRec").style.display="none"; //blocking new record field area
	var editRec=document.getElementById("editRec");
	var id=collection1[0][val];
	var name=collection1[1][val];
	var type=collection1[2][val];
	editRec.innerHTML='<strong>ID:</strong> <input name="id" value="'+id+'" ><strong>NAME: </strong><input value="'+name+'" ><strong>TYPE</strong><input value="'+type+'" ><strong><button onclick="save(2,'+val+')" value="SAVE">SAVE</button><button onclick="cancel()" value="CANCEL">CANCEL</button><button onclick="reset()1" value="RESET">RESET</button></strong>';						
				
			
};
var tab;
function save(tab,val1){
	
if(tab==1){ // if employee
	/* adding new company values of input boxes*/
	obj.employees[val1].id=document.querySelector("#editRec >input:nth-child(2)").value;
	obj.employees[val1].firstName=document.querySelector("#editRec >input:nth-child(4)").value;
	obj.employees[val1].lastName=document.querySelector("#editRec >input:nth-child(6)").value;

	
	localStorage.setItem('myJSON',JSON.stringify(obj));
	employees();
}
else{ //company
	/* adding new company values of input boxes*/
	obj.company[val1].id=document.querySelector("#editRec >input:nth-child(2)").value;
	obj.company[val1].Name=document.querySelector("#editRec >input:nth-child(4)").value;
	obj.company[val1].type=document.querySelector("#editRec >input:nth-child(6)").value;

	
	localStorage.setItem('myJSON',JSON.stringify(obj));
	company();

	} 
	
};

function addData(val2){	
	document.getElementById("newRec").style.display="block";
	document.getElementById("editRec").style.display="none";
	var newRec=document.getElementById("newRec");
	if(val2==1){
	newRec.innerHTML='<strong>ID:</strong> <input name="id" placeholder="Enter ID" ><strong>First Name: </strong><input placeholder="Enter First Name"><strong>Last Name:</strong><input placeholder="Enter Last Name"><strong><button onclick="newSave(1,'+val2+')" value="SAVE">SAVE</button><button onclick="cancel()" value="CANCEL">CANCEL</button><button onclick="reset1()" value="RESET">RESET</button></strong>';
	}else{
		
		newRec.innerHTML='<strong>ID:</strong> <input name="id" placeholder="Enter ID" ><strong>NAME: </strong><input placeholder="Enter Name of the company"><strong>TYPE</strong><input placeholder="Enter Type"><strong><button onclick="newSave(2,'+val2+')" value="SAVE">SAVE</button><button onclick="cancel()" value="CANCEL">CANCEL</button><button onclick="reset1()" value="RESET">RESET</button></strong>';
		
	}
}

function newSave(tab,val3){
	
	if(tab==1){ // if employee
	
	/* adding new company values of input boxes*/
	newEmp={}; //creating a new object for employee
		if(document.querySelector("#newRec > input:nth-child(2)").value==""||document.querySelector("#newRec > input:nth-child(2)").value==""||document.querySelector("#newRec > input:nth-child(2)").value==""){
		return;
	}
	newEmp.id=document.querySelector("#newRec > input:nth-child(2)").value;
	newEmp.firstName=document.querySelector("#newRec > input:nth-child(4)").value;
	newEmp.lastName=document.querySelector("#newRec > input:nth-child(6)").value;
	
	obj.employees.push(newEmp); //pushing the new values as key and value from object to the json data
	
	localStorage.setItem('myJSON',JSON.stringify(obj)); //storing it in the local storage
	employees();
	}else{//company
	/* adding new company values of input boxes*/
	newComp={}; //creating a new object for company
	if(document.querySelector("#newRec > input:nth-child(2)").value==""||document.querySelector("#newRec > input:nth-child(2)").value==""||document.querySelector("#newRec > input:nth-child(2)").value==""){
		return;
	}
	newComp.id=document.querySelector("#newRec > input:nth-child(2)").value;
	newComp.Name=document.querySelector("#newRec > input:nth-child(4)").value;
	newComp.type=document.querySelector("#newRec > input:nth-child(6)").value;
	
	obj.company.push(newComp); //pushing the new values as key and value from object to the json data
	
	localStorage.setItem('myJSON',JSON.stringify(obj));//storing it in the local storage
	company();
		
	}
	
}

function reset1(){
	document.querySelector("#editRec > input:nth-child(2)").value="";
	document.querySelector("#editRec > input:nth-child(4)").value="";
	document.querySelector("#editRec > input:nth-child(6)").value="";
	
}

function cancel(){
	
	document.getElementById("editRec").style.display="none";
}



function deleteEmp(val){

	document.getElementById("empTab").deleteRow(val.closest('tr').rowIndex);
	
}
function deleteComp(val){
	document.getElementById("compTab").deleteRow(val.closest('tr').rowIndex);
}


