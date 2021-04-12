import React from "react";
import './formation.css';

const Project = () => {
    return ( 
        <React.Fragment>
            <h2 id="formation">Etudes et Formations</h2>
            <div className="timeline" data-aos="fade-up">
                
                <div className="timeline-body">
                    <div className="time">Juillet 2020</div>
                    <div className="title">Master 1 en MIAGE</div>
                    <div className="timeline-content">Obtention du Master 1 en MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises) en 2020 au Groupe Ecole Superieure de Commerce de Dakar (Supdeco).</div>
                </div>

                <div className="timeline-body">
                    <div className="time">Juin 2019</div>
                    <div className="title">Licence en MIAGE</div>
                    <div className="timeline-content">Obtention de la licence en MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises) en 2019 au Groupe Ecole Supérieure de Commerce de Dakar (Supdeco).</div>
                </div>

                <div className="timeline-body">
                    <div className="time">Août 2016</div>
                    <div className="title">Baccalauréat Litteraire</div>
                    <div className="timeline-content">Obtention du baccalauréat littéraire en 2016 au Lycée Galandou Diouf.</div>
                </div>
                
            </div>
        </React.Fragment>
     );
}
 
export default Project;