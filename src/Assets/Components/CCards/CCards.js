import { Card } from 'antd'
import React from 'react'

const { Meta } = Card

export const CCards = (props) => {
  const { user } = props

  const fullName = `${user.last_name} ${user.first_name}`

  return (
    <Card
      hoverable
      style={{ width: 200 }}
      cover={<img alt={fullName} src={user.avatar} />}
    >
      <h4>{fullName}</h4>
      <h5>{user.email}</h5>
      <small>{user.gender}</small>
      <Meta description="www.instagram.com" />
    </Card>
  )
}

export const CCardWrap = (props) => {
  const { cardTittle, children } = props
  return (
    <Card
      hoverable
      title={cardTittle}
      bordered={false}
      style={{ width: 300 }}
      {...props}
    >
      {children}
    </Card>
  )
}
