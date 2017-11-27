function getCompaniesList(){
	 $.ajax({url: "data/companyList.json", success: function(result){
            getCompaniesTable(result);
        }});	
};

function getCompaniesTable(result){
	$('#companyDiv').css('display' , 'block');
	var len = Object.keys(result).length;
	if($("#companyTable tbody").length == 0){
		$("#companyTable").append('<tbody></tbody>')
		for(var i=0; i<len; i++){
			$("#companyTable tbody").append('<tr>'+
												'<td class="name">'+result[i].name+'</td>'+
												'<td class="established">'+result[i].established+'</td>'+
												'<td class="employees">'+result[i].employees+'</td>'+
												'<td class="revenue">'+result[i].revenue+'</td>'+
												'<td><button onclick="onEditCompany(this)"><span class="glyphicon glyphicon-edit">Edit</span></button></td>'+
												'<td><button onclick="onDeleteCompany(this)"><span class="glyphicon glyphicon-remove">Delete</span></button></td>'+
											'</tr>');
		}
		tablePagination();
	}
};

function onDeleteCompany(company){
	$(company).parents('tr').remove();
};

function onEditCompany(company){
	$('#editFields').css('display' , 'block');
	row = $(company).parents('tr');
	cell = $(row).find('td');
	resetValues = {};
		resetValues.name = cell.eq(0).text();
		resetValues.established = cell.eq(1).text();
		resetValues.employees = cell.eq(2).text();
		resetValues.revenue = cell.eq(3).text(); 
	$('td', row).each(function(i) {
		$('#editFields input').eq(i).val(this.textContent);
		
	});
};

function onSaveCompany(){
	name = $('#name').val();
	established = $('#established').val();
	employees = $('#employees').val();
	revenue = $('#revenue').val();
	cell.eq(0).html(name);
	cell.eq(1).html(established);
	cell.eq(2).html(employees);
	cell.eq(3).html(revenue);
	onCancelCompany();
}

function onResetCompany(){
	$('#name').val(resetValues.name);
	$('#established').val(resetValues.established);
	$('#employees').val(resetValues.employees);
	$('#revenue').val(resetValues.revenue); 
}

function onCancelCompany(){
	$('#editFields').css('display' , 'none');
};

function onClickAdvanceSearch(){
	$('#advanceSearch').toggle();
};

$("#searchBar").keyup(function () {
    var value = $(this).val();
	if($('#name').is(':checked')){
		var x = "name";
	}
	if($('#established').is(':checked')){
		var x = "established";
	}
	if($('#employees').is(':checked')){
		var x = "employees";
	}
	if($('#revenue').is(':checked')){
		var x = "revenue";
	}
    if (value.length){
        $("table tr").each(function (index) {
            if (index != 0) {

                $row = $(this);

                $row.find("td."+x).each(function () {

					var cell = $(this).text();

					if (cell.indexOf(value) < 0) {
						$row.hide();
					} else {
						$row.show();
						return false; //Once it's shown you don't want to hide it on the next cell
					}

				});
			}
		});
	}
	else{
		//if empty search text, show all rows
		$("table tr").show();

	}
});
