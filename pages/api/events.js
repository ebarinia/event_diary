import clientPromise from "../../lib/mongo/mongodb";

export default async function getAll(req, res) {
   try {
    const client = await clientPromise;
    const db = client.db("eventsdiary");
    const events = await db
           .collection('events')
           .find()
           .toArray();
       res.json(events);
   } catch (e) {
       console.error(e);
       res.status(500).json({ message: "Internal server error" });
   }
};