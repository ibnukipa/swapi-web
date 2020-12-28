// @flow

import React, { useEffect }  from 'react';
import { Card, Container, Pagination, Segment } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { characterListSelector, characterListStateSelector } from '../storage/slicers/characters';
import { listFetch } from '../storage/slicers/characters';
import CharacterCard, { CharacterCardPlaceholder } from '../components/character/CharacterCard';

const Dashboard = () => {
  const dispatch = useDispatch();

  //data
  const charactersState = useSelector(state => characterListStateSelector(state));
  const characters = useSelector((state => characterListSelector(state)));

  useEffect(() => {
    dispatch(listFetch({ page: 1 }))
  }, [dispatch])

  const onPageChange = (e, { activePage }) => {
    dispatch(listFetch({ page: activePage }))
  }

  return (
    <Container>
      <Card.Group itemsPerRow={5} textAlign={'center'}>
        {charactersState.isLoading
          ? (
            <>
              <CharacterCardPlaceholder />
              <CharacterCardPlaceholder />
              <CharacterCardPlaceholder />
              <CharacterCardPlaceholder />
              <CharacterCardPlaceholder />
              <CharacterCardPlaceholder />
              <CharacterCardPlaceholder />
              <CharacterCardPlaceholder />
            </>
          )
          : characters.map((item => (
            <CharacterCard id={item.id}/>
          )))
        }
      </Card.Group>
      <Segment basic textAlign={'center'}>
        <Pagination onPageChange={onPageChange} totalPages={Math.ceil(charactersState?.meta?.total / 10)} />
      </Segment>
    </Container>
  );
};

export default Dashboard;
