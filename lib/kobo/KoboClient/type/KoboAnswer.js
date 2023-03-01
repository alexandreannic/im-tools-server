"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KoboAnswerUtils = void 0;
class KoboAnswerUtils {
}
exports.KoboAnswerUtils = KoboAnswerUtils;
/**
 * It's verbose and unoptimized but it's type safe. If field of KoboAnswerMetaData are changed,
 * compiler will throw an error
 */
KoboAnswerUtils.extractAnswerFromMetadata = (a) => {
    const dataToExtract = [
        '_id',
        'formhub/uuid',
        'start',
        'end',
        '__version__',
        'meta/instanceID',
        '_xform_id_string',
        '_uuid',
        '_attachments',
        '_status',
        '_geolocation',
        '_submission_time',
        '_tags',
        '_notes',
        '_validation_status',
        '_submitted_by',
    ];
    // const {
    //  
    // }
};
//# sourceMappingURL=KoboAnswer.js.map