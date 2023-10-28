import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { elevatorApi } from './elevator.js';

const app = express();

app.use(cors());
app.use(express.json());


dotenv.config();

const port = process.env.PORT;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusterdb.rpg0k.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const dbInitialization = async()=> {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    })

    elevatorApi(client, app)
    

  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
dbInitialization().catch(console.dir);

