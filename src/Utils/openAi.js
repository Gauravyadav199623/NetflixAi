import OpenAI from 'openai';
import { OPENAI_API_KEY } from './constants';



const openai = new OpenAI({
//   apiKey: process.env.REACT_APP_OPENAI_API_KEY, // This is the default and can be omitted
    apiKey:OPENAI_API_KEY,
    dangerouslyAllowBrowser:true
    //because we are calling from the clint side and not the server side 

});
export default openai