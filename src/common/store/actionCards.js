export const AREA = 'AREA';
export function sortArea(payload) {
  return { type: AREA, payload };
}

export const DEPENDENT = 'DEPENDENT';
export function filterDependent(payload) {
  return { type: DEPENDENT, payload };
}

export const INDEPENDENT = 'INDEPENDENT';
export function filterIndependent(payload) {
  return { type: INDEPENDENT, payload };
};

export const POPULATION = 'POPULATION';
export function sortPopulation(payload) {
  return { type: POPULATION, payload };
};