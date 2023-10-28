export const elevatorApi = async(dbClient, app) =>{
    const elevatorCollection = dbClient.db('elevatorMaintenance').collection('elevators');
    app.get('/elevator', async (req, res) => {
      const query = {};
      const result = await elevatorCollection.find(query).toArray();
      res.send(result);
    })
  } 