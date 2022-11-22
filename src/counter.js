const axios = require("axios");
async function run() {
  try {
    const response = await axios.get(
      "https://www.terriblytinytales.com/test.txt"
    );
    console.log(wordFreq(response.data));
    //console.log(wordFreq(response.data));
  } catch (error) {
    console.error(error);
  }
}
function sort(dict) {
  var items = Object.keys(dict).map((key) => {
    return [key, dict[key]];
  });
  // console.log(items);  // [ '1', 1 ],[ '2', 1 ],....

  // Sort the array based on the second element (i.e. the value)
  items.sort((first, second) => {
    return second[1] - first[1];
  });
  //console.log(items);
  // Obtain the list of keys in sorted order of the values.
  // const obj = Object.fromEntries(items);
  // console.log(obj);
  var sorted = {};
  for (let i = 1; i <= 20; i++) {
    sorted[items[i][0]] = items[i][1];
  }
 
  return sorted;
}

function wordFreq(string) {
  var lines = string.split("\n");
  var freqMap = {};
  for (var line = 0; line < lines.length; line++) {
    var words = lines[line].toLowerCase().split(/[^'A-Za-z]/);
    words.forEach(function (w) {
      if (!freqMap[w]) {
        freqMap[w] = 0;
      }
      freqMap[w] += 1;
    });
  }
  
  return sort(freqMap);
}

run();
