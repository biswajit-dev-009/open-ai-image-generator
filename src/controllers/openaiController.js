const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = {
  generateImage: async (req, res) => {
    try {
      const { inputText, imageSize, imageQuantity } = req.body;

      const { data } = await openai.createImage({
        prompt: inputText,
        n: parseInt(imageQuantity),
        size:
          imageSize === 'small'
            ? '256x256'
            : imageSize === 'medium'
            ? '512x512'
            : '1024x1024',
      });
      return res.status(200).send(data);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
