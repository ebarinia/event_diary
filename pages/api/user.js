import clientPromise from "../../lib/mongo/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("eventsdiary");

       const users = await db
           .collection("watchlist")
           .find()
           .toArray();
       res.json(users);
   } catch (e) {
       console.error(e);
   }
};