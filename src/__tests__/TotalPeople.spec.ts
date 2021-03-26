import { mount } from '@vue/test-utils'
import TotalPeople from '../components/TotalPeople.vue'

describe('TotalPeople', () => {
  it('should display 0 People', () => {
    const total = 0
    const wrapper = mount(TotalPeople, { props: { total } })

    expect(wrapper.find('p').text()).toEqual('0 People')
  })

  it('should display 1 Person', () => {
    const total = 1
    const wrapper = mount(TotalPeople, { props: { total } })

    expect(wrapper.find('p').text()).toEqual('1 Person')
  })

  it('should display 2 People', () => {
    const total = 2
    const wrapper = mount(TotalPeople, { props: { total } })

    expect(wrapper.find('p').text()).toEqual('2 People')
  })

  it('should display 100 People', () => {
    const total = 100
    const wrapper = mount(TotalPeople, { props: { total } })

    expect(wrapper.find('p').text()).toEqual('100 People')
  })

  it('should display 5 People Watching', () => {
    const total = 5
    const text = 'Watching'
    const wrapper = mount(TotalPeople, { props: { total, text } })

    expect(wrapper.find('p').text()).toEqual('5 People Watching')
  })

  it('should display 8 People in the Room', () => {
    const total = 8
    const text = 'in the Room'
    const wrapper = mount(TotalPeople, { props: { total, text } })

    expect(wrapper.find('p').text()).toEqual('8 People in the Room')
  })

})
