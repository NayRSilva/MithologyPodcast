import { FC } from 'react';
import styled from 'styled-components';
import { Link } from './model/episodeAttributes';

export interface ExternalLinksProps {
  links: Link[];
}

const Box = styled.section`
  background: #d9d9d9;
  border-radius: 1rem;

  padding: 0.8rem 0.8rem 0.8rem 2.4rem;
`;

export const ExternalLinks: FC<ExternalLinksProps> = ({ links }) => {
  return (
    <Box>
      <ul>
        {links.map(({ text, url }) => (
          <li>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default ExternalLinks;
