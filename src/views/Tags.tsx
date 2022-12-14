import Layout from '../components/Layout';
import React from 'react';
import useTags from 'hooks/useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { Link } from 'react-router-dom'
import Button from 'components/Button';
import Center from 'components/Center';
import Space from 'components/Space';

const TagList = styled.ol`
  caret-color: transparent;

font-size: 16px;
background:white;
>li{
  line-height: 20px;
  border-bottom: 1px solid rgb(181,202,161);
  margin-left: 16px;
  margin-right: 16px;
  >a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0 12px 12px;

  }
}

`




function Tags() {
  // eslint-disable-next-line
  const { tags, setTags, AddTag } = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name='right'></Icon>
            </Link>
          </li>
        )}

      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button onClick={AddTag}>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
