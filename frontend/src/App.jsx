import {Routes, Route} from "react-router";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
  <div data-theme="dark" className="relative h-full w-full bg-base-300">
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/create" element={<CreatePage/>} />
      <Route path="/note/:id" element={<NoteDetailPage/>} />
    </Routes>
  </div>
  )
}

export default App