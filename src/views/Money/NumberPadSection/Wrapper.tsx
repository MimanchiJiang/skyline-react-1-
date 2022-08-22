import styled from "styled-components";


const Wrapper = styled.section`
  display:flex;
  flex-direction: column;
  > .output{
    background:white;
    font-size: 36px;
    line-height: 72px;
    text-align:right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{ 
    .back{
      margin-top: 5px;
      width: 30px;
      height: 30px;
    }
    > button{
      font-size: 23px;
      font-weight: bold;
      color:rgb(84,96,72) ;
      float: left; width: 25%; height: 64px; border: none;
      &.ok{ height: 128px; float: right; }
      &.zero{ width: 50%; }
      &:nth-child(1), 
      &:nth-child(2),
      &:nth-child(5),
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) ,
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10),
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13),
      &:nth-child(12),
      &:nth-child(14) {
        background:rgb(181,202,161)
      }
    }
    button:active{
      background: #c3d3b4;
    }
  }
`;

export default Wrapper