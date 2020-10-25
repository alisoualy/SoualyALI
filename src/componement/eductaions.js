import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Date</th>
								<th>Diplome</th>
								<th>Ecole / université</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>2016</td>
								<td>Diplôme Bacalauréat Science maths B, mention bien</td>
								<td>
									Lycée Azhar erriad 2 (Casablanca)
								</td>
							</tr>
							<tr>
								<td>2018</td>
								<td>Diplôme ‘ DEUST’ en Maths, info, physique</td>
								<td>
									Faculté de science et technique (Settat)
								</td>
							</tr>
							<tr>
								<td>2021(en cours)</td>
								<td>Diplôme d’ingenieur en SIG</td>
								<td>
								ecole hassania des travaux publics (Casablanca)
								</td>
							</tr>
							
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
