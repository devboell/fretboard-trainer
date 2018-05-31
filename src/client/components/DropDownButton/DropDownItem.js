import styled from 'styled-components'

const DropDownItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  color: black;
  list-style: none;
  border-top: 1px solid gray;

  :first-child {
    border-top: none;
    border-radius: 5px 5px 0px 0px;
  }

  :last-child {
    border-radius: 0px 0px 5px 5px;
  }

  :hover {
    background-color: rgb(248,248,248);
  }
`

export default DropDownItem
