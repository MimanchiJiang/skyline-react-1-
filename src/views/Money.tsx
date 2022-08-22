import Layout from '../components/Layout';
import React, { useState } from 'react';
import styled from 'styled-components';
import { TagsSection } from './Money/TagsSection';
import { CategorySection } from './Money/CategorySection';
import { NoteSection } from './Money/NoteSection';
import { NumberPadSection } from './Money/NumberPadSection';
import { useRecords } from '../hooks/useRecord';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0

}

type Category = '-' | '+'
function Money() {
  const [selected, setSelected] = useState(defaultFormData)
  //获取selected的类型
  //Partial obj的类型是Selected的部分类型
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  const { records, addRecord } = useRecords();
  console.log(records)

  const submit = () => {
    addRecord(selected)
    alert('保存成功')
    setSelected(defaultFormData)
  }
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
        onChange={tagIds =>
          onChange({ tagIds })} />
      <NoteSection value={selected.note}
        onChange={note => {
          onChange({ note })
        }} />
      <CategorySection value={selected.category}
        onChange={category =>
          onChange({ category })
        } />
      <NumberPadSection value={selected.amount}
        onChange={
          amount => {
            onChange({ amount })
          }
        }
        onOk={submit} />

    </MyLayout>
  );
}

export default Money;
