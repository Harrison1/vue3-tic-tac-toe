import { mount } from '@vue/test-utils'
import GameBoardGrid from '../components/GameBoardGrid.vue'

describe('GameBoardGrid Component', () => {
  
  it('should not contain border classes', () => {
    const bottomBorder = false
    const rightBorder = false
    const wrapper = mount(GameBoardGrid, { props: { bottomBorder, rightBorder } })

    expect(wrapper.classes('border-b-2')).toBe(false)
    expect(wrapper.classes('border-r-2')).toBe(false)
  })

  it('should only contain border-b-2', () => {
    const bottomBorder = true
    const rightBorder = false
    const wrapper = mount(GameBoardGrid, { props: { bottomBorder, rightBorder } })

    expect(wrapper.classes('border-b-2')).toBe(true)
    expect(wrapper.classes('border-r-2')).toBe(false)
  })

  it('should only contain border-r-2', () => {
    const bottomBorder = false
    const rightBorder = true
    const wrapper = mount(GameBoardGrid, { props: { bottomBorder, rightBorder } })

    expect(wrapper.classes('border-b-2')).toBe(false)
    expect(wrapper.classes('border-r-2')).toBe(true)
  })

  it('should contain both border-b-2 and border-r-2', () => {
    const bottomBorder = true
    const rightBorder = true
    const wrapper = mount(GameBoardGrid, { props: { bottomBorder, rightBorder } })

    expect(wrapper.classes('border-b-2')).toBe(true)
    expect(wrapper.classes('border-r-2')).toBe(true)
  })

})
