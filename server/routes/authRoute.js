import express from 'express';
import cors from 'cors';
import { loginCandidate, registerCandidate } from '../controllers/authController.js';
import { candidatePersonalInfo } from '../controllers/candidateRoute.js';

const route = express.Router();

route.use(cors({
    origin :"http://localhost:5173",
    credentials: true

}
));

route.post("/register", registerCandidate);
route.post("/login", loginCandidate);
route.post("/personal-information", candidatePersonalInfo);


export {route};