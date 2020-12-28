import React from 'react';
import { useSelector } from 'react-redux';
import { characterDetailSelector } from '../../storage/slicers/characters';
import { Button, Card, Header, Placeholder } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

export const CharacterCardPlaceholder = () => (
  <Card>
    <Card.Content>
      <Placeholder>
        <Placeholder.Header>
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line length='very short' />
          <Placeholder.Line />
          <Placeholder.Line length='very short' />
          <Placeholder.Line />
          <Placeholder.Line length='very short' />
        </Placeholder.Paragraph>
      </Placeholder>
    </Card.Content>
    <Card.Content extra>
      <Button disabled primary fluid>See More</Button>
    </Card.Content>
  </Card>
);

const CharacterCard = ({ id }) => {
  const history = useHistory();
  const character = useSelector(state => characterDetailSelector(state, id));
  return (
    <Card key={`character-${id}`}>
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Description>
          <Header sub>Birth Year</Header>
          <span>{character.birthYear}</span>
          <Header sub>Eye Color</Header>
          <span>{character.eyeColor}</span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button primary fluid onClick={() => history.push(`/character/${id}`)}>See More</Button>
      </Card.Content>
    </Card>
  );
};

export default CharacterCard;
