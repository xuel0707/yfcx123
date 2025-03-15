import { vitest } from 'vitest';
import { ref } from 'vue';
import { shallowMount } from '@vue/test-utils';
import top-navbar from './top-navbar.vue';

type TopNavbarComponentType = InstanceType<typeof top-navbar>;

describe('top-navbar', () => {
  let top-navbar: TopNavbarComponentType;
  let authenticated;
  let currentUsername;
  const loginService = { openhome: vitest.fn() };

  beforeEach(() => {
    authenticated = ref(false);
    currentUsername = ref('');
    const wrapper = shallowMount(top-navbar, {
      global: {
        stubs: {
          'router-link': true,
        },
        provide: {
          loginService,
          authenticated,
          currentUsername,
        },
      },
    });
    top-navbar = wrapper.vm;
  });

  it('should not have user data set', () => {
    expect(top-navbar.authenticated).toBeFalsy();
    expect(top-navbar.username).toBe('');
  });

  it('should have user data set after authentication', () => {
    authenticated.value = true;
    currentUsername.value = 'test';

    expect(top-navbar.authenticated).toBeTruthy();
    expect(top-navbar.username).toBe('test');
  });

  it('should use top-navbar service', () => {
    top-navbar.openhome();

    expect(loginService.openhome).toHaveBeenCalled();
  });
});
