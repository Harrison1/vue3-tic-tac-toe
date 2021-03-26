import { mount } from '@vue/test-utils'
import RedText from '../components/RedText.vue'

describe('RedText', () => {
  
  it('should display error message', () => {
    const showError = true
    const message = 'Error Text'
    const wrapper = mount(RedText, { props: { showError, message } })

    expect(wrapper.find('p').text()).toEqual(message)
  })

  it('should not render', () => {
    const showError = false
    const wrapper = mount(RedText, { props: { showError } })

    expect(wrapper.find('p').exists()).toBe(false)
  })

})
