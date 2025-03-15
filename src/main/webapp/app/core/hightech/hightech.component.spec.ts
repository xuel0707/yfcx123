import { vitest } from 'vitest';
import { ref } from 'vue';
import { shallowMount } from '@vue/test-utils';
import hightech from './hightech.vue';

type HomeComponentType = InstanceType<typeof hightech>;

describe('hightech', () => {
  let hightech: HomeComponentType;
  let authenticated;
  let currentUsername;
  const homeService = { openhome: vitest.fn() };

  beforeEach(() => {
    authenticated = ref(false);
    currentUsername = ref('');
    const wrapper = shallowMount(hightech, {
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
    hightech = wrapper.vm;
  });

  it('should not have user data set', () => {
    expect(hightech.authenticated).toBeFalsy();
    expect(hightech.username).toBe('');
  });

  it('should have user data set after authentication', () => {
    authenticated.value = true;
    currentUsername.value = 'test';

    expect(hightech.authenticated).toBeTruthy();
    expect(hightech.username).toBe('test');
  });

  it('should use hightech service', () => {
    hightech.openhome();

    expect(homeService.openhome).toHaveBeenCalled();
  });
});
