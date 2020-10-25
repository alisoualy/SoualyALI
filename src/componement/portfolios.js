import React from 'react';

export default function Portfolios() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>Projets scolaires</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>développement Web | ASP .NET MVC</strong>
                </h6>
                <p>
                Réalisation d’un site web de réservation de vol
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>développement Web | ASP .NET MVC / JavaScript</strong>
                </h6>
                <p>
                Réalisation d’un site web de gestion de bidonvilles a Casa en utilisant l’api javascript for ArcGIS
                </p>
              </blockquote>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>développement Web | J2ee et MySql</strong>
                </h6>
                <p>
                Réalisation d’un site web de commerce
                </p>
              </blockquote>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>développement Web | Visual Studio</strong>
                </h6>
                <p>
                Réalisation d’un site web pour cartographier l’évolution spatio-temporelle des malades 
                covid-19 au Maroc en utilisant(HTML, CSS, Javascript, Node.js, PostgreSQL, PostGIS, Geoserver, API Openlayers)
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
