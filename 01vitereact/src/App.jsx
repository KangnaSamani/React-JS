import Chai from "./chai"

function App() {

  const username = "chai aur code"

  return (//we can return only one element to return multiple elements use div tag. we can write <div> <div/> or we can pass empty <> </> also
    <div>
      {/* evaluated expression */}
      <h1>React JS with vite {username}</h1>
      <Chai/>
      <p>learn react js with vite.</p>
    </div>
  )
}

export default App
