
import React, { useState, useEffect } from "react";
import rakhiImage from '../public/Rakshabandhan_4.webp';
function App() {
  
    const urlParams = new URLSearchParams(window.location.search);
  const initialName = urlParams.get("name") || "";
  const initialPhoto = urlParams.get("photo") || "";

  const [name, setName] = useState(initialName);
  const [photo, setPhoto] = useState(initialPhoto);

  const [shareLink, setShareLink] = useState("");

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const generateLink = () => {
    const params = new URLSearchParams();
    if (name) params.set("name", name);
    if (photo) params.set("photo", photo);
    setShareLink(`${window.location.origin}?${params.toString()}`);
  };

  useEffect(() => {
    // Create falling flowers
    const flowers = ["🌸", "🌺", "💮", "🌼", "🌻"];
    const interval = setInterval(() => {
      const flower = document.createElement("div");
      flower.className = "flower";
      flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.animationDuration = Math.random() * 3 + 5 + "s";
      document.body.appendChild(flower);

      setTimeout(() => flower.remove(), 8000);
    }, 300);
    return () => clearInterval(interval);
  }, []);



  return (
    
   <div className="min-h-screen bg-gradient-to-b from-pink-300 via-purple-100 to-yellow-100 flex flex-col items-center justify-center p-6">
      
      {/* Animated Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4 mt-8 animate-fadeIn text-center">
        💖 Happy Raksha Bandhan 💖
      </h1>
       <br />
      {/* Animated Quote */}
      <p className="text-lg md:text-xl italic font-bold text-red-600 max-w-2xl text-center animate-slideUp">
        "A bond of love, a bond of togetherness, it's a thread that binds our
        lives and our hearts forever."
      </p>

      {/* Image */}
      <div className="mt-8 animate-bounceSlow">
        <img
          src={rakhiImage}
          alt="Raksha Bandhan Celebration"
          className="w-72 md:w-96 rounded-xl shadow-lg"
        />
      </div>

      {/* Footer Text */}
      <p className="mt-8 text-gray-600 text-sm animate-fadeIn">
        Made with ❤️ for Raksha Bandhan
      </p>
      <p className="mt-8 text-gray-600 text-sm animate-fadeIn">
        Share with Your ❤️ Sisters....
        & Brothers.....
      </p>
    </div>
  )
}

export default App
