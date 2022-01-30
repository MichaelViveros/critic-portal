import { mount } from '@vue/test-utils'
import Critic from '@/components/Critic.vue'

describe('Critic.vue', () => {

  let propsData

  beforeEach(() => {
    propsData = {
      critic: {
        name: "Justin Chang",
        bio: "Chief film critic for the LA Times.",
        imagePath: "../assets/justin-chang.jpeg",
        randomFacts: [
          "Had a line in Minari",
          "Has met Michael Viveros",
          "Ryan Coogler is a big fan",
          "Favourite movie is Chunking Express"
        ],
      }
    }
  })
  
  it('renders correctly', () => {
    const wrapper = mount(Critic, { propsData })
    expect(wrapper).toMatchSnapshot(); 
  })

  it('displays random fact when button is clicked', async () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    const wrapper = mount(Critic, { propsData })
    expect(wrapper.text()).toContain(propsData.critic.randomFacts[0])
    await wrapper.find('button').trigger('click')
    // 0.5 * 4 = 2, fact with index 2 is 'randomly' chosen
    expect(wrapper.text()).toContain(propsData.critic.randomFacts[2])
  })
})
