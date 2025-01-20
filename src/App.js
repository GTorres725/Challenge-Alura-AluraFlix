import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Banner from './components/Banner/Banner.jsx';
import Category from './components/Category/Category.jsx';
import Footer from './components/Footer/Footer.jsx';
import AddVideo from './components/AddVideo/AddVideo.jsx';
import { categories as initialCategories } from './data';
import './App.css';

const App = () => {
  const [categories, setCategories] = useState(initialCategories);

  const handleAddVideo = (video) => {
    setCategories((prevCategories) => {
      const updatedCategories = prevCategories.map((category) => {
        if (category.title === video.category) {
          return {
            ...category,
            videos: [...category.videos, video],
          };
        }
        return category;
      });
      return updatedCategories;
    });
  };


  const handleDeleteVideo = (categoryTitle, videoIndex) => {
    setCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      const category = updatedCategories.find(
        (cat) => cat.title === categoryTitle
      );
      if (category) {
        category.videos.splice(videoIndex, 1);
      }
      return updatedCategories;
    });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              {categories.map((category, index) => (
                <Category
                  key={index}
                  title={category.title}
                  videos={category.videos}
                  onDelete={handleDeleteVideo}
                />
              ))}
              <Footer />
            </>
          }
        />
        <Route
          path="/add-video"
          element={
            <AddVideo
              onAdd={handleAddVideo}
              categories={['Front-End', 'Back-End', 'Mobile']}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;