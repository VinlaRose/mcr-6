export {Navbar} from './navigation/nav'
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);