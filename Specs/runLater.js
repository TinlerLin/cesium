import { defaultValue } from '../Source/Cesium.js';
import { defer } from '../Source/Cesium.js';

    function runLater(functionToRunLater, milliseconds) {
        milliseconds = defaultValue(milliseconds, 0);

        var deferred = defer();
        setTimeout(function() {
            try {
                deferred.resolve(functionToRunLater());
            } catch (e) {
                deferred.reject(e);
            }
        }, milliseconds);
        return deferred.promise;
    }
export default runLater;
