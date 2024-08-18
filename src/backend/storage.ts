export interface Settings {
  timer: number,
  difficulty: number,
  questionQuantity: number, 
  questionTypes: {
    sum: boolean,
    subtraction: boolean,
    division: boolean,
    multiplication: boolean
  }
};

let defaultSettings = {
  timer: 20,
  difficulty: 3,
  questionQuantity: 20,
  questionTypes: {
    sum: true,
    subtraction: false,
    division: false,
    multiplication: false
  }
};

export function writeSettings(settings: Settings) {
  localStorage.setItem('settings', JSON.stringify(settings));
}

export function readSettings(): Settings {
  let settingsString = localStorage.getItem('settings');

  if (settingsString) {
    return JSON.parse(settingsString);
  }

  return defaultSettings
}
