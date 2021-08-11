import { createMuiTheme, TextField, ThemeProvider } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import React from 'react';
import './header.css';
import categories from "../data/category";
const Header = ({ setCategory, category, word, setWord, LightTheme }) =>{

    const darkTheme = createMuiTheme({
        palette: {
            primary: {
                main: LightTheme ? "#000" : "#fff",
              },
              type:  LightTheme ? "light": "dark",
        },
      });
      const handleChange = (language) => {
        setCategory(language);
        setWord("");
      };

    return (
     <div className= 'header'>
       <span className='title'>{word? word:"Word Hunt"}</span>
       <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a Word" 
            id="standard"
            value={word}
            onChange={(e)=> setWord(e.target.value)}
         />
        <TextField
          className="select"
          select
          label="language"
          value={category}
          onChange={(e)=> handleChange(e.target.value)}
          
        >
          {categories.map((option) => (
            <MenuItem key={option.label} value={option.label}>
                 {option.value}
            </MenuItem>
          ))}  
        </TextField>
      </ThemeProvider>
    </div>
 </div>
     
    );
};

export default Header;