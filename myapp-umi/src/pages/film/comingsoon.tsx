import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
export default function comingsonn() {
  const [list, setList] = useState<any>([])
  useEffect(() => {
    axios.get('/ajax/comingList?ci=30&token=&limit=10&optimus_uuid=56792AA06A0811F190C1B90B8D7ACA71D50F4FF65BA547ABB1B4010FC7FCAB4F&optimus_risk_level=71&optimus_code=10')
      .then(res => {
        setList({
          list: res.data.coming
        })
      })
  }, [])
  console.log(list)
  return (
    <div>comingsonn</div>
  )
}
