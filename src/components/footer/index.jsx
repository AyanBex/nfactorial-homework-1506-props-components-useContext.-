import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

// export const Search = () => {
//   return (
//     <Stack spacing={1} sx={{ width: 300 }}>
//       <Autocomplete
//         id="free-solo-demo"
//         options={top100Films.map((option) => option.title)}
//         renderInput={(params) => <TextField {...params} label="searchSW" />}
//       />
//     </Stack>
//   );
// }

export const Footer = ({ foot }) => {
    return (
      <header>
        <div className="linkses">
        <footer>
        <p>Resources:
        {/* <div className="links"> */}
        <a href="https://www.starwars.com/video">starwars-video</a>
        <a href="https://www.starwars.com/news">starwars-news</a>
        {/* </div> */}
        </p>
        </footer>
        </div>
      </header>
    );
  };