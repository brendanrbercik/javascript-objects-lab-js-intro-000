var recipes = {bananas: "1", strawberries: "3"};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object, {[key]:value});
}

function destructivelyUpdateObjectByKey(object, key, value) {
  object[key] = value;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
