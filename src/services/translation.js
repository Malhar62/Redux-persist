import LocalizedStrings from 'react-native-localization';
import arabic from './arabic';
import english from './en'
import hindi from './hindi';

const strings = new LocalizedStrings({
    en: english,
    hind: hindi,
    arab: arabic
})
export default strings;
