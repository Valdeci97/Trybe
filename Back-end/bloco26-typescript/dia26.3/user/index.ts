import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
};

const PORT: number = Number(process.env.PORT);
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(PORT, (): void => console.log(`Running on Port ${PORT}`));
