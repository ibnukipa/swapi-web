// @flow

import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const Error404 = () => {
  const history = useHistory();
  return (
    <Container>
      <Segment placeholder>
        <Header icon>
          <Icon name='search' />
          We don't have any pages matching your query.
        </Header>
        <Segment.Inline>
          <Button primary onClick={() => history.goBack()}>Go Back</Button>
        </Segment.Inline>
      </Segment>
    </Container>
  );
}

export default Error404;
