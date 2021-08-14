import styled from 'styled-components'

export const Styles = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
    font-family: 'Century Gothic';
    padding: 10px;
  `,
  ImgContainer: styled.div`
    width: 30%;
    border: solid 1px grey;
    border-radius: 5px;
    margin-right: 10px;
    height: 100px;
    width: 100px;
  `,
  InfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
  `,
  Title: styled.div`
    font-weight: bold;
    color: black;
    width: 100%;
  `,
  Type: styled.div`
    color: black;
    font-size: 15px;
    width: 100%;
  `,
  Adress: styled.div`
    color: black;
    width: 100%;
    font-size: 10px;
  `,
}
