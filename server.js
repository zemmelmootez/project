const express = require ('express');
const app = express();
app.use(express.json());
const cors=require('cors');
app.use(cors());
app.use('/user',require('./routes/userRoutes'))
const port = 8000;
require('./helpers/dbConnect')

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
app.post("/user/chat", async (req, res) => {
    // Get the prompt from the request
    const { prompt } = req.body;
  
    // Generate a response with ChatGPT
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      temperature:0.7,
      max_tokens:2560,
      top_p:1,
      frequency_penalty:0,
      presence_penalty:0,
      prompt: prompt,
    });
    console.log(completion.data);
    res.send(completion.data.choices);
  });

app.listen(port,()=>console.log(`server is running on ${port}`));