import { vitest } from 'vitest';
import { ref } from 'vue';
import { shallowMount } from '@vue/test-utils';
import home from './home.vue';

type HomeComponentType = InstanceType<typeof home>;

describe('home', () => {
  let home: HomeComponentType;
  let authenticated;
  let currentUsername;
  const homeService = { openhome: vitest.fn() };

  beforeEach(() => {
    authenticated = ref(false);
    currentUsername = ref('');
    const wrapper = shallowMount(home, {
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
    home = wrapper.vm;
  });

  it('should not have user data set', () => {
    expect(home.authenticated).toBeFalsy();
    expect(home.username).toBe('');
  });

  it('should have user data set after authentication', () => {
    authenticated.value = true;
    currentUsername.value = 'test';

    expect(home.authenticated).toBeTruthy();
    expect(home.username).toBe('test');
  });

  it('should use home service', () => {
    home.openhome();

    expect(homeService.openhome).toHaveBeenCalled();
  });
});
