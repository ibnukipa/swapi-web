// @flow

import React, { useState } from 'react';
import { Breadcrumb, Container, Grid, Header, List, Segment } from 'semantic-ui-react';
import {  useSelector } from 'react-redux';
import { dbIdSelector } from '../../storage/slicers/database';
import { useParams, useHistory } from 'react-router-dom';

const CharacterDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [breadcrumbs] = useState([
    { key: 'characters', content: 'Characters', link: true, onClick: () => history.goBack() },
    { key: 'detail', content: 'Detail' }
  ]);

  //data
  const character = useSelector(state => dbIdSelector(state, { id, modelName: 'character' }));

  return (
    <Container>
      <Breadcrumb icon='right angle' sections={breadcrumbs} />
      <Header as='h1' attached={'top'}>
        <Header.Content>{character.name}</Header.Content>
      </Header>
      <Segment attached>
        <Grid columns={3} divided>
          <Grid.Row >
            <Grid.Column>
              <List selection verticalAlign='middle'>
                <List.Item>
                  <List.Content>
                    <List.Description className='head'>Birth Year</List.Description>
                    <List.Header>{character.birthYear}</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List selection verticalAlign='middle'>
                <List.Item>
                  <List.Content>
                    <List.Description className='head'>Height</List.Description>
                    <List.Header>{character.height}</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List selection verticalAlign='middle'>
                <List.Item>
                  <List.Content>
                    <List.Description className='head'>Mass</List.Description>
                    <List.Header>{character.mass}</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row >
            <Grid.Column>
              <List selection verticalAlign='middle'>
                <List.Item>
                  <List.Content>
                    <List.Description className='head'>Hair Color</List.Description>
                    <List.Header>{character.hairColor}</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List selection verticalAlign='middle'>
                <List.Item>
                  <List.Content>
                    <List.Description className='head'>Skin Color</List.Description>
                    <List.Header>{character.skinColor}</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List selection verticalAlign='middle'>
                <List.Item>
                  <List.Content>
                    <List.Description className='head'>Eye Color</List.Description>
                    <List.Header>{character.eyeColor}</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row >
            <Grid.Column>
              <List selection verticalAlign='middle'>
                <List.Item>
                  <List.Content>
                    <List.Description className='head'>Movies</List.Description>
                    <List.Header>{character.films?.length}</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List selection verticalAlign='middle'>
                <List.Item>
                  <List.Content>
                    <List.Description className='head'>Vehicles</List.Description>
                    <List.Header>{character.vehicles?.length}</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List selection verticalAlign='middle'>
                <List.Item>
                  <List.Content>
                    <List.Description className='head'>Starships</List.Description>
                    <List.Header>{character.starships?.length}</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default CharacterDetail;
