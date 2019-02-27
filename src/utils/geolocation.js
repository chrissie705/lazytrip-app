const errors = [
  'UNKNOWN_ERROR', // (valeur numérique 0) - La procédure d'acquisition de la position a échoué à cause d'une erreur non définie dans la liste des codes erreurs suivante.
  'PERMISSION_DENIED', // (valeur numérique 1) - La procédure d'acquisition de la position a échoué car l'application n'a pas l'autorisation d'utiliser l'API de Geolocalisation.
  'POSITION_UNAVAILABLE', // (valeur numérique 2) - La position de l'appareil n'a pu être déterminée. Une ou plusieurs sources utilisées pour l'acquisition de la position ont renvoyé une erreur interne causant l'échec total de la procédure.
  'TIMEOUT' // (valeur numérique 3) - La durée de temps maximum spécifiée a été dépassée avant que la procédure d'acquisition puisse récupérer un nouvel objet Position.
]

export function getCurrentPosition() {
  const option = {
    enableHighAccuracy: true,
    timeout: 50000,
    maximumAge: 0
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      /* position = {
        coords: {
          accuracy: 20
          altitude: null
          altitudeAccuracy: null
          heading: null
          latitude: 48.762552400000004
          longitude: 2.443337
          speed: null
        }
      } */
      position => resolve(position),
      error => {
        alert(errors[error.code], error.message)
        reject(error);
      },
      option
    );
  });
}
