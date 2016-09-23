angular
    .module('dataInfoServerModule', [])
    .factory(
        'dataInfoServer',
        [
            '$http',
            'domains',
            function ($http, domains) {

                var dataInfoSvr = {
                    getDataInfo: function (obj, url) {
                        url = domains + url;
                        return $http.post(url, obj);
                    }

                }
                return dataInfoSvr;

            }]);
