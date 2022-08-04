import {
  marsTemplate,
} from '@styles';
import { Theme } from './types';

// ================================
// CONSTANTS
// ================================

export const THEME_DICTIONARY = {
  mars: marsTemplate,
};

export const getThemeTemplate = (theme: Theme) => {
  if (THEME_DICTIONARY[theme]) {
    return THEME_DICTIONARY[theme];
  }
  return marsTemplate;
};

export const DATE_LIST = ['locale', 'utc'];

export const TX_LIST = ['compact', 'detailed'];
