import mongoose from 'mongoose';
import config from './config';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
const app: Application = express()

//using cors
app.use(cors());

//parse data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.use('/api/v1',router);


app.get("/", (req: Request, res: Response) => {
    res.send("Elveator mainteinance server!");
});


async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`Database connection successful`);

    app.listen(config.port, () => {
      console.log(`Server is listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('Failed to connect to Database',)
  }

}

main();

export default app;