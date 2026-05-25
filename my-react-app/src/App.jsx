

function App() {
  const name = "rahul";
  const isLoggedIn = true;
  return (
    <div>
      App
      <button>Click me</button>
      {/* jsx expression */}
      <p>Hello, {name}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
    </div>
  );
}

export default App;
