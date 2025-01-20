import { vitest } from 'vitest';
import { ref } from 'vue';
import { shallowMount } from '@vue/test-utils';
import register from './register.vue';

type HomeComponentType = InstanceType<typeof register>;

describe('register', () => {
  let register: HomeComponentType;
  let authenticated;
  let currentUsername;
  const homeService = { openhome: vitest.fn() };

  beforeEach(() => {
    authenticated = ref(false);
    currentUsername = ref('');
    const wrapper = shallowMount(register, {
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
    register = wrapper.vm;
  });

  it('should not have user data set', () => {
    expect(register.authenticated).toBeFalsy();
    expect(register.username).toBe('');
  });

  it('should have user data set after authentication', () => {
    authenticated.value = true;
    currentUsername.value = 'test';

    expect(register.authenticated).toBeTruthy();
    expect(register.username).toBe('test');
  });

  it('should use register service', () => {
    register.openhome();

    expect(homeService.openhome).toHaveBeenCalled();
  });
});
