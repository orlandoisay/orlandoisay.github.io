export const dictionary = {
  'ProgLang_Title': {
    'en': 'Programming Languages',
    'es': 'Lenguajes de programación',
  },
  'ProgLang_Years': {
    'en': '{{years}} years',
    'es': '{{years}} años',
  }
};

export class i18nBuilder {
  constructor(dict) {
    this.dict = dict;
  }
  
  getString = (lang, key, val) => {
    let str = this.dict[key][lang];

    for (let prop in val) 
      str = str.replace(`{{${prop}}}`, val[prop]);
    
    return str;
  }
};
