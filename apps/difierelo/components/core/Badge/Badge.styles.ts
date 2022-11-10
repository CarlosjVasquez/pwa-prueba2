import styled from 'styled-components';
import BSBadge from 'react-bootstrap/Badge';

export const BadgeContainer = styled(BSBadge)`
  display: flex;
  align-items: center;
  background-color: #fff !important;
  padding: 0.5em 1em;
  color: #11171d;
  font-weight: normal;
  font-size: 1.28vw;

  span.icon {
    font-size: 1.75vw;
  }
`;
