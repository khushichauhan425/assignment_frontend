import axios from "axios";
import { useEffect, useState } from "react"
import "../styles/About.css";

function About() {
  const [article, setArticle] = useState({summary: 'Loading...'});
  const query = 'IIT Bombay';
  useEffect(() => {

      const options = {
        method: 'GET',
        url: `http://localhost:3000/about?q=${query}`,
      };
      axios.request(options).then(function (response) {
        setArticle(response.data);
        console.log(response.data);
      }).catch(function (error) {
        setArticle('Error');
      })
  }, [])
  return (
    <div className="summary">
      {article.summary}
    </div>
  )
}

export default About