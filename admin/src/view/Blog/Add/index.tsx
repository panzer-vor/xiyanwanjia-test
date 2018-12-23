import * as React from 'react'
import { Form, Input, Button, Radio, message  } from 'antd';
import { IForm } from '@interface/common'
import { IArticle } from './index.interface'
import http from '@tools/http'

const RadioGroup = Radio.Group
const FormItem = Form.Item
function ArticleAdd(props: IForm) {
  const formItemLayout = {
    wrapperCol: {
      sm: { span: 24 },
      xs: { span: 24 },
    },
  }
  const articleAdd = async (values: IArticle) => {
    const res: any = await http.post('/articles', values)
    message.success(res)
  }
  const handleSubmit = (e: any) => {  // 表单验证
    e.preventDefault()
    props.form.validateFields((err: any, values: IArticle) => {
      if (!err) {
        articleAdd(values)
      }
    })
  }
  const { getFieldDecorator } = props.form
  return (
    <Form onSubmit={handleSubmit}>
      <FormItem label="标题" {...formItemLayout}>
        {getFieldDecorator('title', {
          rules: [
            { required: true, message: 'Please input title!' },
          ],
        })(
          <Input />
        )}
      </FormItem>
      <FormItem label="简介" {...formItemLayout}>
        {getFieldDecorator('desc')(
          <Input.TextArea autosize={true} />
        )}
      </FormItem>
      <FormItem label="文章" {...formItemLayout}>
        {getFieldDecorator('article', {
          rules: [
            { required: true, message: 'Please input article!' },
          ],
        })(
          <Input.TextArea autosize={true} />
        )}
      </FormItem>
      <FormItem label="访问权限" {...formItemLayout}>
        {getFieldDecorator('accessAuthority', {
          rules: [
            { required: true, message: 'Please choose role!' },
          ],
        })(
          <RadioGroup>
            <Radio value={1}>超级管理员</Radio>
            <Radio value={2}>管理员</Radio>
            <Radio value={10}>任何人</Radio>
          </RadioGroup>
        )}
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">执行</Button>
      </FormItem>
    </Form>
  )
}

export default Form.create()(ArticleAdd)