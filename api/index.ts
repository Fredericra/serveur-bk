import express, { Router } from "express";
import dotenv from "dotenv";

dotenv.config();

import Route from "../Route";

const App = express();

App.use(express.json());
App.use('/api',Route)



const PORT = process.env.PORT || 3000;

export default App;
if(process.env.VERCEL !=='1'){
  App.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
}
  