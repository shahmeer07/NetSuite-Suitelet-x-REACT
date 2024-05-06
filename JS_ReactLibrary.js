/**
 * @NapiVersion 2.0
 * @NModuleScope public
 */

var JS_ReactLibrary = {
    getReactIncludes: function() {
        return [
            '',
            '<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>',
            '<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>',
            '<script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>',
            '',
        ].join("\n")
    } ,
    getComponentScript : function (componentName, tagName , file) {
        switch (componentName) {
            case 'PartFinder':
                return [
                    '',
                    '<script type="text/babel">',
                    this.PartFinder(file),
                    '   ReactDOM.render(',
                    '       <PartFinder/>,',
                    '       document.getElementById("{tagName}")'.replace('{tagName}',tagName),
                    '   );',
                    '</script>',
                    '' ].join("\n")
            
            break
        }
}
,
PartFinder: function(file) {
    var fileObj = 
    file.load({
        id: 'SuiteScripts/ReactSuitelet/JS_React_PartFinder_Function.js'
    })
    var fileContent = fileObj.getContents()
    return fileContent
}
}

