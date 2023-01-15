import { Breadcrumb } from 'antd'
import React from 'react'

export default function BreadcrumbX() {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}
  >
    <Breadcrumb.Item>User</Breadcrumb.Item>
    <Breadcrumb.Item>Bill</Breadcrumb.Item>
  </Breadcrumb>
  )
}
