import React from 'react';
import { useSelector } from 'react-redux';
import { characterDetailSelector } from '../../storage/slicers/characters';
import { Button, Card, Placeholder } from 'semantic-ui-react';

export const CharacterCardPlaceholder = () => (
  <Card>
    <Card.Content>
      <Placeholder>
        <Placeholder.Header>
          <Placeholder.Line length='very short' />
          <Placeholder.Line length='medium' />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line/>
          <Placeholder.Line/>
        </Placeholder.Paragraph>
      </Placeholder>
    </Card.Content>
    <Card.Content extra>
      <Button disabled primary>See More</Button>
    </Card.Content>
  </Card>
)

const CharacterCard = ({ id }) => {
  const character = useSelector(state => characterDetailSelector(state, id));
  return (
    <Card key={`character-${id}`}>
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button primary>See More</Button>
      </Card.Content>
    </Card>
  );
};

export default CharacterCard;
