import _ from "lodash";

export const compareObj = (obj1, obj2) => {
  const diff = _.differenceWith(_.toPairs(obj1), _.toPairs(obj2), _.isEqual);
  return _.fromPairs(diff);
};
