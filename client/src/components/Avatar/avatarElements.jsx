import styled from 'styled-components';

export const UploadForm = styled.form`
  width: 100%;
  display: flex;
`;

export const UploadAvatarLabel = styled.label`
  position: relative;
  user-select: none;

  min-width: 100%;
  aspect-ratio: 1/1;

  border-radius: 100%;

  cursor: pointer;

  &:hover::before {
    content: ${(props) => `"${props.label}"`};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background: var(--black-secondary);

    font-size: 1.5rem;
    text-decoration: underline;
    color: var(--white);

    display: grid;
    place-items: center;
    text-align: center;
  }
`;

export const Picture = styled.img`
  width: 100%;

  aspect-ratio: 1/1;
  border-radius: 100%;

  object-fit: cover;
  object-position: center;

  border: 1px solid var(--black-quaternary);
  vertical-align: bottom;
  &:not([src]) {
    display: none;
  }
`;

export const FileInput = styled.input`
  display: none;
`;
