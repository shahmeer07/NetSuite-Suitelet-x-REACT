/**
 * @NapiVersion 2.x
 * @NscriptType Suitelet
 * @NModuleScope SameAccount
 */

define (['N/ui/serverWidget'] , function (serverWidget){
    function onRequest(context){
        if (context.request.method === 'GET') {

            var form = serverWidget.createForm({
                title: "First Suitelet"
            })

            form.addField({
                id: 'custpage_field1',
                type: serverWidget.FieldType.TEXT,
                label: 'Name'
            })

            form.addSubmitButton({
                label: "Submit"
            })

            context.response.writePage(form)
        } else if (context.request.method === 'POST') {
            var field1Value = context.request.parameters.custpage_field1

            context.response.write("Form Submitted Successfully, Hello! " + field1Value )
        }
    }
    return {
        onRequest : onRequest
    }
})