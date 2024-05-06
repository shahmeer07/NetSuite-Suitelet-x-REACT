/**
 * @NapiVersion 2.x
 * @NScriptType Suitelet 
 * @NAmdConfig ./JS_React_Lib_Config.json
 */
define (['N/ui/serverWidget','N/file','react_lib'] , function(serverWidget,file,react_lib){
    function onRequest(context){
        if (context.request.method === "GET"){

            // Creating NetSuite Form on the Suitelet
            var form = serverWidget.createForm({
                title: "NetSuite Suitelet Implementation with ReactJS"
            })

            // Add an inline HTML field 
            var field1 = form.addField({
                id: 'custom_inline',
                type: serverWidget.FieldType.INLINEHTML,
                label: "Inline"
            })

            var ComponentScript = react_lib.getComponentScript('PartFinder' , 'dynHTML',file)
            
            // Add the html 
            field1.defaultValue = react_lib.getReactIncludes() +  '<div id="dynHTML" />' + ComponentScript
            
            context.response.writePage(form)
        }
    }
    return {
        onRequest: onRequest
    }
})