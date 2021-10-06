import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 text-black-900 bg-white`};
  }

  a {
    ${tw`text-grey-600 hover:text-grey-700`};
  }

  p + p {
    ${tw`mt-3`};
  }
`;
