import { Router } from "express";
import controller from "../controller";

const Route = Router();


Route.get('/login', controller.login);


export default Route;