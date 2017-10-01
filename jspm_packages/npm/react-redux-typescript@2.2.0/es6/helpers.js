"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @export createEmptyAction - empty action creator function
 * @template T - Type
 * @param type: T
 * @returns () => EmptyAction<T>
 */
function createEmptyAction(type) {
    return () => ({ type });
}
exports.createEmptyAction = createEmptyAction;
;
/**
 * @export createPayloadAction - FSA action creator function
 * @template T - Type
 * @template P - Payload
 * @param type: T
 * @returns (payload: P) => PayloadAction<T, P>
 */
function createPayloadAction(type) {
    return (payload) => ({ type, payload });
}
exports.createPayloadAction = createPayloadAction;
//# sourceMappingURL=helpers.js.map