import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>profil</strong>
          </h6>
          <p className="grey-text">
          Madame, monsieur, désireux de relever de nouveaux challenges, motiver pour apprendre, également
rigoureux, respectueux ,ponctuel, autonome et curieux, je souhaiterais rejoindre vos effectifs afin de
participer aux développement de vos projets.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>information personnel</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Casablanca Maroc
              </p>
              <p>
                <strong>Email:</strong> alisoualy01@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 07 07 07 29 26
              </p>
              <p>
                <strong>Age:</strong> 21 ans
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Langue maternelle</strong> - Arabe
              </p>
              <p>
                <strong>deuxieme langue</strong> - Francais
              </p>
              <p>
                <strong>Troisieme langue</strong> - Anglais
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
