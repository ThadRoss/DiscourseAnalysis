angular.module('starter.directives', [])

.directive('fileDropzone', function() {
    return {
        restrict: 'A',
        scope: {
            file: '=', 
            filename: '=',
        },
        link: function(scope, element, attrs){
            var checkSize,
                isTypeValid,
                processDragOverorEnter,
                ValidMimeTypes;

            processDragOverorEnter = function(event) {
                if (event != null){
                    event.preventDefault();
                }
                event.dataTransfer.effectAllowed = 'copy';
                return false;
            };

            ValidMimeTypes = attrs.fileDropzone;

            checkSize = function(size) {
                var _ref;
                if (((_ref = attrs.maxFileSize) === (void 0) || _ref === '') || (size / 1024) / 1024 < attrs.maxFileSize){
                    return true;
                }else{
                    alert("file must be smaller than " + attrs.maxFileSize + "MB");
                    return false;   
             }
                
            };

            isTypeValid = function(type){
                if ((validMimeTypes === (void 0) || validMimeTypes === '') || validMimeTypes.indexOf(type) > -1){
                    return true;
                    
                }else{
                    alert("invalid file type. File must be one of the following types" + validMimeTypes);
                    return false;
                }
            };

            element.bind('dragover', processDragOverorEnter);
            element.bind('dragenter', processDragOverorEnter);

            return element.bind('drop', function(event) {
                var file, name, reader, size, type;
                if (event != null) {
                    event.preventDefault();
                }
                reader = new FileReader();
                reader.onload = function (evt) {
                    if(checkSize(size) && isTypeValid(type)) {
                        return scope.$apply(function() {
                            scope.file = evt.target.result;
                            if(angular.isString(scope.filename)) {
                                return scope.fileName = name;
                            }
                        });
                    }
                };
                file = event.dataTransfer.files[0];
                //name = file.name;
                //type = file.type;
                //size = file.size;
                reader.readAsDataURL(file);
                return false;
            });
        }
    };
});
/*
.directive("fileread", [function() {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes){
            element.bind("change", function(changeEvent){
                var reader = new FileReader();
                reader.onload = function(loadEvent){
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);*/