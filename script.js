body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-image: url('bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  backdrop-filter: blur(4px);
  color: white;
  overflow-x: hidden;
}

header {
  text-align: center;
  padding: 40px 20px 20px;
  font-size: 2.5em;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px #000;
  transform: rotate(-2deg);
}

.swipe-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 20px;
  padding: 20px;
}

.swipe-container::-webkit-scrollbar {
  display: none;
}

.swipe-item {
  min-width: 80%;
  scroll-snap-align: start;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 15px;
  backdrop-filter: blur(6px);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.swipe-item img {
  max-width: 100%;
  border-radius: 20px;
}

.swipe-item audio, .swipe-item iframe {
  margin-top: 10px;
  width: 100%;
}

.swipe-item p {
  margin-top: 10px;
  font-size: 1.2em;
  color: #fffa;
}