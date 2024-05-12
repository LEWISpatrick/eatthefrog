// pages/api/users.js
import { requireSession, users } from '@clerk/nextjs/api';

export default requireSession(async (req, res) => {
  const { sessionId } = req;
  if (!sessionId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const userList = await users.getUserList();
    res.status(200).json(userList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
