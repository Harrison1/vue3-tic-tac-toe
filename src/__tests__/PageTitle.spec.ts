import { mount } from '@vue/test-utils'
import PageTitle from '../components/PageTitle.vue'

describe('PageTitle', () => {
  
  it('should equal title variable text', () => {
    const text = 'Super Cool Title'
    const wrapper = mount(PageTitle, { props: { text } })

    expect(wrapper.find('h1').text()).toEqual(text)
  })

  it('should equal default text', () => {
    const wrapper = mount(PageTitle)

    expect(wrapper.find('h1').text()).toEqual('Title')
  })

})
