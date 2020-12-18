import styled from "styled-components";

export const ChatRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const Message = styled.div`
  width: 75%;
  background-color: #e76424;
  color: black;
  padding-top: 5px;
  padding-right: 15px;
  margin-right: 5px;
  text-align: right;
  border-radius: 15px;
`;

export const FriendRow = styled(ChatRow)`
  justify-content: flex-start;
`;

export const FriendMessage = styled.div`
  width: 75%;
  display: "grid";
  grid-template-rows: 20px 30px;
  background-color: #202428;
  border: 1px solid lightgray;
  padding-top: 5px;
  padding-left: 15px;
  text-align: left;
  margin-left: 5px;
  border-radius: 15px;
`;

export const Name = styled.p`
  grid-row: 1;
  color: #fff;
  text-align: end;
  margin: 0;
  font-size: 10px;
`;

export const Friend = styled.p`
  grid-row: 1;
  color: #e76424;
  text-align: start;
  margin: 0;
  font-size: 10px;
`;

export const Text = styled.p`
  grid-row: 2;
  color: #202428;
  font-size: 12px;
`;

export const TextFriend = styled.p`
  grid-row: 2;
  color: lightgray;
  font-size: 12px;
`;
