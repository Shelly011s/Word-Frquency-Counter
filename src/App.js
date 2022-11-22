import { useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Bar from './barChart'


function App() {
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const sort = (dict) => {
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

  const wordFreq = (string) =>  {
    var lines = string.split("\n");
    var freqMap = {};
    for (var line = 0; line < lines.length; line++) {
      var words = lines[line].toLowerCase().split(/\W+/);
      words.forEach(function (w) {
          if (!freqMap[w]) {
            freqMap[w] = 0;
          }
          freqMap[w] += 1;
        });
    }
    
    return sort(freqMap);
  }
  
  useEffect(() => {
    async function run() {
      try {
        const response = await axios.get(
          "https://www.terriblytinytales.com/test.txt"
        );
        const metaData = wordFreq(response.data);
        setData(metaData);
      } catch (error) {
        console.error(error);
      }
    }
    run();
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <h3> {show ?  "": "Click on submit to know top 20 words of given file." }</h3>
        <a href="https://github.com/Shelly011s/Word-Frquency-Counter"> Link to the gitHub repo</a>
        {show ? (
          <div style={{ height: 500, width: "82%" }}>
            <Bar data={data} />
          </div>
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
        )}
        <button className="my-button" onClick={() => setShow(!show)}>
          {show ?  "Go back": "Submit" }
        </button>
      </header>
    </div>
  );
}

export default App;
