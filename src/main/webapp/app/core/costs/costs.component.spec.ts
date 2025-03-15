import { vitest } from 'vitest';
import { ref } from 'vue';
import { shallowMount } from '@vue/test-utils';
import costs from './costs.vue';

type HomeComponentType = InstanceType<typeof costs>;

describe('costs', () => {
  let costs: HomeComponentType;
  let authenticated;
  let currentUsername;
  const homeService = { openhome: vitest.fn() };

  beforeEach(() => {
    authenticated = ref(false);
    currentUsername = ref('');
    const wrapper = shallowMount(costs, {
      global: {
        stubs: {
          'router-link': true,
        },
        provide: {
          homeService,
          authenticated,
          currentUsername,
        },
      },
    });
    costs = wrapper.vm;
  });

  it('should not have user data set', () => {
    expect(costs.authenticated).toBeFalsy();
    expect(costs.username).toBe('');
  });

  it('should have user data set after authentication', () => {
    authenticated.value = true;
    currentUsername.value = 'test';

    expect(costs.authenticated).toBeTruthy();
    expect(costs.username).toBe('test');
  });

  it('should use costs service', () => {
    costs.openhome();

    expect(homeService.openhome).toHaveBeenCalled();
  });
});
