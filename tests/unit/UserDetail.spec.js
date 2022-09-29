import { mount } from '@vue/test-utils'
import UserDetail from '@/components/UserDetail.vue'

const $store = {
  state: {
    user: {
      firstName: 'test',
      lastName: 'tes2',
      middleName: 'middle',
      dob: '12/1/2020',
    },
  },
  commit: jest.fn(),
}

const wrapper = mount(UserDetail, {
  global: {
    mocks: {
      $store,
    },
  },
  data() {
    return {
      responseData: {},
    }
  },
})

describe('UserDetail component', () => {
  test('renders user info', () => {
    expect(wrapper.find('.user-info').html()).toContain('test')
    expect(wrapper.find('.user-info').html()).toContain('tes2')
    expect(wrapper.find('.user-info').html()).toContain('middle')
  })
})
