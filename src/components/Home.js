import React, { useContext } from "react";
import "./scroll.js";
import "./Home.css";
import { LoginContext } from "../context/LoginContext";
import  Navbar from "../components/Navbar";


export const Home = () => {
    const restaurant = useContext(LoginContext);
    // const sustainability = useContext(LoginContext);
    //const chef = useContext(LoginContext);


    return (
        <>
            <Navbar />
            {/* home */}
            <section class="home">
                <div class="max-width">
                    <div class="home-content">
                        {restaurant?.ambiance?.description}
                    </div>
                </div>
            </section>
            {/* initiatives */}
            <section class="services" id="services">
                <div class="max-width">
                    <h1 class="title"><b>Initiatives</b></h1>
                    <div class="serv-content">
                        <div class="card">
                            <div class="box">
                            <i class="fas fa-laptop-code"></i>
                            <div class="text">Farm-to-Table</div>
                            <p>Passionate web developer with a flair for coding and problem-solving. Committed to creating responsive and user-friendly websites. Eager to contribute and learn collaboratively.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                        <i class="fas fa-code"></i>
                        <div class="text">Waste Reduction</div>
                        <p>Aspiring Flutter developer with a love for crafting cross-platform, visually appealing apps. Committed to seamless user experiences and continuous learning.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                    <i class="fa-solid fa-camera-retro"></i>
                    <div class="text">Ocean-Friendly Seafood</div>
                        <p>Versatile artist capturing moments with creativity. Passionate about visual storytelling, bringing emotions to life through frames.</p>
                    </div>
                </div>
            </div>
        </div>
       </section>

       {/* awards */}
       <section class="awards" id="awards">
                <div class="max-width">
                    <h1 class="title"><b>Awards</b></h1>
                    <div class="award-content">
                        <div class="card">
                            <div class="box">
                            <i class="fas fa-laptop-code"></i>
                            <div class="text">2023 Michelin Guide</div>
                            <p>Passionate web developer with a flair for coding and problem-solving. Committed to creating responsive and user-friendly websites. Eager to contribute and learn collaboratively.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                        <i class="fas fa-code"></i>
                        <div class="text">2022 James Beard Foundation</div>
                        <p>Aspiring Flutter developer with a love for crafting cross-platform, visually appealing apps. Committed to seamless user experiences and continuous learning.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                    <i class="fa-solid fa-camera-retro"></i>
                    <div class="text">2021 World's 50 Best Restaurants</div>
                        <p>Versatile artist capturing moments with creativity. Passionate about visual storytelling, bringing emotions to life through frames.</p>
                    </div>
                </div>
            </div>
        </div>
       </section>

       {/* chefs */}
       <section class="about" id="about">
        <div class="max-width">
          <h2 class="title">About Our Chef</h2>
          <div class="about-content">
            <div class="column left">
              <img src="https://i.pinimg.com/564x/d3/c4/2c/d3c42c4d91c6d24b89bf8ab2175e9f75.jpg" alt="Profile Image 626x626" />
            </div>
            <div class="column right">
              <div class="text">{restaurant?.chef?.name} <span class="typing-2"></span></div>
              <p>{restaurant?.chef?.bio}</p>
              <br />
              <div class="text">Signature Dish</div>
              <p>{restaurant?.chef?.signature_dish}</p>
            </div>
          </div>
        </div>
      </section>

      {/* reviews */}
      <section class="reviews" id="reviews">
        <div class="max-width">
          <h2 class="title">Reviews</h2>
          <div class="carousel owl-carousel">
            <div class="card1">
              <div class="box">
                <div class="text">Snake Game</div>
                <p>Eat, grow, avoid boundaries. Maximize size before collision.</p>
              </div>
            </div>
            <div class="card1">
              <div class="box">
                <div class="text">Portfolio</div>
                <p>Showcasing skills and projects: my journey in design and development.</p>
              </div>
            </div>
            <div class="card1">
              <div class="box">
                <div class="text">ChatApp</div>
                <p>User-friendly chat rooms, Node.js, Express, Socket.io.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
};
