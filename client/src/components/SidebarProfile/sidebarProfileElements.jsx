import styled from 'styled-components';
import { Label, Link } from '../../theme/appElements';

export const Container = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  position: fixed;
  max-width: 296px;

  display: flex;
  flex-direction: column;
  padding-block: 32px;
  gap: 16px;
  z-index: 99;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${(props) => !props.inline && 'column'};
  gap: ${(props) => (props.inline ? '8px' : '4px')};
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 1.5rem;
  color: var(--black-tertiary);
`;

export const LabelInfos = styled(Label)`
  ${Link} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
