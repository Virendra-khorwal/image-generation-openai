import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

function App() {
  const [textPrompt, setTextPrompt] = useState("");
  const [img, setImg] = useState("");

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    try {
      const response = await openai.createImage({
        prompt: "a cat",
        n: 1,
        size: "1024x1024",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col mt-10 items-center w-screen">
      <div>
        <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
          {" "}
          Generate Image with Text input using OpenAI
        </h1>
        <div className="mt-6 flex gap-4">
          <input
            placeholder="Enter text here"
            className="py-2 px-4 border-2 rounded-xl border-indigo-400 outline-none w-full"
            onChange={(e) => setTextPrompt(e.value)}
          />
          <button
            className="bg-indigo-400 px-4 py-2 rounded-xl text-white"
            onClick={generateImage}
          >
            Generate
          </button>
        </div>

        {img && <div> Image Will shown here </div>}
      </div>
    </section>
  );
}

export default App;
