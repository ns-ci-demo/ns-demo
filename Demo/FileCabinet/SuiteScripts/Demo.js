/*Version 1.0*/
function UpdateAfterSubmit(type, form)
{
    // load sales order record

var salesorder = nlapiLoadRecord("salesorder", 304);
salesorder.setFieldValue('custbody_demo_so_field', 'Demo - US');
nlapiSubmitRecord(salesorder);
    
}