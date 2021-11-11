import styled from '@emotion/styled'
import React from 'react'
const SortList = styled.div`
  display: block;
  height: 55px;
  border-top: 5px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 20px;
`
const UL = styled.ul`
  padding-inline-start: 0;
`
const LI = styled.li`
  display: inline-block;
  text-align: center;
  margin-left: 15px;
  color: #858885;
  font-size: 14px;
  line-height: 20px;
  list-style: none;
  :first-of-type {
    margin-left: 25px;
  }
  :not(:last-of-type)::after {
    content: '|';
    margin-left: 15px;
    color: #ebebeb;
  }
`
function Tablist() {
  return (
    <SortList>
      <UL>
        <LI>최신순</LI>
        <LI>낮은 가격순</LI>
        <LI>높은 가격순</LI>
      </UL>
    </SortList>
  )
}

export default Tablist
