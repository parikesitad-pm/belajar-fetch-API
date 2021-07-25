import { Col, Row } from 'antd'

import { CCards } from '../../../Assets/Components/CCards/CCards'
import React from 'react'

const FetchUserComponent = (props) => {
  const { users, loading } = props

  const usersMap = users.map((user) => {
    return (
      <Col style={{ margin: 12 }} key={user.id}>
        <CCards user={user} />
      </Col>
    )
  })
  return <>{loading === true ? <h1>Loading...</h1> : <Row>{usersMap}</Row>}</>
}

export default FetchUserComponent
