import express from 'express';
import mongoMiddleware from './middleware/mongoMiddleware'
import router from './router/mainRouter';
import 'dotenv/config'
import insertAdmin from './config/superAdmin';

const port = process.env.PORT;
const app = express()

app.use(express.json())

app.use(mongoMiddleware)
app.use(router)

// super admin account:
app.post('/setupAdmin', async (req, res) => {
  await insertAdmin(req);
  res.status(200).send('Admin setup complete');
});

app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
  })