// @flow

import React, { useState } from 'react';
import { Breadcrumb, Container, Header } from 'semantic-ui-react';
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
      <Header as='h1'>
        <Header.Content>{character.name}</Header.Content>
      </Header>
      <Header sub>Birth Year</Header>
      <span>{character.birthYear}</span>
      <Header sub>Height</Header>
      <span>{character.height}</span>
      <Header sub>Mass</Header>
      <span>{character.mass}</span>
      <Header sub>Hair Color</Header>
      <span>{character.hairColor}</span>
      <Header sub>Skil Color</Header>
      <span>{character.skinColor}</span>
      <Header sub>Eye Color</Header>
      <span>{character.eyeColor}</span>
      <Header sub>Gender</Header>
      <span>{character.gender}</span>
    </Container>
  );
};

export default CharacterDetail;
