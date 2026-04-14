import express, { Router } from "express";

import Route from "../Route";

const App = express();

App.use(express.json());
App.use('/api',Route)


export default App;

const PORT = process.env.PORT || 3000;

App.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});