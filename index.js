var recipes = {bananas: "1", strawberries: "3"};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object, {[key]:value});
}
