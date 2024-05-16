import React, { useEffect, useState } from 'react';
import '../assets/styles/about.css'
import community1 from '../assets/images/logo.png'
import community2 from '../assets/images/logo.png'
import community3 from '../assets/images/logo.png'
import community4 from '../assets/images/logo.png'
import community5 from '../assets/images/logo.png'
import bull from '../assets/images/logo.png'
import binocular from '../assets/images/logo.png'
import eclipse from '../assets/images/logo.png'
import communityarrow from '../assets/images/logo.png'
import simply from '../assets/images/logo.png'
import exclusive from '../assets/images/logo.png'
import create from '../assets/images/logo.png'

export const About = () => {
  // const [scrollY, setScrollY] = useState(0);
  // community
  // STYLE BG : #1E6E76
  const [currentCard, setCurrentCard] = useState(1); // Initial card index
  const timeinterval = 5000; // Time interval for automatic sliding

  const handlePrevClick = () => {
    setCurrentCard((prev) => (prev === 1 ? 5 : prev - 1)); // Updated to handle five cards
    // setProgress(0);
  };

  const handleNextClick = () => {
    setCurrentCard((prev) => (prev === 5 ? 1 : prev + 1)); // Updated to handle five cards
    // setProgress(0);
  };


  // set timeinterval for next
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, timeinterval);


    return () => {
      clearInterval(interval);
      // clearInterval(progressInterval);
    };
  }, []);

  return (
    <>
      <main className='aboutmain' style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100vw",
        // padding: "2rem",
        // color: "#fff"
      }}>


        <div className='allabout' style={{ display: "flex" }}>
          <div className='aboutsections' style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>

            <section id='sectiona'>
              <div className='read'>
                Read
              </div>
              {/* <h1 style={{ fontSize: "3.5rem", margintop: "10rem", textAlign: "center" }}>About Us</h1> */}
              <div className='sectionadiv' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div id='aboutimgcontainer'>
                  <img src={bull} alt='placeholder' />
                  <div className='lines'>
                    <div id='line1' className='line'></div>
                    <div id='line2' className='line'></div>
                    <div id='line3' className='line'></div>
                    <div id='line4' className='line'></div>
                    <div id='line5' className='line'></div>
                    <div id='line6' className='line'></div>
                    <div id='line7' className='line'></div>
                    <div id='line8' className='line'></div>
                    <div id='line9' className='line'></div>
                    <div id='line10' className='line'></div>
                    <div id='line11' className='line'></div>
                  </div>
                </div>
                <div className='crazynestingsectiona' >
                 
                  <div className='aboutusheading'>
                    <span>
                      {/* about the firm */}
                    </span>
                    <p>
                      what is predixstock?
                    </p>
                  </div>
                  <div className='paragraph_abt'>
                    <p>
                      Introducing our Stock Monitoring Platform, your go-to tool for staying informed and in control of your investments. Our platform offers a sleek and intuitive interface designed to empower users to effortlessly track their stock portfolio in real-time. With our platform, users can easily monitor the performance of their stocks, receive instant updates on market fluctuations, and access comprehensive analytics to make informed decisions. Whether you're a seasoned investor or just starting out, our user-friendly dashboard provides valuable insights and data visualizations to help you stay ahead of the curve. Key features include customizable watchlists, personalized alerts for price changes and news updates, and interactive charts for in-depth analysis. Whether you're on your desktop or mobile device, our platform ensures seamless access anytime, anywhere. Take charge of your financial future with our Stock Monitoring Platform and experience the convenience and confidence of having your investments at your fingertips.
                      {/* We're like the leaders in making corporate jargon easy-peasy. */}
                    </p>
                    <p style={{
                      color: "rgba(28, 101, 109, 1)",
                      fontWeight: "700"
                    }}>
                      {/* <u>
                        Learn More
                      </u> */}
                    </p>
                  </div>
                  
                </div>
                <div className='crazystuffbg'></div>
                {/* <span className='aboutimgbef'></span> */}
              </div>
              <div className='riches'>
                Riches
              </div>
            </section>
            {/* <img src={wave} alt='wave' style={{ width: "100%", height: "auto" }} /> */}

            <section id='sectionb' style={{ display: "flex" }}>
              <div className='binocular'>
                <img src={binocular} alt='binocular' />
              </div>
              <div className='bruh' style={{ position: "relative" }}>
   
                <div className='binocularvision'>
                  <p className='v'>
                    Our Vision
                  </p>
                  <p>
                    Empowering informed decisions through clear financial insights.
                  </p>
                </div>
                {/* <h2>Our Vision</h2> */}
                <p>
                  We're predixstock, and our vision is to transform exploring the stock market from a mundane task into an exciting adventure. Our approach is straightforward: keep it simple, get wildly creative, and make it feel exclusive.

                  Imagine a masterpiece where every piece of market information tells a captivating story—that's us, weaving insight into every detail. Our vision is to be the pioneers of an era where diving into the stock market isn't a chore but a mind-blowing revelation. And we're bringing that vision to life with our platform.

                </p>
              </div>

              <span className='linevision'></span>
              <span className='circle'></span>
            </section>

            <section id='pickstock'>
              <div>
                <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                  <h3 style={{ textAlign: "left", fontSize: "2rem", marginBottom: "2rem", textTransform: "capitalize", color: "#000", width: "40%", lineHeight: "3rem" }}>How do we pick companies?
                  </h3>
                  <div className='linecircle'>
                    <div className='linevision'></div>
                    <div className='circle'></div>
                  </div>
                </div>
                <div className='pickstockcontent'>
                  {/* <div style={{ paddingRight: "10rem" }}> */}
                  <div className='pickstockcontent1'>
                    {/* <span className='picktopcolor'>
                    <img className='pickcmpy' src={pickcmpy} alt="error" />
                  </span> */}
                    <span className="circle2">
                      <span className="num">2</span>
                    </span>
                    <span className='pickonlytext'>
                      <span className='title_one'>
                        Spotting the market leaders
                      </span>
                      <span className='pickpara'>
                        Our algorithm is like a spotlight that identifies the companies standing tall in their industries. These are the heavyweights, the names that echo throughout the market with their established dominance                  </span>
                    </span>
                  </div>
                  {/* <span className='polygonbottom1'></span> */}

                  {/*//////////////////////////  */}
                  {/* <span className='pickstockcircleglow'></span> */}

                  <div className='pickstockcontent2'>
                    {/* <span className='picktopcolor'>
                    <img className='pickcmpy' src={pickcmpy} alt="error" />
                  </span> */}
                    <span className="circle2" id='circle2'>
                      <span className="num">1</span>
                    </span>
                    <span className='pickonlytext'>
                      <span className='title_one'>
                        Unveiling Our In-House Algorithm
                      </span>
                      <span className='pickpara'>
                        At predixstock, our company selection process is powered by a proprietary algorithm developed in-house. This algorithm serves as our compass in the vast landscape of stocks, helping us pinpoint companies that fall into distinct categories.
                      </span>
                    </span>
                  </div>
                  {/* <span className='polygonbottom2'></span> */}

                  {/* //////////////////////////// */}

                  <div className='pickstockcontent3'>
                    {/* <span className='picktopcolor'>
                    <img className='pickcmpy' src={pickcmpy} alt="error" />
                  </span> */}
                    <span className="circle2">
                      <span className="num">3</span>
                    </span>
                    <span className='pickonlytext'>
                      <span className='title_one'>
                        Seeking hidden gems with growth potential
                      </span>
                      <span className='pickpara'>
                        Going beyond the obvious, our algorithm uncovers companies flying under the radar but with huge growth potential. These hidden gems might be undervalued now, but our tool predicts a promising future with substantial upside                 </span>
                    </span>
                  </div>
                  {/* <span className='polygonbottom3'></span> */}
                </div>
                <div className='pickstockbtns'>
                  <button className='pickstockbtn'>
                    <span>
                      2
                    </span>
                  </button>
                  <button className='pickstockbtn' id='pickstockbtn1'>
                    <span>
                      1
                    </span>
                  </button>
                  <button className='pickstockbtn'>
                    <span>
                      3
                    </span>
                  </button>
                </div>
              </div>
              <div className='pickimage'>
                <img src={bull} alt='bull' />
              </div>
              <div className='pickimgbgblue'>
              </div>
            </section>

            <div className='bruh1'>
              <div>
                <h2>
                  Three pillars that made us
                </h2>
                {/* <p>
                  This emphasizes the differentiating factors that make you stand out.
                </p> */}
                <div className='linecircle'>
                  <div className='linevision'></div>
                  <div className='circle'></div>
                </div>
              </div>
              {/* <div> */}
              <img src={eclipse} alt='eclipse' />
              {/* </div> */}
              <div className='elements'>
                <div className='pillarcontainer' id='pillar1' >
                  {/* <div className='pillar'>
                    <img src={pillartop} className='pillartopimg' alt='pillar' />
                    <img src={pillartoppart} className='pillartoppartimg' alt='pillar' />
                    <div className="pillarrectangle"></div>
                    <div className="pillarrectangle2"></div>
                    <div className="pillarrectangle3"></div>
                  </div> */}
                  <div className='eleimg'>
                    <img src={create} alt='creativity' />
                  </div>
                  <div className='elecontent'>
                    <h3 style={{ fontSize: "1.5rem", }}>Creativity</h3>
                    <p>
                    We're not just number-crunchers; we're the artists of business analysis. We transform dull data into engaging stories and visuals. Imagine your financial data as a cool graphic novel – that's the level of creativity we bring to the table.
                    </p>
                  </div>
                </div>

                <div className='pillarcontainer' id='pillar2'>
                  {/* <div className='pillar'>
                    <img src={pillartop} className='pillartopimg' alt='pillar' />
                    <img src={pillartoppart} className='pillartoppartimg' alt='pillar' />
                    <div className="pillarrectangle"></div>
                    <div className="pillarrectangle2"></div>
                    <div className="pillarrectangle3"></div>
                  </div> */}
                  <div className='eleimg'>
                    <img src={simply} alt='Simplicity' />
                  </div>
                  <div className='elecontent'>
                    <h3 style={{ fontSize: "1.5rem", }}>Simplicity</h3>
                    <p>
                    We're the ones simplifying the business maze. No complicated jargon – we break down info on public companies so that everyone can understand. It's like turning a financial report into a plain, easy story that even your neighbor could follow.
                    </p>
                  </div>
                </div>

                <div className='pillarcontainer' id='pillar3'>
                  {/* <div className='pillar'>
                    <img src={pillartop} className='pillartopimg' alt='pillar' />
                    <img src={pillartoppart} className='pillartoppartimg' alt='pillar' />
                    <div className="pillarrectangle"></div>
                    <div className="pillarrectangle2"></div>
                    <div className="pillarrectangle3"></div>
                  </div> */}
                  <div className='eleimg'>
                    <img src={exclusive} alt='Exclusivity' />
                  </div>
                  <div className='elecontent'>
                    <h3 style={{ fontSize: "1.5rem", }}>Exclusivity</h3>
                    <p>
                    Picture us as your access card to a more profound understanding of businesses. We go beyond the surface, offering insights that set you apart. It's not just information; it's a curated experience that positions you as an informed player in the business world.
                    </p>
                  </div>
                </div>

              </div>
              <img src={eclipse} alt='eclipse' />


              {/* {console.log(rotation)} */}
              {/* <div className={`abouticons rotate-${rotation}`
                }>
                  <img src={logo} width={"200px"} style={{
                    backgroundColor: "#da726b",
                    borderRadius: "50%", transform: "translate(62%, 2%)",
                  }} alt='logo' />
                  <img src={logo2} style={{
                    backgroundColor: "#f2d0b8",
                    borderRadius: "50%", transform: "translate(-92%, 89%)"
                  }} width={"200px"} alt='logo' />
                  <img src={logo3} style={{
                    backgroundColor: "#f56400",
                    borderRadius: "50%", transform: "translate(118%, -13%)"
                  }} width={"200px"} alt='logo' />
                </div> */}
            </div>
            <div className="bruh1bef"></div>



            {/* <span style={{ width: "100%", display: "flex", justifyContent: "center", position: "relative", scale: "0.85", marginBottom: "6rem" }}>
              <span className='hrcircle'></span>
              <hr />
            </span> */}

            <section id="community">
              {/* <h2 style={{ fontSize: "2rem", textAlign: "center", textTransform: "capitalize", color: "var(--Rectangle-78, #1C656D)" }}>What our community is saying?</h2> */}
              <div>
                <h2>
                  What our community is saying?
                </h2>
                {/* <p>
                  This emphasizes the differentiating factors that make you stand out.
                </p> */}
                <div className='linecircle'>
                  <div className='linevision'></div>
                  <div className='circle'></div>
                </div>
              </div>
              <div className='communitycards' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <button className='prev' onClick={handlePrevClick}>
                  <img src={communityarrow} alt="error" />
                </button>

                <div className='cardone' style={{
                  display: 'flex', justifyContent: 'space-evenly',
                  transform: `translateX(${currentCard === 1 ? '0%' : '100%'})`
                }}>

                  <div className='cardinfo'>
                    <div className='bluetriangle'>

                    </div>
                    <div className='communityimg'>
                      <img src={community1} alt='placeholder' />
                    </div>
                    <div className='cardinfocontent'>
                      <p className='communityname'>
                        Ashish Gandhi
                      </p>
                      <p className='communityplace'>
                        Ambit Capital, IIM-C
                      </p>
                      <p className='communitypara'>
                        "The work on the reports showcases meticulous research. In-depth industry analysis explores trends, and challenges, backed by solid assumptions in DCF and valuation models. Peer benchmarking adds depth, while clear communication and insights
                        offer a valuable resource for understanding the company's potential and industry trends."
                      </p>
                      {/* <div className='rating'>
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />

                      </div> */}
                    </div>
                  </div>
                </div>

                <div className='cardtwo' style={{ display: 'flex', justifyContent: 'space-evenly', transform: `translateX(${currentCard === 2 ? '0%' : '200%'})` }}>

                  <div className='cardinfo'>
                    <div className='bluetriangle'>

                    </div>
                    <div className='communityimg'>
                      <img src={community2} alt='placeholder' />
                    </div>
                    <div className='cardinfocontent'>
                      <p className='communityname'>
                        Karan Galhotra,
                      </p>
                      <p className='communityplace'>
                        iVentures Capital
                      </p>
                      <p className='communitypara'>
                        "Personally, I rely on their insightful research reports for my investment strategy.
                        They delve deep into market trends and fundamental analysis to give unbiased insights.
                        Indeed, a trustworthy resource for both novice and seasoned investors."
                      </p>
                      {/* <div className='rating'>
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />

                      </div> */}
                    </div>
                  </div>
                </div>

                <div className='cardthree' style={{ display: 'flex', justifyContent: 'space-evenly', transform: `translateX(${currentCard === 3 ? '0%' : '300%'})` }}>

                  <div className='cardinfo'>
                    <div className='bluetriangle'>

                    </div>
                    <div className='communityimg'>
                      <img src={community3} alt='placeholder' />
                    </div>
                    <div className='cardinfocontent'>
                      <p className='communityname'>
                        Sanket Ahuja
                      </p>
                      <p className='communityplace'>
                        Ambit Capital, IIM-C
                      </p>
                      <p className='communitypara'>
                        "I've gotta give a big shoutout to predixstock – their reports are like my secret weapon for understanding companies.
                        The way they dive into industry stuff with solid assumptions in DCF and valuation models is on another level.
                        It's like having a cheat code for decoding the business world – super helpful!".
                      </p>
                      {/* <div className='rating'>
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />

                      </div> */}
                    </div>
                  </div>
                </div>

                <div className='cardfour' style={{ display: 'flex', justifyContent: 'space-evenly', transform: `translateX(${currentCard === 4 ? '0%' : '400%'})` }}>

                  <div className='cardinfo'>
                    <div className='bluetriangle'>

                    </div>
                    <div className='communityimg'>
                      <img src={community4} alt='placeholder' />
                    </div>
                    <div className='cardinfocontent'>
                      <p className='communityname'>
                        Garima Gupta
                      </p>
                      <p className='communityplace'>
                        Ambit Capital, IIM-C
                      </p>
                      <p className='communitypara'>

                        "Using predixstock is a game-changer for me. Their reports break down industry trends and challenges in a way that just makes sense.
                        The clear insights, backed by DCF and valuation models, are like a roadmap for understanding a company's potential.
                        Seriously, they make the complex stuff feel like a breeze!"
                      </p>
                      {/* <div className='rating'>
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />

                      </div> */}
                    </div>
                  </div>
                </div>

                <div className='cardfive' style={{ display: 'flex', justifyContent: 'space-evenly', transform: `translateX(${currentCard === 5 ? '0%' : '500%'})` }}>

                  <div className='cardinfo'>
                    <div className='bluetriangle'>

                    </div>
                    <div className='communityimg'>
                      <img src={community5} alt='placeholder' />
                    </div>
                    <div className='cardinfocontent'>
                      <p className='communityname'>
                        Shubhangi Mishra
                      </p>
                      <p className='communityplace'>
                        Ambit Capital, IIM-C
                      </p>
                      <p className='communitypara'>
                        "predixstock is my go-to for company insights, no doubt. Their reports are like a friend explaining the business scene – simple, yet spot-on.
                        The industry analysis, combined with clear insights and smart assumptions in DCF and valuation models, is pure gold. They just get it!".
                      </p>
                      {/* <div className='rating'>
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />
                        <img src={communitystar} alt='communitystar' />

                      </div> */}
                    </div>
                  </div>
                </div>

                {/* Previous and Next Arrows */}
                <button className='after' onClick={handleNextClick}>
                  <img src={communityarrow} style={{ rotate: "180deg" }} alt="error" />
                </button>
              </div>
              {/* small bar indicating the above timeinterval for handleclick */}
              {/* <div className='progress-bar'>
              <div className='progress' style={{ width: `${(progress / timeinterval) * 100}%`, backgroundColor:"white",height:"10px" }}></div>
            </div> */}
            </section>

          </div>


        </div>
      </main>
    </>
  );
};
