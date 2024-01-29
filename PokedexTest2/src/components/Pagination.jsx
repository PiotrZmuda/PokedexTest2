import styled from "styled-components";

const Container = styled.div`
  display: flex;
  button {
    transition: transform 0.1s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <Container>
      <button onClick={onLeftClick}>◀</button>
      <div>
        {page}/{totalPages}
      </div>
      <button onClick={onRightClick}>▶</button>
    </Container>
  );
};
export default Pagination;
