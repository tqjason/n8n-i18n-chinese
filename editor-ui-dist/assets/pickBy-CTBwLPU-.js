import { g3 as arrayMap, g4 as getAllKeysIn, g5 as baseIteratee, g6 as basePickBy } from "./index-CiIsbhGU.js";
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}
export {
  pickBy as p
};
