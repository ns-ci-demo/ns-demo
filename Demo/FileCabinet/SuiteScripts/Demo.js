/*Version 2.0*/
//Updated the version
function UpdateAfterSubmit(type, form)
{
    // load sales order record
	//Modified by maria.auxilia

var salesorder = nlapiLoadRecord("salesorder", 304);
salesorder.setFieldValue('custbody_demo_so_field', 'Demo - US');
nlapiSubmitRecord(salesorder);
    
}