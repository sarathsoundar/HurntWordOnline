import { grey } from "@material-ui/core/colors";
import { Container, Switch, withStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/header";
import Definitions from "./components/Definitions/Definitions";


function App() {
  const[word, setWord] =useState("");
  const[meanings, setMeanings] = useState([]);
  const[category, setCategory]= useState("en");
  const [LightTheme, setLightTheme] = useState(false);
   const dictionaryApi = async()=>{
     try{
       const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
       setMeanings(data.data);
     }catch(error){
       console.log(error);
     }
   };
  
  useEffect(()=>{
      dictionaryApi();
   },[word, category]);
   
   const PurpleSwitch = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);



  return (
    <div className="App" style={{heigh:"100vh", 
         backgroundColor: LightTheme ? "#fff" : "#282c34",
         color: LightTheme ? "black" : "white",
         transition: "all 0.5s linear", }}>
      
      <Container maxWidth="md"
         style={{display: "flex", flexDirection: "column", height:"100vh", justifyContent: "space-evenly"}}>

        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{LightTheme ? "Dark" : "Light"} Mode</span>
          <PurpleSwitch
            checked={LightTheme}
            onChange={() => setLightTheme(!LightTheme)}
          />
        </div>

      <Header category={category} setCategory={setCategory} word={word} setWord={setWord} LightTheme={LightTheme}/> 
      
      {meanings && 
      (<Definitions
          meanings={meanings}
          word={word}
          category={category}
          LightTheme={LightTheme}
      />)}
      </Container>
      
    </div>
  );
}

export default App;
