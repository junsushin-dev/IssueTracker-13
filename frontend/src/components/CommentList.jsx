import React, { useContext } from 'react';

import styled from 'styled-components';

import CommentListItem from '../components/CommentListItem';
import CommentInput from '../components/CommentInput';
import { IssueDetailContext } from '../pages/IssueDetailPage';

const List = styled.div`
  padding: 16px;
`;

export default function CommentList({ id }) {
  const { issueDetail } = useContext(IssueDetailContext);
  return (
    <List>
      {issueDetail.Comments && issueDetail.Comments.map((comment, i) => {
        return (
          <CommentListItem
            key={i}
            author={comment.User}
            description={comment.description}
          />
        );
      })}
      <CommentInput id={id}/>
    </List>
  );
}
