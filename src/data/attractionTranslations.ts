import { tourFeatureLabelsEN } from './tourTranslations';

export interface AttractionTranslation {
  name?: string;
  destination?: string;
  description?: string;
  duration?: string;
  type?: string;
}

/**
 * Traducciones manuales al inglés de las atracciones de venetravel.com.
 * Clave = id numérico. Los "features" se resuelven con tourFeatureLabelsEN.
 */
export const attractionTranslationsEN: Record<number, AttractionTranslation> = {
  7: {
    name: 'Waterland Sea Encounter',
    destination: 'Margarita Island',
    duration: '25 minutes',
    type: 'National',
    description: 'Waterland Park is located on Margarita Island and offers marine fun for the whole family through swimming with dolphins, the Sea Encounter, a dolphin show, a sea lion show, an exotic bird exhibition and the only Venezuelan wildlife zoo. In addition, for people with disabilities, they offer the successful Dolphin Therapy program provided by the Dolphin Research Center of Venezuela.',
  },
  6: {
    name: 'Waterland Dolphin Encounter',
    destination: 'Margarita Island',
    duration: '12 minutes',
    type: 'National',
    description: 'Waterland Park is located on Margarita Island and offers marine fun for the whole family through swimming with dolphins, the Sea Encounter, a dolphin show, a sea lion show, an exotic bird exhibition and the only Venezuelan wildlife zoo. In addition, for people with disabilities, they offer the successful Dolphin Therapy program provided by the Dolphin Research Center of Venezuela.',
  },
  5: {
    name: 'Waterland Swim with Dolphins',
    destination: 'Margarita Island',
    duration: '20 minutes',
    type: 'National',
    description: 'Waterland Park is located on Margarita Island and offers marine fun for the whole family through swimming with dolphins, the Sea Encounter, a dolphin show, a sea lion show, an exotic bird exhibition and the only Venezuelan wildlife zoo. In addition, for people with disabilities, they offer the successful Dolphin Therapy program provided by the Dolphin Research Center of Venezuela.',
  },
  4: {
    name: 'Parque El Agua (Water Park)',
    destination: 'Margarita Island',
    duration: 'Full Day',
    type: 'National',
    description: "It is Venezuela's first water park. It began operations on February 11, 2001, and since then it has remained one of the best and most fun options to enjoy a day full of excitement on Margarita Island.",
  },
};

export { tourFeatureLabelsEN as attractionFeatureLabelsEN };
