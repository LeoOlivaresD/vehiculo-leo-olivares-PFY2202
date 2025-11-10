// Catálogo de marcas y modelos disponibles
export const marcasYModelos = {
  Toyota: ["Corolla", "Yaris", "RAV4", "Hilux", "Camry", "C-HR"],
  Honda: ["Civic", "Accord", "CR-V", "HR-V", "City", "Fit"],
  Chevrolet: ["Cruze", "Onix", "Tracker", "Sail", "Spark", "Camaro"],
  Mazda: ["3", "CX-5", "CX-30", "2", "6", "CX-9"],
  Nissan: ["Sentra", "Versa", "Kicks", "X-Trail", "Qashqai", "Leaf"],
  Ford: ["Focus", "Escape", "Explorer", "Mustang", "Ranger", "F-150"],
  Hyundai: ["Elantra", "Tucson", "Santa Fe", "Accent", "Kona", "Venue"],
  Kia: ["Cerato", "Sportage", "Seltos", "Rio", "Sorento", "Soul"],
  Volkswagen: ["Jetta", "Tiguan", "Golf", "Polo", "Passat", "T-Cross"],
  Suzuki: ["Swift", "Vitara", "Baleno", "S-Cross", "Jimny", "Ertiga"],
};

// Obtener lista de marcas
export const getMarcas = () => Object.keys(marcasYModelos);

// Obtener modelos según la marca
export const getModelos = (marca) => marcasYModelos[marca] || [];

// Años disponibles (últimos 30 años)
export const getAnios = () => {
  const anioActual = new Date().getFullYear();
  const anios = [];
  for (let i = anioActual + 1; i >= anioActual - 29; i--) {
    anios.push(i);
  }
  return anios;
};