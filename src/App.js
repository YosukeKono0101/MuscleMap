import React from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import Exercises from "./components/Exercises";
import SearchExercise from "./components/SearchExercise";
import ExerciseDetail from "./components/ExerciseDetail";
import "./App.css";

function Layout() {
  let location = useLocation();
  let isExerciseDetailPage = location.pathname.startsWith("/exercise/");

  return (
    <>
      <Header />
      {!isExerciseDetailPage && <Introduction />}
      <Routes>
        <Route path="/" exact element={<Exercises />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/search" element={<SearchExercise />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
