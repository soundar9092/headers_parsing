import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/whoami', async (req, res) => {
    return res.send({ "ipaddress": req.socket.remoteAddress, "language": req.headers['accept-language'], "software": req.headers['user-agent'] })
})

app.listen(3000, () => {
    console.log("Server is running in the port: ", 3000)
})