import Project from "../components/Project"

function Portfolio() {
    return <main>
        <section className="portfolio page">
            <section className="portfolio-main">
                <Project
                    title="Bored Games"
                    github="https://github.com/Ashlhc/Bored-Games-Front-End.git"
                    link="https://wellington-j-gallowsby-hangman.netlify.app/"
                    image="/React-Portfolio/images/Campricorn.png"
                />
                <Project 
                    title="Pokemon Quiz" 
                    github="https://github.com/TianPnce/code-quiz.git" 
                    link="https://tianpnce.github.io/code-quiz/" 
                    image="/react-portfolio/public/images/pokemon_quiz.png"
                />
                <Project 
                    title="Note Taker" 
                    github="https://github.com/TianPnce/express.js-note-taker.git" 
                    link="https://expressjs-note-taker25.herokuapp.com/" 
                    image="/react-portfolio/public/images/note_taker.png"
                />
                <Project 
                    title="Weather Forecast" 
                    github="https://github.com/TianPnce/weather-dashboard.git" 
                    link="https://tianpnce.github.io/weather-dashboard/" 
                    image="/react-portfolio/public/images/weather-forecast.png"
                />
            </section>
        </section>
    </main>
}

export default Portfolio;