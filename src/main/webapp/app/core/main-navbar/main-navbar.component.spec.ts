import { vitest } from 'vitest';
import { ref } from 'vue';
import { shallowMount } from '@vue/test-utils';
import main-navbar from './main-navbar.vue';

type TopNavbarComponentType = InstanceType<typeof main-navbar>;

describe('main-navbar', () => {
  let main-navbar: TopNavbarComponentType;
  let authenticated;
  let currentUsername;
  const loginService = { openhome: vitest.fn() };

  beforeEach(() => {
    authenticated = ref(false);
    currentUsername = ref('');
    const wrapper = shallowMount(main-navbar, {
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
    main-navbar = wrapper.vm;
  });

  it('should not have user data set', () => {
    expect(main-navbar.authenticated).toBeFalsy();
    expect(main-navbar.username).toBe('');
  });

  it('should have user data set after authentication', () => {
    authenticated.value = true;
    currentUsername.value = 'test';

    expect(main-navbar.authenticated).toBeTruthy();
    expect(main-navbar.username).toBe('test');
  });

  it('should use main-navbar service', () => {
    main-navbar.openhome();

    expect(loginService.openhome).toHaveBeenCalled();
  });
});
