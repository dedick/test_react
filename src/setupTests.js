import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest-fetch-mock').enableFetchMocks();

Enzyme.configure({ adapter: new Adapter() });