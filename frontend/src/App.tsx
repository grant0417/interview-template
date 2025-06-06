import { useState, use } from "react";

const fetchEmojis = async () => {
  const res = await fetch("http://localhost:8080/api/v1/emojis");
  if (!res.ok) throw new Error("Failed to fetch emojis");
  return res.json();
};

const emojisPromise = fetchEmojis();

function App() {
  const [count, setCount] = useState(0);
  const emojis = use(emojisPromise);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full mx-4">
        <div className="text-center space-y-6">
          <h1 className="text-2xl font-bold">Hello World</h1>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm"
          >
            count is {count}
          </button>
          <div className="flex flex-wrap gap-2 justify-center">
            {emojis.map((emoji: string) => (
              <div key={emoji} className="text-4xl">
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
