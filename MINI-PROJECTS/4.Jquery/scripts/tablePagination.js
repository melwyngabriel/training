function tablePagination(){ 
    var totalRows = $('#companyTable').find('tbody tr:has(td)').length; 
    var recordPerPage = 5; 
    var totalPages = Math.ceil(totalRows / recordPerPage); 
    var $pages = $('<div id="pages"></div>'); 
    for (i = 0; i < totalPages; i++) {  
        $('<a>&nbsp;&nbsp;' + (i + 1) + '</a>').appendTo($pages); 
    }   
    $pages.appendTo('#companyTable'); 
    $('.pageNumber').hover(  function() {
        $(this).addClass('focusPagination');
    },   function() {
        $(this).removeClass('focusPagination');
    } ); 
    $('table').find('tbody tr:has(td)').hide(); 
    var tr = $('table tbody tr:has(td)'); 
    for (var i = 0; i <= recordPerPage - 1; i++) {   
        $(tr[i]).show(); 
    } 
    $('a').click(function(event) {  
        $('#companyTable').find('tbody tr:has(td)').hide();  
        var nBegin = ($(this).text() - 1) * recordPerPage;  
        var nEnd = $(this).text() * recordPerPage - 1;  
        for (var i = nBegin; i <= nEnd; i++)   {   
            $(tr[i]).show();  
        } 
    });
}