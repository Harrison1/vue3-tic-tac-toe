import { mount } from '@vue/test-utils'
import XO from '../components/XO.vue'

describe('XO Component', () => {
  
  it('should display X', () => {
    const claimed = 1
    const wrapper = mount(XO, { props: { claimed } })

    expect(wrapper.find('div').text()).toEqual('X')
  })

  it('should display O', () => {
    const claimed = 2
    const wrapper = mount(XO, { props: { claimed } })

    expect(wrapper.find('div').text()).toEqual('O')
  })

  it('should not render', () => {
    const claimed = 0
    const wrapper = mount(XO, { props: { claimed } })

    expect(wrapper.find('div').exists()).toBe(false)
  })

})
