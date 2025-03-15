import { vitest } from 'vitest';
import { ref } from 'vue';
import { shallowMount } from '@vue/test-utils';
import forget-pwd from './forget-pwd.vue';

type HomeComponentType = InstanceType<typeof forget-pwd>;

describe('forget-pwd', () => {
  let forget-pwd: HomeComponentType;
  let authenticated;
  let currentUsername;
  const homeService = { openhome: vitest.fn() };

  beforeEach(() => {
    authenticated = ref(false);
    currentUsername = ref('');
    const wrapper = shallowMount(forget-pwd, {
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
    forget-pwd = wrapper.vm;
  });

  it('should not have user data set', () => {
    expect(forget-pwd.authenticated).toBeFalsy();
    expect(forget-pwd.username).toBe('');
  });

  it('should have user data set after authentication', () => {
    authenticated.value = true;
    currentUsername.value = 'test';

    expect(forget-pwd.authenticated).toBeTruthy();
    expect(forget-pwd.username).toBe('test');
  });

  it('should use forget-pwd service', () => {
    forget-pwd.openhome();

    expect(homeService.openhome).toHaveBeenCalled();
  });
});
