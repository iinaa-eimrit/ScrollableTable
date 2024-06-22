import { updateDateInDatabase } from '../../lib/database';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { date } = req.body;
    await updateDateInDatabase(date);
    res.status(200).json({ success: true });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
