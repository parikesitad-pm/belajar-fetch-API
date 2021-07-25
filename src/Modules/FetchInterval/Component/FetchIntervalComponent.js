import { Avatar, Col, Row } from 'antd'

import { Button } from 'antd/lib/radio'
import { CCardWrap } from '../../../Assets/Components/CCards/CCards'
import React from 'react'

const FetchIntervalComponent = (props) => {
  const { user, loading, users, addNewUser } = props

  const { picture, name, gender, email } = user

  const fullName = `${name?.title} ${name?.first} ${name?.last}`

  // console.log(users)
  const renderUsers = users.map((item, index) => {
    const userName = `${item.name.title} ${item.name.first} ${item.name.last}`

    return (
      <Col style={{ margin: 12 }} key={index}>
        <CCardWrap>
          <Avatar size={64} src={item.picture.thumbnail} />
          <p>{userName}</p>
          <p>{item.gender}</p>
          <p>{item.email}</p>
        </CCardWrap>
      </Col>
    )
  })

  return (
    <div style={{ maxWidth: '1100px' }}>
      <Row style={{ justifyContent: 'center' }}>
        <Col style={{ margin: 12 }}>
          {loading === true || user === '' ? (
            <h1>Loading...</h1>
          ) : (
            <CCardWrap>
              <Avatar size={64} src={picture.thumbnail} />
              <p>{fullName}</p>
              <p>{gender}</p>
              <p>{email}</p>
            </CCardWrap>
          )}
        </Col>
      </Row>
      <Button onClick={addNewUser}>Add User</Button>
      <Row style={{ justifyContent: 'center' }}>
        {!users || users === [] ? <h1>Loading ...</h1> : renderUsers}
      </Row>
    </div>
  )
}

export default FetchIntervalComponent
