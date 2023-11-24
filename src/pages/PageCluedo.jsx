import tidus from "../assets/tidus.png";
import { useState } from "react";
import "./PageCluedo.css";

function PageCluedo() {
  const [toutouVisible, setToutouVisible] = useState(false);

  const handleToutouToggle = () => {
    setToutouVisible(!toutouVisible);
  };

  return (
    <>
      <h2 className="main-title">Aide le Père Michel &#x1F50D;</h2>
      <img
        src="https://www.alunira.com/IMG/arton19.png?1472629116"
        alt="une-image"
        className="img-detective"
      ></img>
      <div>
        <figcaption className="explication">
          <h1>Accessoires : </h1>
          <div className="scenar-set">
          <button type="button" className="scenar-button">Télécharge le scénario !&#x1F609;<img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/lock-portrait.png" alt="lock-portrait"/> </button>
          </div>
          <h1>Explications : </h1>
          <p>Aide le Père Michel qui a perdu son chien ! Il n'a pas l'air d'être dans la maison, ni dans le jardin, où a t-il pu aller &#128551; ?!  Avec l'aide de
            Papa et Maman (et du scénario !) réalise ta première enquête afin
            de le retrouver !
          </p>
          <div className="button-set">
          <button className="button-toutou" onClick={handleToutouToggle}>
            {toutouVisible ? "Cacher Toutou" : "Voir Toutou"}
          </button>
          </div>
          {toutouVisible && <img src={tidus} alt="Toutou" className="img-tidus" />}
          <p className="last-p">Tu pourrai commencer par aller voir la Mère Michelle ? &#x1F606;</p>
        </figcaption>
      </div>
      <div className="avis">
        <h1> Avis : </h1>
        <article className="article1">
          <h4>C'était super ! &#x1F495;&#x1F495;&#x1F495;&#x1F495;&#x1F495; 5/5</h4>
          <p>J'ai joué à ce scénario avec mes 15 enfants, ils ont tout simplement adoré !</p>
          <p className="last-p">Brian B. - Paris 20</p>
        </article>
        <article className="article2">
          <h4>Principe intéressant &#x1F495;&#x1F495;&#x1F495;&#x1F495;&#x1F495; 5/5</h4>
          <p>Un jeu basé sur l'observation et la déduction. Très convivial. Ambiance et bonne humeur garanties !</p>
          <p className="last-p">Céline B. - Paris 20</p>
        </article>
        <article className="article3">
          <h4>#Free Tidus &#x1F495;&#x1F495;&#x1F495;&#x1F495; 4/5</h4>
          <p>J'ai déjà vu ce chien quelque part &#129300;</p>
          <p className="last-p">Mickael L. - Paris 20</p>
        </article>
      </div>
    </>
  );
}

export default PageCluedo;