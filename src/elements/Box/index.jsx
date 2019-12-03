import styled from 'styled-components/macro';

import { layout, flexbox, color, fontSize, space} from 'styled-system';

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${fontSize}
  ${color}
  ${layout}
  ${flexbox}
`;

Box.propTypes = {
};

export default Box;
