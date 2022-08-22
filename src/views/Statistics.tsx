import Layout from '../components/Layout';
import React, { ReactNode, useState } from 'react';
import { CategorySection } from './Money/CategorySection';
import styled from 'styled-components';
import { useRecords, RecordItem } from '../hooks/useRecord';
import useTags from 'hooks/useTags';
import dayjs from 'dayjs'




const Item = styled.div`
  caret-color: transparent;

display: flex;
justify-content: space-between;
background: white;
font-size: 18px;
line-height: 20px;
padding: 10px 16px;
>.note{
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
>.amount{
}
`

const Header = styled.h3`
  caret-color: transparent;
  background: #dfebd3;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  color: rgb(140,138,144);
`



function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const { records } = useRecords()
  const { getName } = useTags()
  const hash: { [K: string]: RecordItem[] } = {}
  const selectedRecords = records.filter(r => r.category == category)


  selectedRecords.map(r => {
    const key = dayjs(r.createdAt).format('YYYY年MM月DD日')
    if (!(key in hash)) {
      hash[key] = []
    }
    hash[key].push(r)
  })
  //Object.entries  把对象变成数组
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0
    if (a[0] > b[0]) return -1
    if (a[0] < b[0]) return 1
    return 0
  })
  console.log(array)

  return (
    <Layout>
      <CategorySection value={category} onChange={value => setCategory(value)} />
      {array.map(([date, records]) => <div>
        <Header>
          {date}
        </Header>
        <div>
          {records.map(r => {
            return <Item key={r.createdAt}>
              <div className="tags oneLine">
                {r.tagIds.map(tagId =>
                  <span key={tagId}>{getName(tagId)}</span>)
                  .reduce((result, span, index, array) =>
                    result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
                }
              </div>
              {r.note && <div className='note'>
                {r.note}
              </div>}
              <div className='amount'>
                ￥{r.amount}
              </div>
            </Item>
          })}</div>
      </div>)}

    </Layout >
  );
}


export default Statistics;
