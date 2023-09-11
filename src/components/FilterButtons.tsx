import styled from '@emotion/styled';

export const FilterButtons = ({ uniqueIds }: { uniqueIds: string[] }) => {
  return (
    <Container>
      {uniqueIds.map((id, index) => (
        <Button key={index}>{id}</Button>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  margin-bottom: 24px;
  margin-left: 40px;
`;

const Button = styled.button`
  padding: 12px 16px;

  color: white;
  font-size: 16px;
  line-height: 1;

  border: none;
  border-radius: 8px;
  background-color: #505050;
`;
