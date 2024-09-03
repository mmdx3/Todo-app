import BackgroundHeader from "./components/BackgroundHeader";
import Footer from "./components/Footer";
import Header from "./components/main/Header";
import SideBar from "./components/main/SideBar";
import TodoList from "./components/main/TodoList";

const App = () => {
  return (
    <div className="font-Kanit bg-[#f1d4b3] min-h-screen flex justify-center items-center flex-col ">
      <BackgroundHeader />
      <main className="container mx-auto max-w-7xl rounded-lg bg-white shadow-lg mt-10 overflow-hidden z-10 ">
        <Header />
        <div className="flex justify-center items-center ">
          <TodoList />
          <SideBar />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
