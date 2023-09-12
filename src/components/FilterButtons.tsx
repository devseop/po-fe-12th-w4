import styled from '@emotion/styled';
import { COLORS } from '../constants/constants';
import { useFilter } from '../hooks/useFilter';

export const FilterButtons = ({ uniqueIds }: { uniqueIds: string[] }) => {
  const { filteringTheKey, setFilteringTheKey } = useFilter();

  const buttonClickHandler = (id: string) => {
    if (filteringTheKey === id) {
      setFilteringTheKey(undefined);
    } else {
      setFilteringTheKey(id);
    }
  };

  return (
    <Container>
      {uniqueIds.map((id, index) => (
        <Button
          key={index}
          onClick={() => buttonClickHandler(id)}
          isActive={filteringTheKey === id}
        >
          {id}
        </Button>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  margin-bottom: 24px;
  margin-left: 40px;
`;

const Button = styled.button<{ isActive: boolean }>`
  padding: 12px 16px;

  color: white;
  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? '700' : '500')};
  line-height: 1;

  border: none;
  border-radius: 8px;
  background-color: ${(props) => (props.isActive ? COLORS.blue.base : COLORS.gray.base)};

  cursor: pointer;

  /* &:hover {
    background-color: ${COLORS.gray.dimmed};
  }

  &:focus {
    font-weight: 700;
    background-color: ${COLORS.blue.base};
  }

  &:active {
    font-weight: 700;
    background-color: ${COLORS.blue.base};
  } */
`;
