import { MongoClient } from 'mongodb';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    if (!name || !email.includes('@') || !message) {
      res.status(400).send('Missing required fields');
      return;
    }
    const newMessage = {
      name,
      email,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://canAdmin:qrbAeVGc8HZ9ra4C@cluster0.yv7qo.mongodb.net/deneme?retryWrites=true&w=majority`
      );
    } catch (error) {
      res.status(400).json({ message: 'Could not connect to database', error });
      return;
    }
    const db = client.db();
    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(400).json({ message: 'Could not insert message', error });
      return;
    }
    client.close();
    res
      .status(200)
      .json({ message: 'successfuly stored message', message: newMessage });
  }
  res.status(200).json({ name: 'John Doe' });
}
