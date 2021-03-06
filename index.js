var recipes = {bananas: "1", strawberries: "3"};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object, {[key]:value});
}

function deleteFromObjectByKey (object, key, newObject) {
  var newObject = Object.assign({},object);
  delete newObject[key];
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
