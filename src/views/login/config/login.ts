export const rules = {
  name: [
    {
      required: true,
      message: '用户名必填~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母或数字~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码必填~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位及以上的字母或数字~',
      trigger: 'blur'
    }
  ]
}

export const rules_phone = {
  tel: [
    {
      required: true,
      message: '手机号必填~',
      trigger: 'blur'
    },
    {
      pattern: /^[1][0-9]{10}$/,
      message: '请输入11位数字的手机号~',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码必填~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '请输入6位数字的验证码~',
      trigger: 'blur'
    }
  ]
}
